window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010832"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010832",
  "term_label": "Abnormality of pain sensation",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fibromyalgia",
      "disease_term_id": "MONDO:0005546",
      "source_file": "Fibromyalgia.yaml",
      "term_id": "HP:0010832",
      "term_label": "Abnormality of pain sensation",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0007328",
      "best_source_term_label": "Impaired pain sensation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007328"
      ],
      "supporting_source_term_labels": [
        "Impaired pain sensation"
      ],
      "supporting_source_node_names": [
        "Hypersensitivity to Touch"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Sclerosis",
      "disease_term_id": "MONDO:0005301",
      "source_file": "Multiple_Sclerosis.yaml",
      "term_id": "HP:0010832",
      "term_label": "Abnormality of pain sensation",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012534",
      "best_source_term_label": "Dysesthesia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012534"
      ],
      "supporting_source_term_labels": [
        "Dysesthesia"
      ],
      "supporting_source_node_names": [
        "Dysesthesia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010832" } }));
