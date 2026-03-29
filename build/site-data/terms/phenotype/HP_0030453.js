window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030453"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030453",
  "term_label": "Abnormal visual electrophysiology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "PRPH2-Related Retinopathy",
      "disease_term_id": "MONDO:1040055",
      "source_file": "PRPH2-Related_Retinopathy.yaml",
      "term_id": "HP:0030453",
      "term_label": "Abnormal visual electrophysiology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000512",
      "best_source_term_label": "Abnormal electroretinogram",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "HP:0030453",
      "term_label": "Abnormal visual electrophysiology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000512",
      "best_source_term_label": "Abnormal electroretinogram",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030453" } }));
