window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100685"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100685",
  "term_label": "Abnormal Sharpey fiber morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Psoriatic Arthritis",
      "disease_term_id": "MONDO:0011849",
      "source_file": "Psoriatic_Arthritis.yaml",
      "term_id": "HP:0100685",
      "term_label": "Abnormal Sharpey fiber morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100686",
      "best_source_term_label": "Enthesitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100686"
      ],
      "supporting_source_term_labels": [
        "Enthesitis"
      ],
      "supporting_source_node_names": [
        "Enthesitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "X-Linked Hypophosphatemia",
      "disease_term_id": "MONDO:0010619",
      "source_file": "X-Linked_Hypophosphatemia.yaml",
      "term_id": "HP:0100685",
      "term_label": "Abnormal Sharpey fiber morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100686",
      "best_source_term_label": "Enthesitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100686"
      ],
      "supporting_source_term_labels": [
        "Enthesitis"
      ],
      "supporting_source_node_names": [
        "Enthesitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100685" } }));
