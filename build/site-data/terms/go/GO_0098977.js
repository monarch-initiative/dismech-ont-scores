window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0098977"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0098977",
  "term_label": "inhibitory chemical synaptic transmission",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Stiff Person Syndrome",
      "disease_term_id": "MONDO:0008491",
      "source_file": "Stiff_Person_Syndrome.yaml",
      "term_id": "GO:0098977",
      "term_label": "inhibitory chemical synaptic transmission",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0098977",
      "best_source_term_label": "inhibitory chemical synaptic transmission",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0098977"
      ],
      "supporting_source_term_labels": [
        "inhibitory chemical synaptic transmission"
      ],
      "supporting_source_node_names": [
        "GABAergic Inhibition Impairment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0098977" } }));
