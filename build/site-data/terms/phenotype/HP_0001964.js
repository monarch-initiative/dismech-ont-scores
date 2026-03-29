window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001964"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001964",
  "term_label": "Aplasia/Hypoplasia of metatarsal bones",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Jackson-Weiss Syndrome",
      "disease_term_id": "MONDO:0007400",
      "source_file": "Jackson-Weiss_Syndrome.yaml",
      "term_id": "HP:0001964",
      "term_label": "Aplasia/Hypoplasia of metatarsal bones",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0010105",
      "best_source_term_label": "Short first metatarsal",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010105"
      ],
      "supporting_source_term_labels": [
        "Short first metatarsal"
      ],
      "supporting_source_node_names": [
        "Short First Metatarsal"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001964" } }));
