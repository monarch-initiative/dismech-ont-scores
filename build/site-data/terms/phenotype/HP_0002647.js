window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002647"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002647",
  "term_label": "Aortic dissection",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.666667,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "HP:0002647",
      "term_label": "Aortic dissection",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002647",
      "best_source_term_label": "Aortic dissection",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002647"
      ],
      "supporting_source_term_labels": [
        "Aortic dissection"
      ],
      "supporting_source_node_names": [
        "Aortic Dissection"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hypertensive Heart Disease",
      "disease_term_id": "MONDO:0001302",
      "source_file": "Hypertensive_Heart_Disease.yaml",
      "term_id": "HP:0002647",
      "term_label": "Aortic dissection",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002647",
      "best_source_term_label": "Aortic dissection",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002647"
      ],
      "supporting_source_term_labels": [
        "Aortic dissection"
      ],
      "supporting_source_node_names": [
        "Aortic Dissection"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002647" } }));
