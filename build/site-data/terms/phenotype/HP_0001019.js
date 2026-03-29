window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001019"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001019",
  "term_label": "Erythroderma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.64,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Netherton syndrome",
      "disease_term_id": "MONDO:0009735",
      "source_file": "Netherton_Syndrome.yaml",
      "term_id": "HP:0001019",
      "term_label": "Erythroderma",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0001019",
      "best_source_term_label": "Erythroderma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001019"
      ],
      "supporting_source_term_labels": [
        "Erythroderma"
      ],
      "supporting_source_node_names": [
        "Erythroderma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001019" } }));
