window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001678"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001678",
  "term_label": "Atrioventricular block",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "HP:0001678",
      "term_label": "Atrioventricular block",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001678",
      "best_source_term_label": "Atrioventricular block",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001678"
      ],
      "supporting_source_term_labels": [
        "Atrioventricular block"
      ],
      "supporting_source_node_names": [
        "Atrioventricular block"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lyme Disease",
      "disease_term_id": "MONDO:0019632",
      "source_file": "Lyme_Disease.yaml",
      "term_id": "HP:0001678",
      "term_label": "Atrioventricular block",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001678",
      "best_source_term_label": "Atrioventricular block",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001678"
      ],
      "supporting_source_term_labels": [
        "Atrioventricular block"
      ],
      "supporting_source_node_names": [
        "Atrioventricular Block"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001678" } }));
