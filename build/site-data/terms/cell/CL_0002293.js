window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002293"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002293",
  "term_label": "epithelial cell of thymus",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.68335,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Myasthenia Gravis",
      "disease_term_id": "MONDO:0009688",
      "source_file": "Myasthenia_Gravis.yaml",
      "term_id": "CL:0002293",
      "term_label": "epithelial cell of thymus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002293",
      "best_source_term_label": "epithelial cell of thymus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002293"
      ],
      "supporting_source_term_labels": [
        "epithelial cell of thymus"
      ],
      "supporting_source_node_names": [
        "Thymic Abnormalities"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "CL:0002293",
      "term_label": "epithelial cell of thymus",
      "score": 0.366699,
      "direct_score": 0.0,
      "propagated_score": 0.412222,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002365",
      "best_source_term_label": "medullary thymic epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002364",
        "CL:0002365"
      ],
      "supporting_source_term_labels": [
        "cortical thymic epithelial cell",
        "medullary thymic epithelial cell"
      ],
      "supporting_source_node_names": [
        "Thymic hypoplasia and T-cell immunodeficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002293" } }));
