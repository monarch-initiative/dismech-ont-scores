window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031606"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031606",
  "term_label": "Retinal cotton wool spot",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Spaceflight Associated Neuro-Ocular Syndrome",
      "disease_term_id": "",
      "source_file": "Spaceflight_Associated_Neuro-Ocular_Syndrome.yaml",
      "term_id": "HP:0031606",
      "term_label": "Retinal cotton wool spot",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0031606",
      "best_source_term_label": "Retinal cotton wool spot",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031606"
      ],
      "supporting_source_term_labels": [
        "Retinal cotton wool spot"
      ],
      "supporting_source_node_names": [
        "Cotton Wool Spots"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031606" } }));
