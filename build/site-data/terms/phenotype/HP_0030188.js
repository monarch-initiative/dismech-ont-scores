window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030188"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030188",
  "term_label": "Tremor by anatomical site",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "HP:0030188",
      "term_label": "Tremor by anatomical site",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0002599",
      "best_source_term_label": "Head titubation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002599"
      ],
      "supporting_source_term_labels": [
        "Head titubation"
      ],
      "supporting_source_node_names": [
        "Head Titubation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030188" } }));
