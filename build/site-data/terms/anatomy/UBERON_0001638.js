window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001638"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001638",
  "term_label": "vein",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.410513,
  "mean_score": 0.241581,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0001638",
      "term_label": "vein",
      "score": 0.410513,
      "direct_score": 0.0,
      "propagated_score": 0.461475,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002016",
      "best_source_term_label": "pulmonary vein",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001072",
        "UBERON:0002016"
      ],
      "supporting_source_term_labels": [
        "inferior vena cava",
        "pulmonary vein"
      ],
      "supporting_source_node_names": [
        "Anomalous pulmonary venous drainage"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "UBERON:0001638",
      "term_label": "vein",
      "score": 0.072648,
      "direct_score": 0.0,
      "propagated_score": 0.081667,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001639",
      "best_source_term_label": "hepatic portal vein",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001639"
      ],
      "supporting_source_term_labels": [
        "hepatic portal vein"
      ],
      "supporting_source_node_names": [
        "Portal Hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001638" } }));
