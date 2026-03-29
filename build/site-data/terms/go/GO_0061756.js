window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0061756"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0061756",
  "term_label": "leukocyte adhesion to vascular endothelial cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.82,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fabry disease",
      "disease_term_id": "MONDO:0010526",
      "source_file": "Fabry_Disease.yaml",
      "term_id": "GO:0061756",
      "term_label": "leukocyte adhesion to vascular endothelial cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0061756",
      "best_source_term_label": "leukocyte adhesion to vascular endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0061756",
      "term_label": "leukocyte adhesion to vascular endothelial cell",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0061756",
      "best_source_term_label": "leukocyte adhesion to vascular endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0061756" } }));
