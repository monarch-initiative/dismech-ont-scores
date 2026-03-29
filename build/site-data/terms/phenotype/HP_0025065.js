window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025065"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025065",
  "term_label": "Abnormal mean corpuscular volume",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Alpha Thalassemia",
      "disease_term_id": "MONDO:0011399",
      "source_file": "Alpha_Thalassemia.yaml",
      "term_id": "HP:0025065",
      "term_label": "Abnormal mean corpuscular volume",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0025066",
      "best_source_term_label": "Decreased mean corpuscular volume",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025066"
      ],
      "supporting_source_term_labels": [
        "Decreased mean corpuscular volume"
      ],
      "supporting_source_node_names": [
        "Decreased Mean Corpuscular Volume"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "HP:0025065",
      "term_label": "Abnormal mean corpuscular volume",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0025066",
      "best_source_term_label": "Decreased mean corpuscular volume",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025066"
      ],
      "supporting_source_term_labels": [
        "Decreased mean corpuscular volume"
      ],
      "supporting_source_node_names": [
        "Decreased Mean Corpuscular Volume"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025065" } }));
