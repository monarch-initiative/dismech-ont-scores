window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001096"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001096",
  "term_label": "wall of esophagus",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.625,
  "mean_score": 0.625,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Gastroesophageal Reflux Disease",
      "disease_term_id": "MONDO:0007186",
      "source_file": "Gastroesophageal_Reflux_Disease.yaml",
      "term_id": "UBERON:0001096",
      "term_label": "wall of esophagus",
      "score": 0.625,
      "direct_score": 0.0,
      "propagated_score": 0.625,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002469",
      "best_source_term_label": "esophagus mucosa",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001976",
        "UBERON:0002469"
      ],
      "supporting_source_term_labels": [
        "epithelium of esophagus",
        "esophagus mucosa"
      ],
      "supporting_source_node_names": [
        "Barrett's Esophagus Metaplastic Adaptation",
        "Esophageal Mucosal Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001096" } }));
