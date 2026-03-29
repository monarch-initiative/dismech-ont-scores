window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030178"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030178",
  "term_label": "Abnormality of central nervous system electrophysiology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.284927,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Temple-Baraitser Syndrome",
      "disease_term_id": "MONDO:0012735",
      "source_file": "Temple-Baraitser_Syndrome.yaml",
      "term_id": "HP:0030178",
      "term_label": "Abnormality of central nervous system electrophysiology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002353",
      "best_source_term_label": "EEG abnormality",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002353"
      ],
      "supporting_source_term_labels": [
        "EEG abnormality"
      ],
      "supporting_source_node_names": [
        "EEG abnormalities"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "HP:0030178",
      "term_label": "Abnormality of central nervous system electrophysiology",
      "score": 0.138652,
      "direct_score": 0.0,
      "propagated_score": 0.16807,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002521",
      "best_source_term_label": "Hypsarrhythmia",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002521"
      ],
      "supporting_source_term_labels": [
        "Hypsarrhythmia"
      ],
      "supporting_source_node_names": [
        "Hypsarrhythmia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "HP:0030178",
      "term_label": "Abnormality of central nervous system electrophysiology",
      "score": 0.138652,
      "direct_score": 0.0,
      "propagated_score": 0.16807,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0010851",
      "best_source_term_label": "EEG with burst suppression",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010851"
      ],
      "supporting_source_term_labels": [
        "EEG with burst suppression"
      ],
      "supporting_source_node_names": [
        "EEG with burst suppression"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030178" } }));
