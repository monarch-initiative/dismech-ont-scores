window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008284"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008284",
  "term_label": "positive regulation of cell population proliferation",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0008433",
      "source_file": "Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0008284",
      "term_label": "positive regulation of cell population proliferation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0008284",
      "best_source_term_label": "positive regulation of cell population proliferation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008284"
      ],
      "supporting_source_term_labels": [
        "positive regulation of cell population proliferation"
      ],
      "supporting_source_node_names": [
        "Neuron-Driven Proliferation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "GO:0008284",
      "term_label": "positive regulation of cell population proliferation",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0048661",
      "best_source_term_label": "positive regulation of smooth muscle cell proliferation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048661"
      ],
      "supporting_source_term_labels": [
        "positive regulation of smooth muscle cell proliferation"
      ],
      "supporting_source_node_names": [
        "Vascular Remodeling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008284" } }));
