window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001737"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001737",
  "term_label": "larynx",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.166667,
  "mean_score": 0.096047,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Laryngotracheoesophageal Cleft",
      "disease_term_id": "MONDO:0016060",
      "source_file": "Laryngotracheoesophageal_Cleft.yaml",
      "term_id": "UBERON:0001737",
      "term_label": "larynx",
      "score": 0.166667,
      "direct_score": 0.166667,
      "propagated_score": 0.166667,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001737",
      "best_source_term_label": "larynx",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001737"
      ],
      "supporting_source_term_labels": [
        "larynx"
      ],
      "supporting_source_node_names": [
        "Posterior communication between larynx/trachea and esophagus"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Retrograde Cricopharyngeus Dysfunction",
      "disease_term_id": "MONDO:0100099",
      "source_file": "Retrograde_Cricopharyngeus_Dysfunction.yaml",
      "term_id": "UBERON:0001737",
      "term_label": "larynx",
      "score": 0.025427,
      "direct_score": 0.0,
      "propagated_score": 0.028583,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0010928",
      "best_source_term_label": "cricopharyngeus muscle",
      "best_source_path_score": 0.08575,
      "best_source_path": "part_of > is_a > is_a > is_a > part_of",
      "best_path_hops": 5,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0010928"
      ],
      "supporting_source_term_labels": [
        "cricopharyngeus muscle"
      ],
      "supporting_source_node_names": [
        "Failure of Upper Esophageal Sphincter Relaxation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001737" } }));
