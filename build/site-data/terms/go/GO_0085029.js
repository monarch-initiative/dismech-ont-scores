window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0085029"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0085029",
  "term_label": "extracellular matrix assembly",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.467023,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Chronic Kidney Disease",
      "disease_term_id": "MONDO:0005300",
      "source_file": "Chronic_Kidney_Disease.yaml",
      "term_id": "GO:0085029",
      "term_label": "extracellular matrix assembly",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0048251",
      "best_source_term_label": "elastic fiber assembly",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0085029",
      "term_label": "extracellular matrix assembly",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0048251",
      "best_source_term_label": "elastic fiber assembly",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0085029" } }));
