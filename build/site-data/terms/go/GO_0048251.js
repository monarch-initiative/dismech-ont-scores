window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048251"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048251",
  "term_label": "elastic fiber assembly",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Chronic Kidney Disease",
      "disease_term_id": "MONDO:0005300",
      "source_file": "Chronic_Kidney_Disease.yaml",
      "term_id": "GO:0048251",
      "term_label": "elastic fiber assembly",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0048251",
      "best_source_term_label": "elastic fiber assembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048251"
      ],
      "supporting_source_term_labels": [
        "elastic fiber assembly"
      ],
      "supporting_source_node_names": [
        "Glomerulosclerosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Loeys-Dietz Syndrome",
      "disease_term_id": "MONDO:0018954",
      "source_file": "Loeys-Dietz_Syndrome.yaml",
      "term_id": "GO:0048251",
      "term_label": "elastic fiber assembly",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0048251",
      "best_source_term_label": "elastic fiber assembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048251"
      ],
      "supporting_source_term_labels": [
        "elastic fiber assembly"
      ],
      "supporting_source_node_names": [
        "Extracellular Matrix Degradation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048251" } }));
