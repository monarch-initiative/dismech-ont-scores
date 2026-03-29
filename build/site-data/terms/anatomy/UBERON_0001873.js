window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001873"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001873",
  "term_label": "caudate nucleus",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.148837,
  "mean_score": 0.148837,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Glutaryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0009281",
      "source_file": "Glutaryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "UBERON:0001873",
      "term_label": "caudate nucleus",
      "score": 0.148837,
      "direct_score": 0.148837,
      "propagated_score": 0.148837,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001873",
      "best_source_term_label": "caudate nucleus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001873"
      ],
      "supporting_source_term_labels": [
        "caudate nucleus"
      ],
      "supporting_source_node_names": [
        "Striatal vulnerability and encephalopathic crises"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001873" } }));
