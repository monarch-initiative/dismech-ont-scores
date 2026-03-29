window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000388"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000388",
  "term_label": "Otitis media",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.650506,
  "mean_score": 0.650506,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "HP:0000388",
      "term_label": "Otitis media",
      "score": 0.650506,
      "direct_score": 0.390244,
      "propagated_score": 0.650506,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0000389",
      "best_source_term_label": "Chronic otitis media",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000388",
        "HP:0000389"
      ],
      "supporting_source_term_labels": [
        "Chronic otitis media",
        "Otitis media"
      ],
      "supporting_source_node_names": [
        "Otitis Media"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000388" } }));
