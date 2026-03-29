window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051262"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051262",
  "term_label": "protein tetramerization",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.833333,
  "mean_score": 0.659907,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Citrullinemia Type I",
      "disease_term_id": "MONDO:0008988",
      "source_file": "Citrullinemia_Type_I.yaml",
      "term_id": "GO:0051262",
      "term_label": "protein tetramerization",
      "score": 0.833333,
      "direct_score": 0.833333,
      "propagated_score": 0.833333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0051262",
      "best_source_term_label": "protein tetramerization",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051262"
      ],
      "supporting_source_term_labels": [
        "protein tetramerization"
      ],
      "supporting_source_node_names": [
        "Genotype-to-phenotype correlation through residual ASS1 activity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "GO:0051262",
      "term_label": "protein tetramerization",
      "score": 0.486482,
      "direct_score": 0.0,
      "propagated_score": 0.546875,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0051289",
      "best_source_term_label": "protein homotetramerization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051289"
      ],
      "supporting_source_term_labels": [
        "protein homotetramerization"
      ],
      "supporting_source_node_names": [
        "TTR Tetramer Destabilization"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051262" } }));
