window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:5200291"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:5200291",
  "term_label": "REM sleep behavior disorder",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dementia with Lewy Bodies",
      "disease_term_id": "MONDO:0007488",
      "source_file": "Dementia_with_Lewy_Bodies.yaml",
      "term_id": "HP:5200291",
      "term_label": "REM sleep behavior disorder",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:5200291",
      "best_source_term_label": "REM sleep behavior disorder",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:5200291"
      ],
      "supporting_source_term_labels": [
        "REM sleep behavior disorder"
      ],
      "supporting_source_node_names": [
        "REM Sleep Behavior Disorder"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:5200291" } }));
