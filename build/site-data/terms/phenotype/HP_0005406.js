window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0005406"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0005406",
  "term_label": "Recurrent bacterial skin infections",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.448,
  "mean_score": 0.448,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "HP:0005406",
      "term_label": "Recurrent bacterial skin infections",
      "score": 0.448,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0100838",
      "best_source_term_label": "Recurrent cutaneous abscess formation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100838"
      ],
      "supporting_source_term_labels": [
        "Recurrent cutaneous abscess formation"
      ],
      "supporting_source_node_names": [
        "Recurrent cutaneous abscess formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0005406" } }));
