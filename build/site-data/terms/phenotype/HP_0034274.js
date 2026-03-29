window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0034274"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0034274",
  "term_label": "Gastrointestinal ulcer",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.529292,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Pancreatic Neuroendocrine Tumor",
      "disease_term_id": "MONDO:0019954",
      "source_file": "Pancreatic_Neuroendocrine_Tumor.yaml",
      "term_id": "HP:0034274",
      "term_label": "Gastrointestinal ulcer",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0004398",
      "best_source_term_label": "Peptic ulcer",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004398"
      ],
      "supporting_source_term_labels": [
        "Peptic ulcer"
      ],
      "supporting_source_node_names": [
        "Recurrent Peptic Ulcers"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Gastric Ulcer",
      "disease_term_id": "MONDO:0001126",
      "source_file": "Gastric_Ulcer.yaml",
      "term_id": "HP:0034274",
      "term_label": "Gastrointestinal ulcer",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002592",
      "best_source_term_label": "Gastric ulcer",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002592"
      ],
      "supporting_source_term_labels": [
        "Gastric ulcer"
      ],
      "supporting_source_node_names": [
        "Gastric ulcer"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0034274" } }));
