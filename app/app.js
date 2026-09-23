const DATA_ROOT = "build/site-data";

class OntologyScoresApp {
  constructor() {
    this.manifest = null;
    this.overview = null;
    this.termIndex = [];
    this.termByKey = new Map();
    this.selectedOntology = "all";
    this.query = "";
    this.selectedTermKey = null;
    this.loadedScripts = new Set();
  }

  async init() {
    try {
      const [manifest, overview, termIndex] = await Promise.all([
        this.waitForGlobal("ontologyScoresManifest", "ontologyScoresManifestReady"),
        this.waitForGlobal("ontologyScoresOverview", "ontologyScoresOverviewReady"),
        this.waitForGlobal("ontologyScoresTermIndex", "ontologyScoresTermIndexReady"),
      ]);
      if (manifest.release_id !== window.CONCEPT_RELEASE) throw new Error("The snapshot changed. Reload the page.");
      this.manifest = manifest;
      this.overview = overview;
      this.termIndex = termIndex;
      this.termIndex.forEach((term) => {
        this.termByKey.set(this.termKey(term.ontology, term.term_id), term);
      });

      this.bindControls();
      this.renderHero();
      this.renderDownloads();
      this.restoreFromHash();
      this.renderCatalogue();
      window.addEventListener("hashchange", () => this.restoreFromHash());
    } catch (error) {
      this.renderFatal(error);
    }
  }

  waitForGlobal(globalName, eventName, timeoutMs = 4000) {
    return new Promise((resolve, reject) => {
      if (window[globalName]) {
        resolve(window[globalName]);
        return;
      }

      const cleanup = () => {
        window.clearTimeout(timer);
        window.removeEventListener(eventName, onReady);
      };

      const onReady = () => {
        cleanup();
        resolve(window[globalName]);
      };

      const timer = window.setTimeout(() => {
        cleanup();
        reject(new Error(`Missing static data global: ${globalName}`));
      }, timeoutMs);

      window.addEventListener(eventName, onReady, { once: true });
    });
  }

