window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006027"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006027",
  "term_label": "glycosaminoglycan catabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Mucopolysaccharidosis",
      "disease_term_id": "MONDO:0019249",
      "source_file": "Mucopolysaccharidosis.yaml",
      "term_id": "GO:0006027",
      "term_label": "glycosaminoglycan catabolic process",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006027",
      "best_source_term_label": "glycosaminoglycan catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006027"
      ],
      "supporting_source_term_labels": [
        "glycosaminoglycan catabolic process"
      ],
      "supporting_source_node_names": [
        "Lysosomal GAG Accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006027" } }));
