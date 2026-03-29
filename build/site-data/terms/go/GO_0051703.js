window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051703"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051703",
  "term_label": "biological process involved in intraspecies interaction between organisms",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.56,
  "mean_score": 0.56,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "GO:0051703",
      "term_label": "biological process involved in intraspecies interaction between organisms",
      "score": 0.56,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0044010",
      "best_source_term_label": "single-species biofilm formation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044010"
      ],
      "supporting_source_term_labels": [
        "single-species biofilm formation"
      ],
      "supporting_source_node_names": [
        "MSSA-dominant persistent virulence reservoir",
        "Single-species biofilm establishment in chronic furunculosis lesions"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051703" } }));
