window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001756"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001756",
  "term_label": "middle ear",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Cholesteatoma",
      "disease_term_id": "MONDO:0006530",
      "source_file": "Cholesteatoma.yaml",
      "term_id": "UBERON:0001756",
      "term_label": "middle ear",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001756",
      "best_source_term_label": "middle ear",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001756",
        "UBERON:0002364"
      ],
      "supporting_source_term_labels": [
        "middle ear",
        "tympanic membrane"
      ],
      "supporting_source_node_names": [
        "Activin A-mediated local osteoclastogenesis",
        "Extracellular matrix remodeling in the perimatrix",
        "Keratinizing squamous epithelium overgrowth in the middle ear",
        "Local temporal bone erosion",
        "Neoangiogenesis in the perimatrix",
        "Ossicular chain erosion",
        "Osteopontin/AKT/ZEB2-driven partial epithelial-mesenchymal transition",
        "Perimatrix inflammatory cytokine and STAT3 signaling amplification",
        "Polymicrobial bacterial persistence in cholesteatoma tissue",
        "Tympanic facial canal dehiscence",
        "Wnt/beta-catenin pathway activation in cholesteatoma epithelium"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001756" } }));
