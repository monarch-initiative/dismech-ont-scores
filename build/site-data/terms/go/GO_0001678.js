window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001678"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001678",
  "term_label": "intracellular glucose homeostasis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.256,
  "mean_score": 0.256,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "GO:0001678",
      "term_label": "intracellular glucose homeostasis",
      "score": 0.256,
      "direct_score": 0.256,
      "propagated_score": 0.256,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0001678",
      "best_source_term_label": "intracellular glucose homeostasis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001678"
      ],
      "supporting_source_term_labels": [
        "intracellular glucose homeostasis"
      ],
      "supporting_source_node_names": [
        "Growth Factor and Metabolic Reprogramming"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001678" } }));
