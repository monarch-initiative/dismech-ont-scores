window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031246"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031246",
  "term_label": "Nonproductive cough",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cough Variant Asthma",
      "disease_term_id": "MONDO:0001491",
      "source_file": "Cough_Variant_Asthma.yaml",
      "term_id": "HP:0031246",
      "term_label": "Nonproductive cough",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0031246",
      "best_source_term_label": "Nonproductive cough",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031246"
      ],
      "supporting_source_term_labels": [
        "Nonproductive cough"
      ],
      "supporting_source_node_names": [
        "Nonproductive Cough"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Sarcoidosis",
      "disease_term_id": "MONDO:0019338",
      "source_file": "Sarcoidosis.yaml",
      "term_id": "HP:0031246",
      "term_label": "Nonproductive cough",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0031246",
      "best_source_term_label": "Nonproductive cough",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031246"
      ],
      "supporting_source_term_labels": [
        "Nonproductive cough"
      ],
      "supporting_source_node_names": [
        "Nonproductive Cough"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031246" } }));
