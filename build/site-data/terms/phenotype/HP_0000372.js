window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000372"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000372",
  "term_label": "Abnormal auditory canal morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.91,
  "mean_score": 0.91,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0000372",
      "term_label": "Abnormal auditory canal morphology",
      "score": 0.91,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0000413",
      "best_source_term_label": "Atresia of the external auditory canal",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000402",
        "HP:0000413"
      ],
      "supporting_source_term_labels": [
        "Atresia of the external auditory canal",
        "Stenosis of the external auditory canal"
      ],
      "supporting_source_node_names": [
        "External Auditory Canal Atresia",
        "External Auditory Canal Stenosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000372" } }));
