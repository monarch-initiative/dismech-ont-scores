window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0034102"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0034102",
  "term_label": "erythrocyte clearance",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.512,
  "mean_score": 0.416,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "GO:0034102",
      "term_label": "erythrocyte clearance",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0034102",
      "best_source_term_label": "erythrocyte clearance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034102"
      ],
      "supporting_source_term_labels": [
        "erythrocyte clearance"
      ],
      "supporting_source_node_names": [
        "Acute Hemolytic Anemia"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Congestive Splenomegaly",
      "disease_term_id": "MONDO:0037251",
      "source_file": "Congestive_Splenomegaly.yaml",
      "term_id": "GO:0034102",
      "term_label": "erythrocyte clearance",
      "score": 0.32,
      "direct_score": 0.32,
      "propagated_score": 0.32,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0034102",
      "best_source_term_label": "erythrocyte clearance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034102"
      ],
      "supporting_source_term_labels": [
        "erythrocyte clearance"
      ],
      "supporting_source_node_names": [
        "Hypersplenism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0034102" } }));
