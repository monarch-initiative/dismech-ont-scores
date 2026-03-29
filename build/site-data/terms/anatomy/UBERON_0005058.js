window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0005058"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0005058",
  "term_label": "hemolymphoid system gland",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "UBERON:0005058",
      "term_label": "hemolymphoid system gland",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002370",
      "best_source_term_label": "thymus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002370"
      ],
      "supporting_source_term_labels": [
        "thymus"
      ],
      "supporting_source_node_names": [
        "Thymic hypoplasia and T-cell immunodeficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0005058" } }));
