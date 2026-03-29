window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001344"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001344",
  "term_label": "Absent speech",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "HP:0001344",
      "term_label": "Absent speech",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001344",
      "best_source_term_label": "Absent speech",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001344"
      ],
      "supporting_source_term_labels": [
        "Absent speech"
      ],
      "supporting_source_node_names": [
        "Absent speech"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Guanidinoacetate Methyltransferase Deficiency",
      "disease_term_id": "MONDO:0012999",
      "source_file": "Guanidinoacetate_Methyltransferase_Deficiency.yaml",
      "term_id": "HP:0001344",
      "term_label": "Absent speech",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001344",
      "best_source_term_label": "Absent speech",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001344"
      ],
      "supporting_source_term_labels": [
        "Absent speech"
      ],
      "supporting_source_node_names": [
        "Absent speech"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001344" } }));
