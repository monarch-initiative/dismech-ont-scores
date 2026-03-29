window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060070"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060070",
  "term_label": "canonical Wnt signaling pathway",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.8,
  "mean_score": 0.733334,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Medulloblastoma, WNT-Activated",
      "disease_term_id": "MONDO:0850196",
      "source_file": "Medulloblastoma_WNT_Activated.yaml",
      "term_id": "GO:0060070",
      "term_label": "canonical Wnt signaling pathway",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0060070",
      "best_source_term_label": "canonical Wnt signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060070"
      ],
      "supporting_source_term_labels": [
        "canonical Wnt signaling pathway"
      ],
      "supporting_source_node_names": [
        "Nuclear Beta-Catenin Accumulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "GO:0060070",
      "term_label": "canonical Wnt signaling pathway",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0060070",
      "best_source_term_label": "canonical Wnt signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060070"
      ],
      "supporting_source_term_labels": [
        "canonical Wnt signaling pathway"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060070" } }));
