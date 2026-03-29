window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0098609"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0098609",
  "term_label": "cell-cell adhesion",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.554315,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Gastric Cancer H. pylori Associated",
      "disease_term_id": "MONDO:0004950",
      "source_file": "Gastric_Cancer_H_pylori_Associated.yaml",
      "term_id": "GO:0098609",
      "term_label": "cell-cell adhesion",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0098609",
      "best_source_term_label": "cell-cell adhesion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0098609"
      ],
      "supporting_source_term_labels": [
        "cell-cell adhesion"
      ],
      "supporting_source_node_names": [
        "CDH1/E-cadherin Inactivation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Fabry disease",
      "disease_term_id": "MONDO:0010526",
      "source_file": "Fabry_Disease.yaml",
      "term_id": "GO:0098609",
      "term_label": "cell-cell adhesion",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0061756",
      "best_source_term_label": "leukocyte adhesion to vascular endothelial cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061756"
      ],
      "supporting_source_term_labels": [
        "leukocyte adhesion to vascular endothelial cell"
      ],
      "supporting_source_node_names": [
        "Endothelial dysfunction and vascular remodeling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Sickle Cell Disease",
      "disease_term_id": "MONDO:0011382",
      "source_file": "Sickle_Cell_Disease.yaml",
      "term_id": "GO:0098609",
      "term_label": "cell-cell adhesion",
      "score": 0.25871,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0061756",
      "best_source_term_label": "leukocyte adhesion to vascular endothelial cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061756"
      ],
      "supporting_source_term_labels": [
        "leukocyte adhesion to vascular endothelial cell"
      ],
      "supporting_source_node_names": [
        "Vaso-Occlusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0098609" } }));
