window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004340"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004340",
  "term_label": "Abnormality of vitamin B metabolism",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.343,
  "mean_score": 0.343,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Small Intestinal Bacterial Overgrowth",
      "disease_term_id": "MONDO:0400000",
      "source_file": "Small_Intestinal_Bacterial_Overgrowth.yaml",
      "term_id": "HP:0004340",
      "term_label": "Abnormality of vitamin B metabolism",
      "score": 0.343,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0100502",
      "best_source_term_label": "Decreased circulating vitamin B12 concentration",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100502"
      ],
      "supporting_source_term_labels": [
        "Decreased circulating vitamin B12 concentration"
      ],
      "supporting_source_node_names": [
        "Vitamin B12 deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004340" } }));
