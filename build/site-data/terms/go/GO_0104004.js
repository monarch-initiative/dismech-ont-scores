window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0104004"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0104004",
  "term_label": "cellular response to environmental stimulus",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.229066,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Osteoporosis",
      "disease_term_id": "MONDO:0005298",
      "source_file": "Osteoporosis.yaml",
      "term_id": "GO:0104004",
      "term_label": "cellular response to environmental stimulus",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0071260",
      "best_source_term_label": "cellular response to mechanical stimulus",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071260"
      ],
      "supporting_source_term_labels": [
        "cellular response to mechanical stimulus"
      ],
      "supporting_source_node_names": [
        "Osteocyte Mechanosensing Disruption in Microgravity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "GO:0104004",
      "term_label": "cellular response to environmental stimulus",
      "score": 0.305421,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0071260",
      "best_source_term_label": "cellular response to mechanical stimulus",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071260"
      ],
      "supporting_source_term_labels": [
        "cellular response to mechanical stimulus"
      ],
      "supporting_source_node_names": [
        "Impaired Mechanotransduction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Urea Cycle Disorder",
      "disease_term_id": "MONDO:0004739",
      "source_file": "Urea_Cycle_Disorder.yaml",
      "term_id": "GO:0104004",
      "term_label": "cellular response to environmental stimulus",
      "score": 0.122168,
      "direct_score": 0.0,
      "propagated_score": 0.1568,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0071470",
      "best_source_term_label": "cellular response to osmotic stress",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071470"
      ],
      "supporting_source_term_labels": [
        "cellular response to osmotic stress"
      ],
      "supporting_source_node_names": [
        "Hyperammonemic neurotoxicity and cerebral edema"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Beta-Ketothiolase Deficiency",
      "disease_term_id": "MONDO:0008760",
      "source_file": "Beta-Ketothiolase_Deficiency.yaml",
      "term_id": "GO:0104004",
      "term_label": "cellular response to environmental stimulus",
      "score": 0.106897,
      "direct_score": 0.0,
      "propagated_score": 0.1372,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0071468",
      "best_source_term_label": "cellular response to acidic pH",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071468"
      ],
      "supporting_source_term_labels": [
        "cellular response to acidic pH"
      ],
      "supporting_source_node_names": [
        "Episodic metabolic decompensation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0104004" } }));
