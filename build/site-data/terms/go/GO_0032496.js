window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032496"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032496",
  "term_label": "response to lipopolysaccharide",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.756,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Alcoholic Liver Disease",
      "disease_term_id": "MONDO:0043693",
      "source_file": "Alcoholic_Liver_Disease.yaml",
      "term_id": "GO:0032496",
      "term_label": "response to lipopolysaccharide",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0032496",
      "best_source_term_label": "response to lipopolysaccharide",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032496"
      ],
      "supporting_source_term_labels": [
        "response to lipopolysaccharide"
      ],
      "supporting_source_node_names": [
        "Gut-liver axis and endotoxin translocation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Leptospirosis",
      "disease_term_id": "MONDO:0005825",
      "source_file": "Leptospirosis.yaml",
      "term_id": "GO:0032496",
      "term_label": "response to lipopolysaccharide",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0032496",
      "best_source_term_label": "response to lipopolysaccharide",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032496"
      ],
      "supporting_source_term_labels": [
        "response to lipopolysaccharide"
      ],
      "supporting_source_node_names": [
        "Leptospiral GLP engagement of Na/K-ATPase"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032496" } }));
