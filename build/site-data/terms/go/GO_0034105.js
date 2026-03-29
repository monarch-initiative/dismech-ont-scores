window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0034105"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0034105",
  "term_label": "positive regulation of tissue remodeling",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.461982,
  "mean_score": 0.314148,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Sickle Cell Disease",
      "disease_term_id": "MONDO:0011382",
      "source_file": "Sickle_Cell_Disease.yaml",
      "term_id": "GO:0034105",
      "term_label": "positive regulation of tissue remodeling",
      "score": 0.461982,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0034108",
      "best_source_term_label": "positive regulation of erythrocyte clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034108"
      ],
      "supporting_source_term_labels": [
        "positive regulation of erythrocyte clearance"
      ],
      "supporting_source_node_names": [
        "Red Blood Cell Sickling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "GO:0034105",
      "term_label": "positive regulation of tissue remodeling",
      "score": 0.295669,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0034108",
      "best_source_term_label": "positive regulation of erythrocyte clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034108"
      ],
      "supporting_source_term_labels": [
        "positive regulation of erythrocyte clearance"
      ],
      "supporting_source_node_names": [
        "Acute Hemolytic Anemia"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "GO:0034105",
      "term_label": "positive regulation of tissue remodeling",
      "score": 0.184793,
      "direct_score": 0.0,
      "propagated_score": 0.224,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0034108",
      "best_source_term_label": "positive regulation of erythrocyte clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034108"
      ],
      "supporting_source_term_labels": [
        "positive regulation of erythrocyte clearance"
      ],
      "supporting_source_node_names": [
        "Chronic Hemolysis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0034105" } }));
