window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000844"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000844",
  "term_label": "germinal center B cell",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.406154,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Primary_Tonsillar_Lymphoma",
      "disease_term_id": "MONDO:0044884",
      "source_file": "Primary_Tonsillar_Lymphoma.yaml",
      "term_id": "CL:0000844",
      "term_label": "germinal center B cell",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000844",
      "best_source_term_label": "germinal center B cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000844"
      ],
      "supporting_source_term_labels": [
        "germinal center B cell"
      ],
      "supporting_source_node_names": [
        "IRF4-rearranged Large B-cell Lymphoma",
        "Malignant B-cell Proliferation (Germinal Center Type)"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Diffuse Large B-Cell Lymphoma",
      "disease_term_id": "MONDO:0018905",
      "source_file": "Diffuse_Large_B_Cell_Lymphoma.yaml",
      "term_id": "CL:0000844",
      "term_label": "germinal center B cell",
      "score": 0.312309,
      "direct_score": 0.0,
      "propagated_score": 0.35108,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0009112",
      "best_source_term_label": "centroblast",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0009111",
        "CL:0009112"
      ],
      "supporting_source_term_labels": [
        "centroblast",
        "centrocyte"
      ],
      "supporting_source_node_names": [
        "Germinal Center B-cell Origin"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000844" } }));
