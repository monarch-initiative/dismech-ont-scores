window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0031667"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0031667",
  "term_label": "response to nutrient levels",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.412484,
  "mean_score": 0.309257,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "GO:0031667",
      "term_label": "response to nutrient levels",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0032098",
      "best_source_term_label": "regulation of appetite",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0032098"
      ],
      "supporting_source_term_labels": [
        "regulation of appetite"
      ],
      "supporting_source_node_names": [
        "Hypothalamic Leptin Resistance"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "2-Methylbutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012392",
      "source_file": "2-Methylbutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "GO:0031667",
      "term_label": "response to nutrient levels",
      "score": 0.284297,
      "direct_score": 0.0,
      "propagated_score": 0.344615,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0042594",
      "best_source_term_label": "response to starvation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042594"
      ],
      "supporting_source_term_labels": [
        "response to starvation"
      ],
      "supporting_source_node_names": [
        "Stress-sensitive metabolic decompensation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Beta-Ketothiolase Deficiency",
      "disease_term_id": "MONDO:0008760",
      "source_file": "Beta-Ketothiolase_Deficiency.yaml",
      "term_id": "GO:0031667",
      "term_label": "response to nutrient levels",
      "score": 0.230991,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0042594",
      "best_source_term_label": "response to starvation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042594"
      ],
      "supporting_source_term_labels": [
        "response to starvation"
      ],
      "supporting_source_node_names": [
        "Episodic metabolic decompensation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0031667" } }));
