window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011034"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011034",
  "term_label": "Amyloid deposition",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Mediterranean Fever",
      "disease_term_id": "MONDO:0018088",
      "source_file": "Familial_Mediterranean_Fever.yaml",
      "term_id": "HP:0011034",
      "term_label": "Amyloid deposition",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0011034",
      "best_source_term_label": "Amyloid deposition",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011034"
      ],
      "supporting_source_term_labels": [
        "Amyloid deposition"
      ],
      "supporting_source_node_names": [
        "Amyloidosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011034" } }));
