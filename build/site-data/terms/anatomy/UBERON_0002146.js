window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002146"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002146",
  "term_label": "pulmonary valve",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.285714,
  "mean_score": 0.285714,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "UBERON:0002146",
      "term_label": "pulmonary valve",
      "score": 0.285714,
      "direct_score": 0.285714,
      "propagated_score": 0.285714,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002146",
      "best_source_term_label": "pulmonary valve",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002146"
      ],
      "supporting_source_term_labels": [
        "pulmonary valve"
      ],
      "supporting_source_node_names": [
        "Cardiac Valve Morphogenesis Defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002146" } }));
