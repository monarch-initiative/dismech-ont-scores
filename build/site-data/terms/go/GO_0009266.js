window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009266"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009266",
  "term_label": "response to temperature stimulus",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.42032,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Epidermolysis Bullosa Simplex",
      "disease_term_id": "MONDO:0017610",
      "source_file": "Epidermolysis_Bullosa_Simplex.yaml",
      "term_id": "GO:0009266",
      "term_label": "response to temperature stimulus",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0009408",
      "best_source_term_label": "response to heat",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0009408"
      ],
      "supporting_source_term_labels": [
        "response to heat"
      ],
      "supporting_source_node_names": [
        "Heat Sensitivity of Mutant Keratin Networks"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "GO:0009266",
      "term_label": "response to temperature stimulus",
      "score": 0.217944,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0070417",
      "best_source_term_label": "cellular response to cold",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070417"
      ],
      "supporting_source_term_labels": [
        "cellular response to cold"
      ],
      "supporting_source_node_names": [
        "Alpha-2C Adrenoceptor Cold-Induced Vasoconstriction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009266" } }));
