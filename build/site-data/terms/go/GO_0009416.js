window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009416"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009416",
  "term_label": "response to light stimulus",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.485703,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "GO:0009416",
      "term_label": "response to light stimulus",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0009583",
      "best_source_term_label": "detection of light stimulus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0009583"
      ],
      "supporting_source_term_labels": [
        "detection of light stimulus"
      ],
      "supporting_source_node_names": [
        "Trigeminal Melanopsin Photosensitivity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Spaceflight Associated Neuro-Ocular Syndrome",
      "disease_term_id": "",
      "source_file": "Spaceflight_Associated_Neuro-Ocular_Syndrome.yaml",
      "term_id": "GO:0009416",
      "term_label": "response to light stimulus",
      "score": 0.34871,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0007602",
      "best_source_term_label": "phototransduction",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007602"
      ],
      "supporting_source_term_labels": [
        "phototransduction"
      ],
      "supporting_source_node_names": [
        "Retinal Gene Expression Changes"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009416" } }));
