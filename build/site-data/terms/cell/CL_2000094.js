window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:2000094"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:2000094",
  "term_label": "nasal cavity respiratory epithelium epithelial cell of viscerocranial mucosa",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "CL:2000094",
      "term_label": "nasal cavity respiratory epithelium epithelial cell of viscerocranial mucosa",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:2000094",
      "best_source_term_label": "nasal cavity respiratory epithelium epithelial cell of viscerocranial mucosa",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:2000094"
      ],
      "supporting_source_term_labels": [
        "nasal cavity respiratory epithelium epithelial cell of viscerocranial mucosa"
      ],
      "supporting_source_node_names": [
        "Turbinate tissue loss from surgical resection"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:2000094" } }));
