window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0015804"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0015804",
  "term_label": "neutral amino acid transport",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.64,
  "mean_score": 0.451148,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "GO:0015804",
      "term_label": "neutral amino acid transport",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0015804",
      "best_source_term_label": "neutral amino acid transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015804"
      ],
      "supporting_source_term_labels": [
        "neutral amino acid transport"
      ],
      "supporting_source_node_names": [
        "Competitive Large Neutral Amino Acid Transport at the Blood-Brain Barrier"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Maple Syrup Urine Disease",
      "disease_term_id": "MONDO:0009563",
      "source_file": "Maple_Syrup_Urine_Disease.yaml",
      "term_id": "GO:0015804",
      "term_label": "neutral amino acid transport",
      "score": 0.262295,
      "direct_score": 0.262295,
      "propagated_score": 0.262295,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0015804",
      "best_source_term_label": "neutral amino acid transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015804"
      ],
      "supporting_source_term_labels": [
        "neutral amino acid transport"
      ],
      "supporting_source_node_names": [
        "Blood-Brain Barrier Transport Competition"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0015804" } }));
