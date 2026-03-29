window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012060"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012060",
  "term_label": "Acral lentiginous melanoma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "KIT Mutant Melanoma",
      "disease_term_id": "MONDO:0003865",
      "source_file": "KIT_Mutant_Melanoma.yaml",
      "term_id": "HP:0012060",
      "term_label": "Acral lentiginous melanoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0012060",
      "best_source_term_label": "Acral lentiginous melanoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012060"
      ],
      "supporting_source_term_labels": [
        "Acral lentiginous melanoma"
      ],
      "supporting_source_node_names": [
        "Acral Lentiginous Melanoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012060" } }));
