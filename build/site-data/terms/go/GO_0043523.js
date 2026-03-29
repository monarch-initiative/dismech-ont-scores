window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043523"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043523",
  "term_label": "regulation of neuron apoptotic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Coffin-Siris syndrome",
      "disease_term_id": "MONDO:0015452",
      "source_file": "Coffin_Siris_Syndrome.yaml",
      "term_id": "GO:0043523",
      "term_label": "regulation of neuron apoptotic process",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0043523",
      "best_source_term_label": "regulation of neuron apoptotic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043523"
      ],
      "supporting_source_term_labels": [
        "regulation of neuron apoptotic process"
      ],
      "supporting_source_node_names": [
        "Cortical interneuron deficiency from ARID1B haploinsufficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043523" } }));
