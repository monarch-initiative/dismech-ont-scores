window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001371"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001371",
  "term_label": "Flexion contracture",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.717944,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Shprintzen-Goldberg Syndrome",
      "disease_term_id": "MONDO:0008426",
      "source_file": "Shprintzen-Goldberg_Syndrome.yaml",
      "term_id": "HP:0001371",
      "term_label": "Flexion contracture",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001371",
      "best_source_term_label": "Flexion contracture",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001371"
      ],
      "supporting_source_term_labels": [
        "Flexion contracture"
      ],
      "supporting_source_node_names": [
        "Joint Contractures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "HP:0001371",
      "term_label": "Flexion contracture",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012385",
      "best_source_term_label": "Camptodactyly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012385"
      ],
      "supporting_source_term_labels": [
        "Camptodactyly"
      ],
      "supporting_source_node_names": [
        "Camptodactyly"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001371" } }));
