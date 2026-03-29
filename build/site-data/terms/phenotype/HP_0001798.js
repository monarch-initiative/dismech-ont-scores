window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001798"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001798",
  "term_label": "Anonychia",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7399,
  "mean_score": 0.7399,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Temple-Baraitser Syndrome",
      "disease_term_id": "MONDO:0012735",
      "source_file": "Temple-Baraitser_Syndrome.yaml",
      "term_id": "HP:0001798",
      "term_label": "Anonychia",
      "score": 0.7399,
      "direct_score": 0.0,
      "propagated_score": 0.7399,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0012555",
      "best_source_term_label": "Absent nail of hallux",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012554",
        "HP:0012555"
      ],
      "supporting_source_term_labels": [
        "Absent nail of hallux",
        "Absent thumbnail"
      ],
      "supporting_source_node_names": [
        "Aplasia/hypoplasia of great toe nail",
        "Aplasia/hypoplasia of thumbnail"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001798" } }));
