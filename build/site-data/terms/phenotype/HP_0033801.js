window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033801"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033801",
  "term_label": "Blistering by histological location",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Lyme Disease",
      "disease_term_id": "MONDO:0019632",
      "source_file": "Lyme_Disease.yaml",
      "term_id": "HP:0033801",
      "term_label": "Blistering by histological location",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0033804",
      "best_source_term_label": "Subepidermal blistering",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033804"
      ],
      "supporting_source_term_labels": [
        "Subepidermal blistering"
      ],
      "supporting_source_node_names": [
        "Bullous Skin Lesions"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033801" } }));
