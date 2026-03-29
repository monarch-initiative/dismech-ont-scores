window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000189"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000189",
  "term_label": "slow muscle cell",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.622697,
  "mean_score": 0.478015,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "CL:0000189",
      "term_label": "slow muscle cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002211",
      "best_source_term_label": "type I muscle cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002211"
      ],
      "supporting_source_term_labels": [
        "type I muscle cell"
      ],
      "supporting_source_node_names": [
        "Thin Filament Dysfunction"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "CL:0000189",
      "term_label": "slow muscle cell",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000189",
      "best_source_term_label": "slow muscle cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000189"
      ],
      "supporting_source_term_labels": [
        "slow muscle cell"
      ],
      "supporting_source_node_names": [
        "Abnormal RyR1 calcium release channel function"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000189" } }));
