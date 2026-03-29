window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002364"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002364",
  "term_label": "cortical thymic epithelial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.333333,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "CL:0002364",
      "term_label": "cortical thymic epithelial cell",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002364",
      "best_source_term_label": "cortical thymic epithelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002364"
      ],
      "supporting_source_term_labels": [
        "cortical thymic epithelial cell"
      ],
      "supporting_source_node_names": [
        "Thymic hypoplasia and T-cell immunodeficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002364" } }));
