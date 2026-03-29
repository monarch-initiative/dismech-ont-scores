window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007271"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007271",
  "term_label": "synaptic transmission, cholinergic",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Green Tobacco Sickness",
      "disease_term_id": "",
      "source_file": "Green_Tobacco_Sickness.yaml",
      "term_id": "GO:0007271",
      "term_label": "synaptic transmission, cholinergic",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0007271",
      "best_source_term_label": "synaptic transmission, cholinergic",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007271"
      ],
      "supporting_source_term_labels": [
        "synaptic transmission, cholinergic"
      ],
      "supporting_source_node_names": [
        "Central Nervous System Effects",
        "Nicotinic Acetylcholine Receptor Overstimulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007271" } }));