  loadScript(path) {
    if (this.loadedScripts.has(path)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `${path}?v=${encodeURIComponent(window.CONCEPT_RELEASE || "")}`;
      script.async = false;
      script.onload = () => {
        this.loadedScripts.add(path);
        resolve();
      };
      script.onerror = () => reject(new Error(`Failed to load script ${path}`));
      document.head.appendChild(script);
    });
  }

  bindControls() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (event) => {
      this.query = event.target.value.trim().toLowerCase();
      this.renderCatalogue();
    });
  }

  renderHero() {
    document.getElementById("termCount").textContent = this.formatNumber(this.overview.total_terms);
    document.getElementById("rowCount").textContent = this.formatNumber(this.overview.total_rows);
    const sourceSha = this.manifest?.dismech_sha || this.overview.dismech_sha;
    document.getElementById("sourceSha").textContent = sourceSha
      ? sourceSha.slice(0, 12)
      : "unknown";
  }

  renderDownloads() {
    const root = document.getElementById("downloadList");
    if (!root) {
      return;
    }
    const downloads = this.manifest?.downloads || [];
    root.innerHTML = downloads.map((download) => `
      <a class="download-card" href="${this.escapeAttribute(`${DATA_ROOT}/${download.path}`)}">
        <strong>${this.escapeHtml(download.label)}</strong>
        <span class="download-meta">${this.escapeHtml(download.name)} · ${this.formatBytes(download.size_bytes)}</span>
      </a>
    `).join("");
  }

  queryFilteredTerms() {
    const queryTokens = this.query.split(/\s+/).filter(Boolean);
    return this.termIndex.filter((term) => {
      if (queryTokens.length === 0) {
        return true;
      }
      const haystack = `${term.term_label} ${term.term_id}`.toLowerCase();
      return queryTokens.every((token) => haystack.includes(token));
    });
  }

  computeFacetCounts() {
    const counts = { all: 0 };
    this.overview.ontologies.forEach((section) => {
      counts[section.ontology] = 0;
    });

    const visibleTerms = this.visibleTerms();
    counts.all = visibleTerms.length;
    visibleTerms.forEach((term) => {
      counts[term.ontology] = (counts[term.ontology] || 0) + 1;
    });
    return counts;
  }

  visibleTerms() {
    return this.queryFilteredTerms().filter((term) => {
      if (this.selectedOntology !== "all" && term.ontology !== this.selectedOntology) {
        return false;
      }
      return true;
    });
  }

  renderOntologyFilters(facetCounts) {
    const root = document.getElementById("ontologyPills");
    root.innerHTML = "";
    const items = [{ ontology: "all", short_label: "All" }, ...this.overview.ontologies];
    items.forEach((item) => {
      const button = document.createElement("button");
      button.className = `ontology-pill${this.selectedOntology === item.ontology ? " active" : ""}`;
      button.innerHTML = `
        <span>${this.escapeHtml(item.short_label)}</span>
        <span class="ontology-pill-count">${this.formatNumber(facetCounts[item.ontology] || 0)}</span>
      `;
      button.addEventListener("click", () => {
        this.selectedOntology = item.ontology;
        this.renderCatalogue();
      });
      root.appendChild(button);
    });
  }

  renderOntologySummary(facetCounts) {
    const root = document.getElementById("ontologySummary");
    const facetMeta = document.getElementById("facetMeta");
    root.innerHTML = "";
    facetMeta.textContent = `${this.formatNumber(facetCounts.all || 0)} visible terms`;
    this.overview.ontologies.forEach((section) => {
      const card = document.createElement("div");
      card.className = `ontology-summary-card${this.selectedOntology === section.ontology ? " active" : ""}`;

      const head = document.createElement("div");
      head.className = "ontology-summary-head";

      const title = document.createElement("h3");
      title.textContent = section.label;
      head.appendChild(title);

      const count = document.createElement("span");
      count.className = "summary-count";
      count.textContent = `${this.formatNumber(facetCounts[section.ontology] || 0)} match`;
      head.appendChild(count);

      card.appendChild(head);

      const meta = document.createElement("p");
      meta.textContent = `${this.formatNumber(section.term_count)} total terms · ${this.formatNumber(section.row_count)} disease-score rows`;
      card.appendChild(meta);

      const chips = document.createElement("div");
      chips.className = "summary-top-terms";
      section.top_terms.slice(0, 4).forEach((term) => {
        const chip = document.createElement("button");
        chip.className = "mini-chip";
        chip.textContent = term.term_label;
        chip.addEventListener("click", () => this.selectTerm(section.ontology, term.term_id));
        chips.appendChild(chip);
      });
      card.appendChild(chips);
      root.appendChild(card);
    });
  }

  restoreFromHash() {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash.startsWith("term/")) {
      this.selectedTermKey = null;
      this.renderDetail(null);
      return;
    }
    const [, ontology, encodedTermId] = hash.split("/");
    if (!ontology || !encodedTermId) {
      return;
    }
    const termId = decodeURIComponent(encodedTermId);
    const term = this.termByKey.get(this.termKey(ontology, termId));
    if (!term) {
      this.selectedTermKey = null;
      this.renderDetail(null);
      document.getElementById("detailPlaceholder").textContent = `No ranked associations for ${termId} in this snapshot. The annotation may be absent or outside the exported namespaces.`;
      return;
    }
    this.selectedOntology = ontology;
    this.renderCatalogue();
    this.loadTermDetail(term).catch((error) => this.renderFatal(error));
  }

  filteredTerms() {
    return this.visibleTerms();
  }

  renderCatalogue() {
    const facetCounts = this.computeFacetCounts();
    this.renderOntologyFilters(facetCounts);
    this.renderOntologySummary(facetCounts);

    const results = this.filteredTerms().sort((left, right) => {
      if (left.ontology !== right.ontology) {
        return left.ontology.localeCompare(right.ontology);
      }
      if (right.top_score !== left.top_score) {
        return right.top_score - left.top_score;
      }
      return left.term_label.localeCompare(right.term_label);
    });

    const title = document.getElementById("catalogueTitle");
    title.textContent = this.selectedOntology === "all"
      ? "All terms"
      : `${this.labelForOntology(this.selectedOntology)} terms`;

    const visibleResults = results.slice(0, 200);
    document.getElementById("resultsMeta").textContent = results.length > visibleResults.length
      ? `Showing ${this.formatNumber(visibleResults.length)} of ${this.formatNumber(results.length)} matching terms`
      : `${this.formatNumber(results.length)} matching terms`;

    const emptyState = document.getElementById("emptyState");
    emptyState.classList.toggle("hidden", results.length > 0);

    const root = document.getElementById("termResults");
    root.innerHTML = "";

    visibleResults.forEach((term) => {
      const button = document.createElement("button");
      button.className = `term-card${this.selectedTermKey === this.termKey(term.ontology, term.term_id) ? " active" : ""}`;
      button.addEventListener("click", () => this.selectTerm(term.ontology, term.term_id));

      const heading = document.createElement("h3");
      heading.textContent = term.term_label;
      button.appendChild(heading);

      const curie = document.createElement("div");
      curie.className = "term-curie";
      curie.textContent = `${term.term_id} · ${term.ontology_label}`;
      button.appendChild(curie);

      const meta = document.createElement("div");
      meta.className = "term-meta";
      meta.innerHTML = `
        <span>${this.formatNumber(term.disease_count)} diseases</span>
        <span>${this.formatNumber(term.direct_disease_count)} direct</span>
        <span>top ${term.top_score.toFixed(3)}</span>
      `;
      button.appendChild(meta);

      root.appendChild(button);
    });
  }

  async selectTerm(ontology, termId) {
    window.location.hash = `term/${ontology}/${encodeURIComponent(termId)}`;
  }

  async loadTermDetail(term) {
    this.selectedTermKey = this.termKey(term.ontology, term.term_id);
    this.renderCatalogue();
    const selectedKey = this.selectedTermKey;
    const cache = window.ontologyScoresTermShards || {};
    if (!cache[this.selectedTermKey]) {
      await this.loadScript(`${DATA_ROOT}/${term.shard_path}`);
    }
    if (selectedKey !== this.selectedTermKey) return;
    const detail = (window.ontologyScoresTermShards || {})[selectedKey];
    if (!detail) {
      throw new Error(`Term shard did not populate for ${this.selectedTermKey}`);
    }
    if (detail.release_id !== this.manifest.release_id) throw new Error("The snapshot changed. Reload the page.");
    if (detail.columns) {
      detail.diseases = detail.diseases.map(row => Object.fromEntries(detail.columns.map((key, i) => [key, row[i]])));
      delete detail.columns;
    }
    this.renderDetail(detail);
    window.dispatchEvent(new CustomEvent("ontologyTermSelected", { detail }));
    this.revealDetail();
  }

  renderDetail(detail) {
    const placeholder = document.getElementById("detailPlaceholder");
    const root = document.getElementById("termDetail");

    if (!detail) {
      placeholder.classList.remove("hidden");
      root.classList.add("hidden");
      root.innerHTML = "";
      return;
    }

    placeholder.classList.add("hidden");
    root.classList.remove("hidden");

    const diseaseRows = detail.diseases.slice(0, 120).map((row) => {
      const diseasePageUrl = this.dismechDiseaseUrl(row.source_file, row.disorder_name);
      const explorerUrl = ConceptCore.entityRoute(ConceptCore.diseaseId(row.source_file));
      const diseaseNameHtml = diseasePageUrl
        ? `<a class="entity-link" href="${this.escapeAttribute(diseasePageUrl)}" target="_blank" rel="noopener noreferrer">${this.escapeHtml(row.disorder_name)}</a>`
        : this.escapeHtml(row.disorder_name);
      const diseaseCurieHtml = row.disease_term_id
        ? this.renderCurieLink(row.disease_term_id)
        : "No disease CURIE";
      const bestSourceLabel = this.escapeHtml(row.best_source_term_label || row.best_source_term_id || "n/a");
      const bestSourceCurie = row.best_source_term_id
        ? ` · ${this.renderCurieLink(row.best_source_term_id)}`
        : "";
      const dismechPageHtml = diseasePageUrl
        ? `<a class="external-link" href="${this.escapeAttribute(diseasePageUrl)}" target="_blank" rel="noopener noreferrer">dismech page</a>`
        : "";

      return `
      <article class="disease-row">
        <div>
          <h3 class="disease-name">${diseaseNameHtml}</h3>
          <div class="disease-id">${diseaseCurieHtml} · <a href="${this.escapeAttribute(explorerUrl)}">Explore similarities and mechanisms</a>${dismechPageHtml ? ` · ${dismechPageHtml}` : ""}</div>
        </div>
        <div class="score-stack">
          <span class="score-badge">score ${row.score.toFixed(3)}</span>
          <div class="meter"><span style="width:${Math.max(2, row.score * 100)}%"></span></div>
          <div class="disease-stats">
            direct ${row.direct_score.toFixed(3)} · propagated ${row.propagated_score.toFixed(3)} · specificity ${row.specificity.toFixed(3)}
          </div>
        </div>
        <div class="source-lines">
          <div><strong>Best source:</strong> ${bestSourceLabel}${bestSourceCurie}</div>
          <div><strong>Path:</strong> ${this.escapeHtml(row.best_source_path)}</div>
          <div><strong>Support:</strong> ${this.escapeHtml(row.supporting_source_node_names.join(", ") || "n/a")}</div>
          <div><strong>Signal:</strong> ${row.is_direct ? "direct" : "propagated"}</div>
        </div>
      </article>
    `;
    }).join("");

    root.innerHTML = `
      <div class="detail-header">
        <div class="detail-title">
          <p class="eyebrow">${this.escapeHtml(detail.ontology_label)}</p>
          <h2>${this.escapeHtml(detail.term_label)}</h2>
          <div class="detail-id">${this.renderCurieLink(detail.term_id)}</div>
        </div>
        <div class="detail-stats">
          <span class="pill">${this.formatNumber(detail.disease_count)} diseases</span>
          <span class="pill">${this.formatNumber(detail.direct_disease_count)} direct</span>
          <span class="pill">top ${detail.top_score.toFixed(3)}</span>
        </div>
      </div>
      <div class="disease-list">${diseaseRows}</div>
    `;
  }

  revealDetail() {
    if (window.innerWidth >= 1081) {
      return;
    }
    const panel = document.getElementById("detailPanel");
    const rect = panel.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const aboveViewport = rect.top < 0;
    const belowViewport = rect.top > viewportHeight * 0.72;
    if (window.innerWidth < 1081 || aboveViewport || belowViewport) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  renderFatal(error) {
    const panel = document.getElementById("detailPanel");
    panel.innerHTML = `
      <div class="detail-placeholder">
        <p class="eyebrow">Load error</p>
        <h2>Browser data is not ready</h2>
        <p>${this.escapeHtml(String(error.message || error))}</p>
        <p>Run <code>just rebuild ../dismech</code> from the repo root, then refresh or reopen <code>index.html</code>.</p>
      </div>
    `;
  }

  labelForOntology(key) {
    const section = this.overview.ontologies.find((item) => item.ontology === key);
    return section ? section.label : key;
  }

  termKey(ontology, termId) {
    return `${ontology}::${termId}`;
  }

  formatNumber(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  formatBytes(value) {
    const bytes = Number(value || 0);
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
    if (bytes >= 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${bytes} B`;
  }

  bioregistryUrl(curie) {
    return `https://bioregistry.io/${encodeURIComponent(curie)}`;
  }

  dismechDiseaseUrl(sourceFile, name) {
    if (!sourceFile) {
      return "";
    }
    const slug = name.replaceAll(" ", "_").replaceAll("/", "_").replaceAll("(", "").replaceAll(")", "");
    return `https://dismech.monarchinitiative.org/pages/disorders/${encodeURIComponent(slug)}.html`;
  }

  renderCurieLink(curie, label = curie) {
    if (!curie) {
      return "";
    }
    return `<a class="curie-link" href="${this.escapeAttribute(this.bioregistryUrl(curie))}" target="_blank" rel="noopener noreferrer">${this.escapeHtml(label)}</a>`;
  }

  escapeAttribute(text) {
    return this.escapeHtml(text);
  }

  escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  const app = new OntologyScoresApp();
  await app.init();
});
