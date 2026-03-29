window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006779"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006779",
  "term_label": "porphyrin-containing compound biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.398526,
  "mean_score": 0.354938,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "GO:0006779",
      "term_label": "porphyrin-containing compound biosynthetic process",
      "score": 0.398526,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006783",
      "best_source_term_label": "heme biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0006779",
      "term_label": "porphyrin-containing compound biosynthetic process",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006783",
      "best_source_term_label": "heme biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006779" } }));
