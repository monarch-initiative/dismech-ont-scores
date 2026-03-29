window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0018212"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0018212",
  "term_label": "peptidyl-tyrosine modification",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.28,
  "mean_score": 0.28,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Chronic Myeloid Leukemia, BCR-ABL1 Positive",
      "disease_term_id": "MONDO:0011996",
      "source_file": "Chronic_Myeloid_Leukemia.yaml",
      "term_id": "GO:0018212",
      "term_label": "peptidyl-tyrosine modification",
      "score": 0.28,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0018108",
      "best_source_term_label": "peptidyl-tyrosine phosphorylation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0018108"
      ],
      "supporting_source_term_labels": [
        "peptidyl-tyrosine phosphorylation"
      ],
      "supporting_source_node_names": [
        "Constitutive Tyrosine Kinase Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0018212" } }));
