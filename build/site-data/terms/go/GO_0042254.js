window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042254"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042254",
  "term_label": "ribosome biogenesis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.37037,
  "mean_score": 0.37037,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Diamond-Blackfan Anemia",
      "disease_term_id": "MONDO:0015253",
      "source_file": "Diamond-Blackfan_Anemia.yaml",
      "term_id": "GO:0042254",
      "term_label": "ribosome biogenesis",
      "score": 0.37037,
      "direct_score": 0.37037,
      "propagated_score": 0.37037,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0042254",
      "best_source_term_label": "ribosome biogenesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042254"
      ],
      "supporting_source_term_labels": [
        "ribosome biogenesis"
      ],
      "supporting_source_node_names": [
        "Ribosomal Protein Haploinsufficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042254" } }));
