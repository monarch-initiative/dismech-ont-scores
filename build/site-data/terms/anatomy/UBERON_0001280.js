window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001280"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001280",
  "term_label": "liver parenchyma",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.041667,
  "mean_score": 0.041667,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "UBERON:0001280",
      "term_label": "liver parenchyma",
      "score": 0.041667,
      "direct_score": 0.0,
      "propagated_score": 0.041667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001281",
      "best_source_term_label": "hepatic sinusoid",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001281"
      ],
      "supporting_source_term_labels": [
        "hepatic sinusoid"
      ],
      "supporting_source_node_names": [
        "Portal Hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001280" } }));
