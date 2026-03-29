window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000512"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000512",
  "term_label": "Abnormal electroretinogram",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "PRPH2-Related Retinopathy",
      "disease_term_id": "MONDO:1040055",
      "source_file": "PRPH2-Related_Retinopathy.yaml",
      "term_id": "HP:0000512",
      "term_label": "Abnormal electroretinogram",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000512",
      "best_source_term_label": "Abnormal electroretinogram",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000512"
      ],
      "supporting_source_term_labels": [
        "Abnormal electroretinogram"
      ],
      "supporting_source_node_names": [
        "Abnormal electroretinogram"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "HP:0000512",
      "term_label": "Abnormal electroretinogram",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000512",
      "best_source_term_label": "Abnormal electroretinogram",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000512"
      ],
      "supporting_source_term_labels": [
        "Abnormal electroretinogram"
      ],
      "supporting_source_node_names": [
        "Abnormal electroretinogram"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000512" } }));
