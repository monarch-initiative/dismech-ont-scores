window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006730"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006730",
  "term_label": "one-carbon metabolic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.623077,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Sengers syndrome",
      "disease_term_id": "MONDO:0008922",
      "source_file": "Sengers_syndrome.yaml",
      "term_id": "GO:0006730",
      "term_label": "one-carbon metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006730",
      "best_source_term_label": "one-carbon metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006730"
      ],
      "supporting_source_term_labels": [
        "one-carbon metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired mitochondrial one-carbon metabolism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "GO:0006730",
      "term_label": "one-carbon metabolic process",
      "score": 0.246154,
      "direct_score": 0.246154,
      "propagated_score": 0.246154,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006730",
      "best_source_term_label": "one-carbon metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006730"
      ],
      "supporting_source_term_labels": [
        "one-carbon metabolic process"
      ],
      "supporting_source_node_names": [
        "Serine-glycine-one-carbon metabolic disruption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006730" } }));
