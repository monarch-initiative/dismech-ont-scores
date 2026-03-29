window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003479"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003479",
  "term_label": "thoracic cavity vein",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.245,
  "mean_score": 0.245,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0003479",
      "term_label": "thoracic cavity vein",
      "score": 0.245,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001072",
      "best_source_term_label": "inferior vena cava",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001072"
      ],
      "supporting_source_term_labels": [
        "inferior vena cava"
      ],
      "supporting_source_node_names": [
        "Anomalous pulmonary venous drainage"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003479" } }));
