window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050953"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050953",
  "term_label": "sensory perception of light stimulus",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.578545,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "GO:0050953",
      "term_label": "sensory perception of light stimulus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0050953",
      "best_source_term_label": "sensory perception of light stimulus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007601",
        "GO:0050953"
      ],
      "supporting_source_term_labels": [
        "sensory perception of light stimulus",
        "visual perception"
      ],
      "supporting_source_node_names": [
        "Central Cortical Processing"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Jeavons Syndrome",
      "disease_term_id": "MONDO:0015346",
      "source_file": "Jeavons_Syndrome.yaml",
      "term_id": "GO:0050953",
      "term_label": "sensory perception of light stimulus",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007601",
      "best_source_term_label": "visual perception",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007601"
      ],
      "supporting_source_term_labels": [
        "visual perception"
      ],
      "supporting_source_node_names": [
        "Disrupted Cortical Function"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Visual Snow Syndrome",
      "disease_term_id": "MONDO:0018486",
      "source_file": "Visual_Snow_Syndrome.yaml",
      "term_id": "GO:0050953",
      "term_label": "sensory perception of light stimulus",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007601",
      "best_source_term_label": "visual perception",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007601"
      ],
      "supporting_source_term_labels": [
        "visual perception"
      ],
      "supporting_source_node_names": [
        "Visual Cortex Hyperexcitability"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "GO:0050953",
      "term_label": "sensory perception of light stimulus",
      "score": 0.223393,
      "direct_score": 0.0,
      "propagated_score": 0.28672,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007601",
      "best_source_term_label": "visual perception",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007601"
      ],
      "supporting_source_term_labels": [
        "visual perception"
      ],
      "supporting_source_node_names": [
        "Secondary macular photoreceptor degeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050953" } }));
