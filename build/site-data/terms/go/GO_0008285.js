window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008285"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008285",
  "term_label": "negative regulation of cell population proliferation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "IDH-Mutant and 1p/19q-Codeleted Oligodendroglioma",
      "disease_term_id": "MONDO:0859592",
      "source_file": "IDH_Mutant_Oligodendroglioma.yaml",
      "term_id": "GO:0008285",
      "term_label": "negative regulation of cell population proliferation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0008285",
      "best_source_term_label": "negative regulation of cell population proliferation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008285"
      ],
      "supporting_source_term_labels": [
        "negative regulation of cell population proliferation"
      ],
      "supporting_source_node_names": [
        "CIC/FUBP1 Tumor Suppressor Loss"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008285" } }));
