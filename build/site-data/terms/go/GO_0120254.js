window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0120254"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0120254",
  "term_label": "olefinic compound metabolic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.415131,
  "mean_score": 0.352861,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "GO:0120254",
      "term_label": "olefinic compound metabolic process",
      "score": 0.415131,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0019369",
      "best_source_term_label": "arachidonate metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019369"
      ],
      "supporting_source_term_labels": [
        "arachidonate metabolic process"
      ],
      "supporting_source_node_names": [
        "Arachidonic Acid Metabolism Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "GO:0120254",
      "term_label": "olefinic compound metabolic process",
      "score": 0.290592,
      "direct_score": 0.0,
      "propagated_score": 0.326667,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0061370",
      "best_source_term_label": "testosterone biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061370"
      ],
      "supporting_source_term_labels": [
        "testosterone biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Hypergonadotropic Hypogonadism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0120254" } }));
