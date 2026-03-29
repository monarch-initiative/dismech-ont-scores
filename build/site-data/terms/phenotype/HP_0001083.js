window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001083"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001083",
  "term_label": "Ectopia lentis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Homocystinuria",
      "disease_term_id": "MONDO:0004737",
      "source_file": "Homocystinuria.yaml",
      "term_id": "HP:0001083",
      "term_label": "Ectopia lentis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001083",
      "best_source_term_label": "Ectopia lentis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001083"
      ],
      "supporting_source_term_labels": [
        "Ectopia lentis"
      ],
      "supporting_source_node_names": [
        "Ectopia lentis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "HP:0001083",
      "term_label": "Ectopia lentis",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001083",
      "best_source_term_label": "Ectopia lentis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001083"
      ],
      "supporting_source_term_labels": [
        "Ectopia lentis"
      ],
      "supporting_source_node_names": [
        "Ectopia Lentis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001083" } }));
