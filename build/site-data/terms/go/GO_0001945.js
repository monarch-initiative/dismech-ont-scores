window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001945"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001945",
  "term_label": "lymph vessel development",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.535582,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "GO:0001945",
      "term_label": "lymph vessel development",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0001945",
      "best_source_term_label": "lymph vessel development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001945"
      ],
      "supporting_source_term_labels": [
        "lymph vessel development"
      ],
      "supporting_source_node_names": [
        "Lymphatic dysfunction with intralymphatic histiocytosis and persistent edema"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "GO:0001945",
      "term_label": "lymph vessel development",
      "score": 0.071165,
      "direct_score": 0.0,
      "propagated_score": 0.08,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0001946",
      "best_source_term_label": "lymphangiogenesis",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0001946"
      ],
      "supporting_source_term_labels": [
        "lymphangiogenesis"
      ],
      "supporting_source_node_names": [
        "Aberrant Vascular Development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001945" } }));
