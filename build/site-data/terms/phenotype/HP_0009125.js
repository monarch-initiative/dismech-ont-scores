window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009125"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009125",
  "term_label": "Lipodystrophy",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Methylmalonic Acidemia",
      "disease_term_id": "MONDO:0002012",
      "source_file": "Methylmalonic_Acidemia.yaml",
      "term_id": "HP:0009125",
      "term_label": "Lipodystrophy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0009125",
      "best_source_term_label": "Lipodystrophy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009125"
      ],
      "supporting_source_term_labels": [
        "Lipodystrophy"
      ],
      "supporting_source_node_names": [
        "Lipodystrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009125" } }));
