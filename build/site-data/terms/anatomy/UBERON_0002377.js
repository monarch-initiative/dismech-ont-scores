window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002377"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002377",
  "term_label": "muscle of neck",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.040017,
  "mean_score": 0.040017,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Retrograde Cricopharyngeus Dysfunction",
      "disease_term_id": "MONDO:0100099",
      "source_file": "Retrograde_Cricopharyngeus_Dysfunction.yaml",
      "term_id": "UBERON:0002377",
      "term_label": "muscle of neck",
      "score": 0.040017,
      "direct_score": 0.0,
      "propagated_score": 0.040017,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0010928",
      "best_source_term_label": "cricopharyngeus muscle",
      "best_source_path_score": 0.12005,
      "best_source_path": "part_of > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002377" } }));
