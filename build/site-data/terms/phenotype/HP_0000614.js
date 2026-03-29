window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000614"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000614",
  "term_label": "Abnormal nasolacrimal system morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.632411,
  "mean_score": 0.534149,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "HP:0000614",
      "term_label": "Abnormal nasolacrimal system morphology",
      "score": 0.632411,
      "direct_score": 0.0,
      "propagated_score": 0.71092,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000620",
      "best_source_term_label": "Dacryocystitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000620",
        "HP:0007678"
      ],
      "supporting_source_term_labels": [
        "Dacryocystitis",
        "Lacrimal duct stenosis"
      ],
      "supporting_source_node_names": [
        "Dacryocystitis",
        "Lacrimal Duct Stenosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "IgG4-Related Disease",
      "disease_term_id": "MONDO:0017287",
      "source_file": "IgG4-Related_Disease.yaml",
      "term_id": "HP:0000614",
      "term_label": "Abnormal nasolacrimal system morphology",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0007734",
      "best_source_term_label": "Enlarged lacrimal glands",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007734"
      ],
      "supporting_source_term_labels": [
        "Enlarged lacrimal glands"
      ],
      "supporting_source_node_names": [
        "Enlarged Lacrimal Glands"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000614" } }));
