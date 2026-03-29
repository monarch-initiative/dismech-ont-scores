window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002504"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002504",
  "term_label": "enteric smooth muscle cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Peutz-Jeghers polyp",
      "disease_term_id": "MONDO:0006365",
      "source_file": "Peutz_Jeghers_polyp.yaml",
      "term_id": "CL:0002504",
      "term_label": "enteric smooth muscle cell",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002504",
      "best_source_term_label": "enteric smooth muscle cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002504"
      ],
      "supporting_source_term_labels": [
        "enteric smooth muscle cell"
      ],
      "supporting_source_node_names": [
        "STK11 loss-of-function signaling disruption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002504" } }));
