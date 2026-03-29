window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002488"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002488",
  "term_label": "Acute leukemia",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Li-Fraumeni Syndrome",
      "disease_term_id": "MONDO:0018875",
      "source_file": "Li-Fraumeni_Syndrome.yaml",
      "term_id": "HP:0002488",
      "term_label": "Acute leukemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002488",
      "best_source_term_label": "Acute leukemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002488"
      ],
      "supporting_source_term_labels": [
        "Acute leukemia"
      ],
      "supporting_source_node_names": [
        "Leukemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Diamond-Blackfan Anemia",
      "disease_term_id": "MONDO:0015253",
      "source_file": "Diamond-Blackfan_Anemia.yaml",
      "term_id": "HP:0002488",
      "term_label": "Acute leukemia",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0004808",
      "best_source_term_label": "Acute myeloid leukemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004808"
      ],
      "supporting_source_term_labels": [
        "Acute myeloid leukemia"
      ],
      "supporting_source_node_names": [
        "Acute Myeloid Leukemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002488" } }));
