window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0000423"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0000423",
  "term_label": "mitophagy",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.615385,
  "mean_score": 0.467692,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Danon disease",
      "disease_term_id": "MONDO:0010281",
      "source_file": "Danon_disease.yaml",
      "term_id": "GO:0000423",
      "term_label": "mitophagy",
      "score": 0.615385,
      "direct_score": 0.615385,
      "propagated_score": 0.615385,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0000423",
      "best_source_term_label": "mitophagy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000423"
      ],
      "supporting_source_term_labels": [
        "mitophagy"
      ],
      "supporting_source_node_names": [
        "Impaired mitophagy"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "GO:0000423",
      "term_label": "mitophagy",
      "score": 0.32,
      "direct_score": 0.32,
      "propagated_score": 0.32,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0000423",
      "best_source_term_label": "mitophagy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000423"
      ],
      "supporting_source_term_labels": [
        "mitophagy"
      ],
      "supporting_source_node_names": [
        "Hepatocyte Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0000423" } }));
