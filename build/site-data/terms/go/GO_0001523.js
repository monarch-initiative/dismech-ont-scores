window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001523"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001523",
  "term_label": "retinoid metabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "GO:0001523",
      "term_label": "retinoid metabolic process",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0001523",
      "best_source_term_label": "retinoid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001523"
      ],
      "supporting_source_term_labels": [
        "retinoid metabolic process"
      ],
      "supporting_source_node_names": [
        "Retinoid-adduct retention and bisretinoid precursor formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001523" } }));
