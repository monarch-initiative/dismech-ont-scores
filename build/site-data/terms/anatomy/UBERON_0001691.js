window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001691"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001691",
  "term_label": "external ear",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Otomycosis",
      "disease_term_id": "MONDO:0000262",
      "source_file": "Otomycosis.yaml",
      "term_id": "UBERON:0001691",
      "term_label": "external ear",
      "score": 0.5,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001352",
      "best_source_term_label": "external acoustic meatus",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001352"
      ],
      "supporting_source_term_labels": [
        "external acoustic meatus"
      ],
      "supporting_source_node_names": [
        "Canal obstruction and symptom manifestation",
        "Disruption of cerumen antimicrobial barrier",
        "Fungal colonization of the external auditory canal"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001691" } }));
