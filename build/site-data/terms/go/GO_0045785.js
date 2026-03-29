window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0045785"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0045785",
  "term_label": "positive regulation of cell adhesion",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.472561,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Sickle Cell Disease",
      "disease_term_id": "MONDO:0011382",
      "source_file": "Sickle_Cell_Disease.yaml",
      "term_id": "GO:0045785",
      "term_label": "positive regulation of cell adhesion",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0045785",
      "best_source_term_label": "positive regulation of cell adhesion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0045785",
      "term_label": "positive regulation of cell adhesion",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:1904996",
      "best_source_term_label": "positive regulation of leukocyte adhesion to vascular endothelial cell",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0045785" } }));
