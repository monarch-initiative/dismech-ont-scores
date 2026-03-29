window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009792"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009792",
  "term_label": "embryo development ending in birth or egg hatching",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.311349,
  "mean_score": 0.191998,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "GO:0009792",
      "term_label": "embryo development ending in birth or egg hatching",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0060037",
      "best_source_term_label": "pharyngeal system development",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0060037"
      ],
      "supporting_source_term_labels": [
        "pharyngeal system development"
      ],
      "supporting_source_node_names": [
        "TBX1 haploinsufficiency and pharyngeal arch development"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Spondylocarpotarsal Synostosis Syndrome",
      "disease_term_id": "MONDO:0010094",
      "source_file": "Spondylocarpotarsal_Synostosis_Syndrome.yaml",
      "term_id": "GO:0009792",
      "term_label": "embryo development ending in birth or egg hatching",
      "score": 0.072648,
      "direct_score": 0.0,
      "propagated_score": 0.081667,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0072498",
      "best_source_term_label": "embryonic skeletal joint development",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0072498"
      ],
      "supporting_source_term_labels": [
        "embryonic skeletal joint development"
      ],
      "supporting_source_node_names": [
        "Progressive Vertebral and Carpal Joint Fusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009792" } }));
