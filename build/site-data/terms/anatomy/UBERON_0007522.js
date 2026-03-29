window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0007522"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0007522",
  "term_label": "striated muscle sphincter",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.735,
  "mean_score": 0.735,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Retrograde Cricopharyngeus Dysfunction",
      "disease_term_id": "MONDO:0100099",
      "source_file": "Retrograde_Cricopharyngeus_Dysfunction.yaml",
      "term_id": "UBERON:0007522",
      "term_label": "striated muscle sphincter",
      "score": 0.735,
      "direct_score": 0.0,
      "propagated_score": 0.735,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007268",
      "best_source_term_label": "upper esophageal sphincter",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0007268",
        "UBERON:0010928"
      ],
      "supporting_source_term_labels": [
        "cricopharyngeus muscle",
        "upper esophageal sphincter"
      ],
      "supporting_source_node_names": [
        "Elevated Upper Esophageal Sphincter Basal Pressure",
        "Failure of Upper Esophageal Sphincter Relaxation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0007522" } }));
