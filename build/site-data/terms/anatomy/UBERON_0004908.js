window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004908"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004908",
  "term_label": "upper digestive tract",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.639376,
  "mean_score": 0.356754,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Gastroesophageal Reflux Disease",
      "disease_term_id": "MONDO:0007186",
      "source_file": "Gastroesophageal_Reflux_Disease.yaml",
      "term_id": "UBERON:0004908",
      "term_label": "upper digestive tract",
      "score": 0.639376,
      "direct_score": 0.0,
      "propagated_score": 0.71875,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001043",
      "best_source_term_label": "esophagus",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001043",
        "UBERON:0001976",
        "UBERON:0002469"
      ],
      "supporting_source_term_labels": [
        "epithelium of esophagus",
        "esophagus",
        "esophagus mucosa"
      ],
      "supporting_source_node_names": [
        "Barrett's Esophagus Metaplastic Adaptation",
        "Esophageal Mucosal Injury",
        "Impaired Esophageal Clearance"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Laryngotracheoesophageal Cleft",
      "disease_term_id": "MONDO:0016060",
      "source_file": "Laryngotracheoesophageal_Cleft.yaml",
      "term_id": "UBERON:0004908",
      "term_label": "upper digestive tract",
      "score": 0.074131,
      "direct_score": 0.0,
      "propagated_score": 0.083333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001043",
      "best_source_term_label": "esophagus",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001043"
      ],
      "supporting_source_term_labels": [
        "esophagus"
      ],
      "supporting_source_node_names": [
        "Posterior communication between larynx/trachea and esophagus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004908" } }));
