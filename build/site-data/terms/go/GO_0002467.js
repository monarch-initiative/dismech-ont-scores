window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002467"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002467",
  "term_label": "germinal center formation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "GO:0002467",
      "term_label": "germinal center formation",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002467",
      "best_source_term_label": "germinal center formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002467"
      ],
      "supporting_source_term_labels": [
        "germinal center formation"
      ],
      "supporting_source_node_names": [
        "Germinal Center Autoantibody Production"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "GO:0002467",
      "term_label": "germinal center formation",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002467",
      "best_source_term_label": "germinal center formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002467"
      ],
      "supporting_source_term_labels": [
        "germinal center formation"
      ],
      "supporting_source_node_names": [
        "T Follicular Helper Cell Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002467" } }));
