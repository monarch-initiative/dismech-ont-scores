window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000609"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000609",
  "term_label": "vestibular hair cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.857143,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "CL:0000609",
      "term_label": "vestibular hair cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000609",
      "best_source_term_label": "vestibular hair cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000609"
      ],
      "supporting_source_term_labels": [
        "vestibular hair cell"
      ],
      "supporting_source_node_names": [
        "Abnormal Sound and Pressure Transmission"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "CL:0000609",
      "term_label": "vestibular hair cell",
      "score": 0.714286,
      "direct_score": 0.714286,
      "propagated_score": 0.714286,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000609",
      "best_source_term_label": "vestibular hair cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000609"
      ],
      "supporting_source_term_labels": [
        "vestibular hair cell"
      ],
      "supporting_source_node_names": [
        "Vestibular neuroepithelial damage"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000609" } }));
