window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009074"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009074",
  "term_label": "aromatic amino acid family catabolic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "GO:0009074",
      "term_label": "aromatic amino acid family catabolic process",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006559",
      "best_source_term_label": "L-phenylalanine catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006559"
      ],
      "supporting_source_term_labels": [
        "L-phenylalanine catabolic process"
      ],
      "supporting_source_node_names": [
        "Hepatic PAH Enzyme Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "GO:0009074",
      "term_label": "aromatic amino acid family catabolic process",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006572",
      "best_source_term_label": "L-tyrosine catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006572"
      ],
      "supporting_source_term_labels": [
        "L-tyrosine catabolic process"
      ],
      "supporting_source_node_names": [
        "Fumarylacetoacetate hydrolase deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009074" } }));
