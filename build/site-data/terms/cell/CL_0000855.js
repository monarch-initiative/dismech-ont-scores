window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000855"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000855",
  "term_label": "sensory hair cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.600458,
  "mean_score": 0.518173,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "CL:0000855",
      "term_label": "sensory hair cell",
      "score": 0.600458,
      "direct_score": 0.0,
      "propagated_score": 0.675,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000202",
      "best_source_term_label": "auditory hair cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000202",
        "CL:0000609"
      ],
      "supporting_source_term_labels": [
        "auditory hair cell",
        "vestibular hair cell"
      ],
      "supporting_source_node_names": [
        "Cochlear hair cell injury",
        "Vestibular neuroepithelial damage"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "CL:0000855",
      "term_label": "sensory hair cell",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000609",
      "best_source_term_label": "vestibular hair cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000855" } }));
