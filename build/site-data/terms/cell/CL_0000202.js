window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000202"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000202",
  "term_label": "auditory hair cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.714286,
  "mean_score": 0.714286,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "CL:0000202",
      "term_label": "auditory hair cell",
      "score": 0.714286,
      "direct_score": 0.714286,
      "propagated_score": 0.714286,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000202",
      "best_source_term_label": "auditory hair cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000202"
      ],
      "supporting_source_term_labels": [
        "auditory hair cell"
      ],
      "supporting_source_node_names": [
        "Cochlear hair cell injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000202" } }));
