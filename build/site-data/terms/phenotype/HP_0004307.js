window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004307"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004307",
  "term_label": "Abnormal anatomic location of the heart",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.409399,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "HP:0004307",
      "term_label": "Abnormal anatomic location of the heart",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001651",
      "best_source_term_label": "Dextrocardia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001651"
      ],
      "supporting_source_term_labels": [
        "Dextrocardia"
      ],
      "supporting_source_node_names": [
        "Dextroposition of the heart"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0004307",
      "term_label": "Abnormal anatomic location of the heart",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001696",
      "best_source_term_label": "Situs inversus totalis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "HP:0004307",
      "term_label": "Abnormal anatomic location of the heart",
      "score": 0.246484,
      "direct_score": 0.0,
      "propagated_score": 0.29878,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001696",
      "best_source_term_label": "Situs inversus totalis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004307" } }));
