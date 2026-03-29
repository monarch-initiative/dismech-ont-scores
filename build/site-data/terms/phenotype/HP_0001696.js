window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001696"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001696",
  "term_label": "Situs inversus totalis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.804878,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0001696",
      "term_label": "Situs inversus totalis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001696",
      "best_source_term_label": "Situs inversus totalis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001696"
      ],
      "supporting_source_term_labels": [
        "Situs inversus totalis"
      ],
      "supporting_source_node_names": [
        "Situs Inversus"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "HP:0001696",
      "term_label": "Situs inversus totalis",
      "score": 0.609756,
      "direct_score": 0.609756,
      "propagated_score": 0.609756,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001696",
      "best_source_term_label": "Situs inversus totalis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001696"
      ],
      "supporting_source_term_labels": [
        "Situs inversus totalis"
      ],
      "supporting_source_node_names": [
        "Situs Inversus Totalis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001696" } }));
