window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071514"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071514",
  "term_label": "genomic imprinting",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.551471,
  "mean_score": 0.551471,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "GO:0071514",
      "term_label": "genomic imprinting",
      "score": 0.551471,
      "direct_score": 0.551471,
      "propagated_score": 0.551471,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0071514",
      "best_source_term_label": "genomic imprinting",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071514"
      ],
      "supporting_source_term_labels": [
        "genomic imprinting"
      ],
      "supporting_source_node_names": [
        "GNAS Imprinting-Dependent Signaling Defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071514" } }));
