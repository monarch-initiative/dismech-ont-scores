window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003126"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003126",
  "term_label": "trachea",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.25,
  "mean_score": 0.208334,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "UBERON:0003126",
      "term_label": "trachea",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003126",
      "best_source_term_label": "trachea",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003126"
      ],
      "supporting_source_term_labels": [
        "trachea"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Laryngotracheoesophageal Cleft",
      "disease_term_id": "MONDO:0016060",
      "source_file": "Laryngotracheoesophageal_Cleft.yaml",
      "term_id": "UBERON:0003126",
      "term_label": "trachea",
      "score": 0.166667,
      "direct_score": 0.166667,
      "propagated_score": 0.166667,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003126",
      "best_source_term_label": "trachea",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003126"
      ],
      "supporting_source_term_labels": [
        "trachea"
      ],
      "supporting_source_node_names": [
        "Posterior communication between larynx/trachea and esophagus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003126" } }));
