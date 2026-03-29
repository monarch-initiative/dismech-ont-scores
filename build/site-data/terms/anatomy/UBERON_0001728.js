window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001728"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001728",
  "term_label": "nasopharynx",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Nasopharyngeal Carcinoma",
      "disease_term_id": "MONDO:0015459",
      "source_file": "Nasopharyngeal_Carcinoma.yaml",
      "term_id": "UBERON:0001728",
      "term_label": "nasopharynx",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001728",
      "best_source_term_label": "nasopharynx",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001728"
      ],
      "supporting_source_term_labels": [
        "nasopharynx"
      ],
      "supporting_source_node_names": [
        "EBV Latent Membrane Protein 1 (LMP1) Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001728" } }));
