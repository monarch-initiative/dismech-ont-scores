window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:6001025"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:6001025",
  "term_label": "Pathological inclusion body",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.153664,
  "mean_score": 0.153664,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "HP:6001025",
      "term_label": "Pathological inclusion body",
      "score": 0.153664,
      "direct_score": 0.0,
      "propagated_score": 0.153664,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003798",
      "best_source_term_label": "Nemaline bodies",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003798"
      ],
      "supporting_source_term_labels": [
        "Nemaline bodies"
      ],
      "supporting_source_node_names": [
        "Nemaline Bodies"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:6001025" } }));
