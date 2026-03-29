window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002358"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002358",
  "term_label": "peritoneum",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Desmoplastic Small Round Cell Tumor",
      "disease_term_id": "MONDO:0019373",
      "source_file": "Desmoplastic_Small_Round_Cell_Tumor.yaml",
      "term_id": "UBERON:0002358",
      "term_label": "peritoneum",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002358",
      "best_source_term_label": "peritoneum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002358"
      ],
      "supporting_source_term_labels": [
        "peritoneum"
      ],
      "supporting_source_node_names": [
        "EWSR1-WT1 Fusion Oncogene"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Familial Mediterranean Fever",
      "disease_term_id": "MONDO:0018088",
      "source_file": "Familial_Mediterranean_Fever.yaml",
      "term_id": "UBERON:0002358",
      "term_label": "peritoneum",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002358",
      "best_source_term_label": "peritoneum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002358"
      ],
      "supporting_source_term_labels": [
        "peritoneum"
      ],
      "supporting_source_node_names": [
        "Autoinflammatory Pathway Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002358" } }));
