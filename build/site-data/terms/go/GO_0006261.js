window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006261"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006261",
  "term_label": "DNA-templated DNA replication",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.444784,
  "mean_score": 0.429957,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "GO:0006261",
      "term_label": "DNA-templated DNA replication",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0045005",
      "best_source_term_label": "DNA-templated DNA replication maintenance of fidelity",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "GO:0006261",
      "term_label": "DNA-templated DNA replication",
      "score": 0.415131,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006264",
      "best_source_term_label": "mitochondrial DNA replication",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006264"
      ],
      "supporting_source_term_labels": [
        "mitochondrial DNA replication"
      ],
      "supporting_source_node_names": [
        "Mitochondrial DNA Maintenance Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006261" } }));
