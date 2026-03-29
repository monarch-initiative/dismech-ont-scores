window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0018108"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0018108",
  "term_label": "peptidyl-tyrosine phosphorylation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Chronic Myeloid Leukemia, BCR-ABL1 Positive",
      "disease_term_id": "MONDO:0011996",
      "source_file": "Chronic_Myeloid_Leukemia.yaml",
      "term_id": "GO:0018108",
      "term_label": "peptidyl-tyrosine phosphorylation",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0018108",
      "best_source_term_label": "peptidyl-tyrosine phosphorylation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0018108" } }));
