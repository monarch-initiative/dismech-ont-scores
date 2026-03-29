window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0009870"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0009870",
  "term_label": "zone of stomach",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Gastroesophageal Reflux Disease",
      "disease_term_id": "MONDO:0007186",
      "source_file": "Gastroesophageal_Reflux_Disease.yaml",
      "term_id": "UBERON:0009870",
      "term_label": "zone of stomach",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004550",
      "best_source_term_label": "gastroesophageal sphincter",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0004550"
      ],
      "supporting_source_term_labels": [
        "gastroesophageal sphincter"
      ],
      "supporting_source_node_names": [
        "Lower Esophageal Sphincter Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0009870" } }));
