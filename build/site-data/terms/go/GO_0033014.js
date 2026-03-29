window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0033014"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0033014",
  "term_label": "tetrapyrrole biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.278968,
  "mean_score": 0.248456,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "GO:0033014",
      "term_label": "tetrapyrrole biosynthetic process",
      "score": 0.278968,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006783",
      "best_source_term_label": "heme biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006783"
      ],
      "supporting_source_term_labels": [
        "heme biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Succinylacetone inhibition of heme biosynthesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Lead Poisoning",
      "disease_term_id": "MONDO:0018019",
      "source_file": "Lead_Poisoning.yaml",
      "term_id": "GO:0033014",
      "term_label": "tetrapyrrole biosynthetic process",
      "score": 0.217944,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006783",
      "best_source_term_label": "heme biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006783"
      ],
      "supporting_source_term_labels": [
        "heme biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Inhibition of delta-aminolevulinic acid dehydratase"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0033014" } }));
