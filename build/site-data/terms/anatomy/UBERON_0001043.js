window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001043"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001043",
  "term_label": "esophagus",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.583333,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Gastroesophageal Reflux Disease",
      "disease_term_id": "MONDO:0007186",
      "source_file": "Gastroesophageal_Reflux_Disease.yaml",
      "term_id": "UBERON:0001043",
      "term_label": "esophagus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001043",
      "best_source_term_label": "esophagus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
        "Impaired Esophageal Clearance"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Laryngotracheoesophageal Cleft",
      "disease_term_id": "MONDO:0016060",
      "source_file": "Laryngotracheoesophageal_Cleft.yaml",
      "term_id": "UBERON:0001043",
      "term_label": "esophagus",
      "score": 0.166667,
      "direct_score": 0.166667,
      "propagated_score": 0.166667,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001043",
      "best_source_term_label": "esophagus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001043" } }));
