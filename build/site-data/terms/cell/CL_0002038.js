window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002038"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002038",
  "term_label": "T follicular helper cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.583333,
  "mean_score": 0.407051,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "CL:0002038",
      "term_label": "T follicular helper cell",
      "score": 0.583333,
      "direct_score": 0.583333,
      "propagated_score": 0.583333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002038",
      "best_source_term_label": "T follicular helper cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002038"
      ],
      "supporting_source_term_labels": [
        "T follicular helper cell"
      ],
      "supporting_source_node_names": [
        "Germinal Center Autoantibody Production",
        "Immune System Dysregulation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "CL:0002038",
      "term_label": "T follicular helper cell",
      "score": 0.230769,
      "direct_score": 0.230769,
      "propagated_score": 0.230769,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002038",
      "best_source_term_label": "T follicular helper cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002038"
      ],
      "supporting_source_term_labels": [
        "T follicular helper cell"
      ],
      "supporting_source_node_names": [
        "T Follicular Helper Cell Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002038" } }));
