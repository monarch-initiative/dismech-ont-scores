window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001193"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001193",
  "term_label": "Ulnar deviation of the hand or of fingers of the hand",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Costello Syndrome",
      "disease_term_id": "MONDO:0009026",
      "source_file": "Costello_Syndrome.yaml",
      "term_id": "HP:0001193",
      "term_label": "Ulnar deviation of the hand or of fingers of the hand",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0001193",
      "best_source_term_label": "Ulnar deviation of the hand or of fingers of the hand",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001193"
      ],
      "supporting_source_term_labels": [
        "Ulnar deviation of the hand or of fingers of the hand"
      ],
      "supporting_source_node_names": [
        "Ulnar Deviation of Hands"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001193" } }));
