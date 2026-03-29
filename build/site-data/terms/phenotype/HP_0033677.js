window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033677"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033677",
  "term_label": "Acute respiratory distress syndrome",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "HP:0033677",
      "term_label": "Acute respiratory distress syndrome",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0033677",
      "best_source_term_label": "Acute respiratory distress syndrome",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033677"
      ],
      "supporting_source_term_labels": [
        "Acute respiratory distress syndrome"
      ],
      "supporting_source_node_names": [
        "Acute Respiratory Distress Syndrome"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Leptospirosis",
      "disease_term_id": "MONDO:0005825",
      "source_file": "Leptospirosis.yaml",
      "term_id": "HP:0033677",
      "term_label": "Acute respiratory distress syndrome",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0033677",
      "best_source_term_label": "Acute respiratory distress syndrome",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033677"
      ],
      "supporting_source_term_labels": [
        "Acute respiratory distress syndrome"
      ],
      "supporting_source_node_names": [
        "Acute respiratory distress syndrome"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033677" } }));
