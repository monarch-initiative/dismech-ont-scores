window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0410281"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0410281",
  "term_label": "Dyspepsia",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Gastroesophageal Reflux Disease",
      "disease_term_id": "MONDO:0007186",
      "source_file": "Gastroesophageal_Reflux_Disease.yaml",
      "term_id": "HP:0410281",
      "term_label": "Dyspepsia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0410281",
      "best_source_term_label": "Dyspepsia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0410281"
      ],
      "supporting_source_term_labels": [
        "Dyspepsia"
      ],
      "supporting_source_node_names": [
        "Heartburn"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Giardiasis",
      "disease_term_id": "MONDO:0001103",
      "source_file": "Giardiasis.yaml",
      "term_id": "HP:0410281",
      "term_label": "Dyspepsia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0410281",
      "best_source_term_label": "Dyspepsia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0410281"
      ],
      "supporting_source_term_labels": [
        "Dyspepsia"
      ],
      "supporting_source_node_names": [
        "Post-infectious dyspepsia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0410281" } }));
