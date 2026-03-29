window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:5200299"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:5200299",
  "term_label": "REM parasomnia",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dementia with Lewy Bodies",
      "disease_term_id": "MONDO:0007488",
      "source_file": "Dementia_with_Lewy_Bodies.yaml",
      "term_id": "HP:5200299",
      "term_label": "REM parasomnia",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:5200291",
      "best_source_term_label": "REM sleep behavior disorder",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Narcolepsy",
      "disease_term_id": "MONDO:0021107",
      "source_file": "Narcolepsy.yaml",
      "term_id": "HP:5200299",
      "term_label": "REM parasomnia",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0025233",
      "best_source_term_label": "Sleep paralysis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025233"
      ],
      "supporting_source_term_labels": [
        "Sleep paralysis"
      ],
      "supporting_source_node_names": [
        "Sleep Paralysis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:5200299" } }));
