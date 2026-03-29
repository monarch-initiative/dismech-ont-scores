window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000101"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000101",
  "term_label": "lobe of lung",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.017297,
  "mean_score": 0.011081,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Chronic_Obstructive_Pulmonary_Disease",
      "disease_term_id": "MONDO:0005002",
      "source_file": "Chronic_Obstructive_Pulmonary_Disease.yaml",
      "term_id": "UBERON:0000101",
      "term_label": "lobe of lung",
      "score": 0.017297,
      "direct_score": 0.0,
      "propagated_score": 0.019444,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002299",
      "best_source_term_label": "alveolus of lung",
      "best_source_path_score": 0.04375,
      "best_source_path": "part_of > part_of > is_a > part_of > part_of",
      "best_path_hops": 5,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 4,
      "supporting_source_term_ids": [
        "UBERON:0002299"
      ],
      "supporting_source_term_labels": [
        "alveolus of lung"
      ],
      "supporting_source_node_names": [
        "Alveolar Destruction",
        "Chronic Inflammation",
        "NLRP3 Inflammasome Activation",
        "Oxidative Stress and Mitochondrial Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Bird Fancier's Lung",
      "disease_term_id": "MONDO:0005668",
      "source_file": "Bird_Fanciers_Lung.yaml",
      "term_id": "UBERON:0000101",
      "term_label": "lobe of lung",
      "score": 0.004865,
      "direct_score": 0.0,
      "propagated_score": 0.005469,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002299",
      "best_source_term_label": "alveolus of lung",
      "best_source_path_score": 0.04375,
      "best_source_path": "part_of > part_of > is_a > part_of > part_of",
      "best_path_hops": 5,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 4,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000101" } }));
