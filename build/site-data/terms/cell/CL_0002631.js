window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002631"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002631",
  "term_label": "epithelial cell of upper respiratory tract",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.868,
  "mean_score": 0.868,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "CL:0002631",
      "term_label": "epithelial cell of upper respiratory tract",
      "score": 0.868,
      "direct_score": 0.0,
      "propagated_score": 0.868,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:2000094",
      "best_source_term_label": "nasal cavity respiratory epithelium epithelial cell of viscerocranial mucosa",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002480",
        "CL:2000094"
      ],
      "supporting_source_term_labels": [
        "nasal cavity respiratory epithelium epithelial cell of viscerocranial mucosa",
        "nasal mucosa goblet cell"
      ],
      "supporting_source_node_names": [
        "Impaired mucociliary clearance",
        "Turbinate tissue loss from surgical resection"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002631" } }));
