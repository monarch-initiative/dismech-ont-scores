window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030155"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030155",
  "term_label": "regulation of cell adhesion",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.369586,
  "mean_score": 0.230486,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Sickle Cell Disease",
      "disease_term_id": "MONDO:0011382",
      "source_file": "Sickle_Cell_Disease.yaml",
      "term_id": "GO:0030155",
      "term_label": "regulation of cell adhesion",
      "score": 0.369586,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045785",
      "best_source_term_label": "positive regulation of cell adhesion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045785"
      ],
      "supporting_source_term_labels": [
        "positive regulation of cell adhesion"
      ],
      "supporting_source_node_names": [
        "Vaso-Occlusion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "GO:0030155",
      "term_label": "regulation of cell adhesion",
      "score": 0.198075,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:1904996",
      "best_source_term_label": "positive regulation of leukocyte adhesion to vascular endothelial cell",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1904996"
      ],
      "supporting_source_term_labels": [
        "positive regulation of leukocyte adhesion to vascular endothelial cell"
      ],
      "supporting_source_node_names": [
        "Vascular Inflammation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hepatitis B",
      "disease_term_id": "MONDO:0005344",
      "source_file": "Hepatitis_B.yaml",
      "term_id": "GO:0030155",
      "term_label": "regulation of cell adhesion",
      "score": 0.123797,
      "direct_score": 0.0,
      "propagated_score": 0.150062,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050868",
      "best_source_term_label": "negative regulation of T cell activation",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050868"
      ],
      "supporting_source_term_labels": [
        "negative regulation of T cell activation"
      ],
      "supporting_source_node_names": [
        "Immune Evasion and T Cell Exhaustion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030155" } }));
