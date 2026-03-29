window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002383"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002383",
  "term_label": "Infectious encephalitis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.7048,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Rabies",
      "disease_term_id": "MONDO:0019173",
      "source_file": "Rabies.yaml",
      "term_id": "HP:0002383",
      "term_label": "Infectious encephalitis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002383",
      "best_source_term_label": "Infectious encephalitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002383"
      ],
      "supporting_source_term_labels": [
        "Infectious encephalitis"
      ],
      "supporting_source_node_names": [
        "Infectious encephalitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "HP:0002383",
      "term_label": "Infectious encephalitis",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002383",
      "best_source_term_label": "Infectious encephalitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002383"
      ],
      "supporting_source_term_labels": [
        "Infectious encephalitis"
      ],
      "supporting_source_node_names": [
        "Brainstem encephalitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002383" } }));
