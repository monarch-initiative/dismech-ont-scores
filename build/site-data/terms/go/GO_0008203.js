window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008203"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008203",
  "term_label": "cholesterol metabolic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.25,
  "mean_score": 0.226027,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "GO:0008203",
      "term_label": "cholesterol metabolic process",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0008203",
      "best_source_term_label": "cholesterol metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008203"
      ],
      "supporting_source_term_labels": [
        "cholesterol metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired LDL Receptor Function"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "GO:0008203",
      "term_label": "cholesterol metabolic process",
      "score": 0.202053,
      "direct_score": 0.202053,
      "propagated_score": 0.202053,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0008203",
      "best_source_term_label": "cholesterol metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008203"
      ],
      "supporting_source_term_labels": [
        "cholesterol metabolic process"
      ],
      "supporting_source_node_names": [
        "LDL Receptor-Mediated Cholesterol Clearance Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008203" } }));
