window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100607"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100607",
  "term_label": "Dysmenorrhea",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Endometriosis",
      "disease_term_id": "MONDO:0005133",
      "source_file": "Endometriosis.yaml",
      "term_id": "HP:0100607",
      "term_label": "Dysmenorrhea",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0100607",
      "best_source_term_label": "Dysmenorrhea",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100607"
      ],
      "supporting_source_term_labels": [
        "Dysmenorrhea"
      ],
      "supporting_source_node_names": [
        "Dysmenorrhea"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100607" } }));
