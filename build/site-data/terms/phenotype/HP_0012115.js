window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012115"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012115",
  "term_label": "Hepatitis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.777778,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "HP:0012115",
      "term_label": "Hepatitis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0012115",
      "best_source_term_label": "Hepatitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012115"
      ],
      "supporting_source_term_labels": [
        "Hepatitis"
      ],
      "supporting_source_node_names": [
        "Hepatitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ebola Virus Disease (EVD)",
      "disease_term_id": "MONDO:0005737",
      "source_file": "Ebola_Virus_Disease_EVD.yaml",
      "term_id": "HP:0012115",
      "term_label": "Hepatitis",
      "score": 0.555556,
      "direct_score": 0.555556,
      "propagated_score": 0.555556,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0012115",
      "best_source_term_label": "Hepatitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012115"
      ],
      "supporting_source_term_labels": [
        "Hepatitis"
      ],
      "supporting_source_node_names": [
        "Hepatitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012115" } }));
