window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:6000095"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:6000095",
  "term_label": "Draining sinus tract in skin",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.32768,
  "mean_score": 0.32768,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hidradenitis Suppurativa",
      "disease_term_id": "MONDO:0006559",
      "source_file": "Hidradenitis_Suppurativa.yaml",
      "term_id": "HP:6000095",
      "term_label": "Draining sinus tract in skin",
      "score": 0.32768,
      "direct_score": 0.32768,
      "propagated_score": 0.32768,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:6000095",
      "best_source_term_label": "Draining sinus tract in skin",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6000095"
      ],
      "supporting_source_term_labels": [
        "Draining sinus tract in skin"
      ],
      "supporting_source_node_names": [
        "Draining Sinus Tract Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:6000095" } }));
