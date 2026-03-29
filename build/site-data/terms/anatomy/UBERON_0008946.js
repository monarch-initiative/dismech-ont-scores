window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0008946"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0008946",
  "term_label": "lung parenchyma",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.381764,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Non-Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0005233",
      "source_file": "Non-Small_Cell_Lung_Cancer.yaml",
      "term_id": "UBERON:0008946",
      "term_label": "lung parenchyma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0008946",
      "best_source_term_label": "lung parenchyma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0008946"
      ],
      "supporting_source_term_labels": [
        "lung parenchyma"
      ],
      "supporting_source_node_names": [
        "Tumor Microenvironment Remodeling"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Chronic_Obstructive_Pulmonary_Disease",
      "disease_term_id": "MONDO:0005002",
      "source_file": "Chronic_Obstructive_Pulmonary_Disease.yaml",
      "term_id": "UBERON:0008946",
      "term_label": "lung parenchyma",
      "score": 0.132402,
      "direct_score": 0.111111,
      "propagated_score": 0.160494,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0008946",
      "best_source_term_label": "lung parenchyma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002299",
        "UBERON:0008946"
      ],
      "supporting_source_term_labels": [
        "alveolus of lung",
        "lung parenchyma"
      ],
      "supporting_source_node_names": [
        "Alveolar Destruction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Bird Fancier's Lung",
      "disease_term_id": "MONDO:0005668",
      "source_file": "Bird_Fanciers_Lung.yaml",
      "term_id": "UBERON:0008946",
      "term_label": "lung parenchyma",
      "score": 0.01289,
      "direct_score": 0.0,
      "propagated_score": 0.015625,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002299",
      "best_source_term_label": "alveolus of lung",
      "best_source_path_score": 0.125,
      "best_source_path": "part_of > part_of > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 3,
      "supporting_source_term_ids": [
        "UBERON:0002299"
      ],
      "supporting_source_term_labels": [
        "alveolus of lung"
      ],
      "supporting_source_node_names": [
        "MMP14-High Macrophage Profibrotic Activity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0008946" } }));
