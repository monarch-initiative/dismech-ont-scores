window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048024"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048024",
  "term_label": "regulation of mRNA splicing, via spliceosome",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "TARP syndrome",
      "disease_term_id": "MONDO:0010711",
      "source_file": "TARP_syndrome.yaml",
      "term_id": "GO:0048024",
      "term_label": "regulation of mRNA splicing, via spliceosome",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0000381",
      "best_source_term_label": "regulation of alternative mRNA splicing, via spliceosome",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000381"
      ],
      "supporting_source_term_labels": [
        "regulation of alternative mRNA splicing, via spliceosome"
      ],
      "supporting_source_node_names": [
        "RBM10-mediated alternative splicing dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048024" } }));
