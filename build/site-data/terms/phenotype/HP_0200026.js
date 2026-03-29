window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0200026"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0200026",
  "term_label": "Ocular pain",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Glaucoma",
      "disease_term_id": "MONDO:0005041",
      "source_file": "Glaucoma.yaml",
      "term_id": "HP:0200026",
      "term_label": "Ocular pain",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0200026",
      "best_source_term_label": "Ocular pain",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0200026"
      ],
      "supporting_source_term_labels": [
        "Ocular pain"
      ],
      "supporting_source_node_names": [
        "Eye Pain"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Retinoblastoma",
      "disease_term_id": "MONDO:0008380",
      "source_file": "Retinoblastoma.yaml",
      "term_id": "HP:0200026",
      "term_label": "Ocular pain",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0200026",
      "best_source_term_label": "Ocular pain",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0200026"
      ],
      "supporting_source_term_labels": [
        "Ocular pain"
      ],
      "supporting_source_node_names": [
        "Ocular Pain"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0200026" } }));
