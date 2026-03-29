window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002204"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002204",
  "term_label": "Pulmonary embolism",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Proteus syndrome",
      "disease_term_id": "MONDO:0008318",
      "source_file": "Proteus_syndrome.yaml",
      "term_id": "HP:0002204",
      "term_label": "Pulmonary embolism",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002204",
      "best_source_term_label": "Pulmonary embolism",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002204"
      ],
      "supporting_source_term_labels": [
        "Pulmonary embolism"
      ],
      "supporting_source_node_names": [
        "Pulmonary embolism"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Antiphospholipid Syndrome",
      "disease_term_id": "MONDO:8000010",
      "source_file": "Antiphospholipid_Syndrome.yaml",
      "term_id": "HP:0002204",
      "term_label": "Pulmonary embolism",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002204",
      "best_source_term_label": "Pulmonary embolism",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002204"
      ],
      "supporting_source_term_labels": [
        "Pulmonary embolism"
      ],
      "supporting_source_node_names": [
        "Pulmonary Embolism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002204" } }));
