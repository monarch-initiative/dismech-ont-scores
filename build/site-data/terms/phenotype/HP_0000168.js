window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000168"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000168",
  "term_label": "Abnormality of the gingiva",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.67982,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Lead Poisoning",
      "disease_term_id": "MONDO:0018019",
      "source_file": "Lead_Poisoning.yaml",
      "term_id": "HP:0000168",
      "term_label": "Abnormality of the gingiva",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0000168",
      "best_source_term_label": "Abnormality of the gingiva",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000168"
      ],
      "supporting_source_term_labels": [
        "Abnormality of the gingiva"
      ],
      "supporting_source_node_names": [
        "Gingival lead line"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0000168",
      "term_label": "Abnormality of the gingiva",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000704",
      "best_source_term_label": "Periodontitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000704"
      ],
      "supporting_source_term_labels": [
        "Periodontitis"
      ],
      "supporting_source_node_names": [
        "Periodontal Disease"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Scurvy",
      "disease_term_id": "MONDO:0009412",
      "source_file": "Scurvy.yaml",
      "term_id": "HP:0000168",
      "term_label": "Abnormality of the gingiva",
      "score": 0.461982,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000225",
      "best_source_term_label": "Gingival bleeding",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000225"
      ],
      "supporting_source_term_labels": [
        "Gingival bleeding"
      ],
      "supporting_source_node_names": [
        "Gingival Bleeding"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000168" } }));
