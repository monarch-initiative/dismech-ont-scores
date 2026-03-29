window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000632"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000632",
  "term_label": "Lacrimation abnormality",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.56,
  "mean_score": 0.56,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "HP:0000632",
      "term_label": "Lacrimation abnormality",
      "score": 0.56,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0009926",
      "best_source_term_label": "Epiphora",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009926"
      ],
      "supporting_source_term_labels": [
        "Epiphora"
      ],
      "supporting_source_node_names": [
        "Epiphora"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000632" } }));
