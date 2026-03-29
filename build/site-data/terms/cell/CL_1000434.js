window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1000434"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1000434",
  "term_label": "epithelial cell of external acoustic meatus",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Otomycosis",
      "disease_term_id": "MONDO:0000262",
      "source_file": "Otomycosis.yaml",
      "term_id": "CL:1000434",
      "term_label": "epithelial cell of external acoustic meatus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:1000434",
      "best_source_term_label": "epithelial cell of external acoustic meatus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1000434"
      ],
      "supporting_source_term_labels": [
        "epithelial cell of external acoustic meatus"
      ],
      "supporting_source_node_names": [
        "Disruption of cerumen antimicrobial barrier"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1000434" } }));
