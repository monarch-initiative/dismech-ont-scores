window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0005906"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0005906",
  "term_label": "serous sac",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.476419,
  "mean_score": 0.351299,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Familial Mediterranean Fever",
      "disease_term_id": "MONDO:0018088",
      "source_file": "Familial_Mediterranean_Fever.yaml",
      "term_id": "UBERON:0005906",
      "term_label": "serous sac",
      "score": 0.476419,
      "direct_score": 0.0,
      "propagated_score": 0.5775,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002358",
      "best_source_term_label": "peritoneum",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000977",
        "UBERON:0002358"
      ],
      "supporting_source_term_labels": [
        "peritoneum",
        "pleura"
      ],
      "supporting_source_node_names": [
        "Autoinflammatory Pathway Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Desmoplastic Small Round Cell Tumor",
      "disease_term_id": "MONDO:0019373",
      "source_file": "Desmoplastic_Small_Round_Cell_Tumor.yaml",
      "term_id": "UBERON:0005906",
      "term_label": "serous sac",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002358",
      "best_source_term_label": "peritoneum",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "disorder_name": "Malignant Mesothelioma",
      "disease_term_id": "MONDO:0006292",
      "source_file": "Malignant_Mesothelioma.yaml",
      "term_id": "UBERON:0005906",
      "term_label": "serous sac",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000977",
      "best_source_term_label": "pleura",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000977"
      ],
      "supporting_source_term_labels": [
        "pleura"
      ],
      "supporting_source_node_names": [
        "Asbestos-Induced Mesothelial Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0005906" } }));
