window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0045005"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0045005",
  "term_label": "DNA-templated DNA replication maintenance of fidelity",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "GO:0045005",
      "term_label": "DNA-templated DNA replication maintenance of fidelity",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0045005",
      "best_source_term_label": "DNA-templated DNA replication maintenance of fidelity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045005"
      ],
      "supporting_source_term_labels": [
        "DNA-templated DNA replication maintenance of fidelity"
      ],
      "supporting_source_node_names": [
        "DNA Mismatch Repair Deficiency",
        "Microsatellite Instability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0045005" } }));
