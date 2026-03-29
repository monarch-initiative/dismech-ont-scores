window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003391"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003391",
  "term_label": "Gowers sign",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Duchenne Muscular Dystrophy",
      "disease_term_id": "MONDO:0010679",
      "source_file": "Duchenne_Muscular_Dystrophy.yaml",
      "term_id": "HP:0003391",
      "term_label": "Gowers sign",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0003391",
      "best_source_term_label": "Gowers sign",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003391"
      ],
      "supporting_source_term_labels": [
        "Gowers sign"
      ],
      "supporting_source_node_names": [
        "Gowers Sign"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003391" } }));
