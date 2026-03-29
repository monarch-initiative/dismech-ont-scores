window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008206"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008206",
  "term_label": "bile acid metabolic process",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Primary Biliary Cholangitis",
      "disease_term_id": "MONDO:0005388",
      "source_file": "Primary_Biliary_Cholangitis.yaml",
      "term_id": "GO:0008206",
      "term_label": "bile acid metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0008206",
      "best_source_term_label": "bile acid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008206"
      ],
      "supporting_source_term_labels": [
        "bile acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Progressive Ductopenia and Cholestasis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "GO:0008206",
      "term_label": "bile acid metabolic process",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006699",
      "best_source_term_label": "bile acid biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006699"
      ],
      "supporting_source_term_labels": [
        "bile acid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Deficiency of Essential Compounds"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008206" } }));
