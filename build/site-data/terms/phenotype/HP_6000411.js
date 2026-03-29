window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:6000411"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:6000411",
  "term_label": "Facial nerve compression",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Sclerosteosis",
      "disease_term_id": "MONDO:0017838",
      "source_file": "Sclerosteosis.yaml",
      "term_id": "HP:6000411",
      "term_label": "Facial nerve compression",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:6000411",
      "best_source_term_label": "Facial nerve compression",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6000411"
      ],
      "supporting_source_term_labels": [
        "Facial nerve compression"
      ],
      "supporting_source_node_names": [
        "Facial Nerve Palsy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Van Buchem Disease",
      "disease_term_id": "MONDO:0009395",
      "source_file": "Van_Buchem_Disease.yaml",
      "term_id": "HP:6000411",
      "term_label": "Facial nerve compression",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:6000411",
      "best_source_term_label": "Facial nerve compression",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6000411"
      ],
      "supporting_source_term_labels": [
        "Facial nerve compression"
      ],
      "supporting_source_node_names": [
        "Facial Nerve Palsy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:6000411" } }));
