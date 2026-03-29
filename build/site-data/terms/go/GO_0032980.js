window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032980"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032980",
  "term_label": "keratinocyte activation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.384615,
  "mean_score": 0.384615,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Contact Dermatitis",
      "disease_term_id": "MONDO:0005480",
      "source_file": "Contact_Dermatitis.yaml",
      "term_id": "GO:0032980",
      "term_label": "keratinocyte activation",
      "score": 0.384615,
      "direct_score": 0.384615,
      "propagated_score": 0.384615,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0032980",
      "best_source_term_label": "keratinocyte activation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032980"
      ],
      "supporting_source_term_labels": [
        "keratinocyte activation"
      ],
      "supporting_source_node_names": [
        "Keratinocyte activation and proinflammatory mediator release"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032980" } }));
