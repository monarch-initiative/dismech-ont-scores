window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0009111"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0009111",
  "term_label": "centrocyte",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.277778,
  "mean_score": 0.277778,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Diffuse Large B-Cell Lymphoma",
      "disease_term_id": "MONDO:0018905",
      "source_file": "Diffuse_Large_B_Cell_Lymphoma.yaml",
      "term_id": "CL:0009111",
      "term_label": "centrocyte",
      "score": 0.277778,
      "direct_score": 0.277778,
      "propagated_score": 0.277778,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0009111",
      "best_source_term_label": "centrocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0009111"
      ],
      "supporting_source_term_labels": [
        "centrocyte"
      ],
      "supporting_source_node_names": [
        "Germinal Center B-cell Origin"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0009111" } }));
