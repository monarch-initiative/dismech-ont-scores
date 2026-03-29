window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001695"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001695",
  "term_label": "Cardiac arrest",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.62454,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Primary Carnitine Deficiency",
      "disease_term_id": "MONDO:0008919",
      "source_file": "Primary_Carnitine_Deficiency.yaml",
      "term_id": "HP:0001695",
      "term_label": "Cardiac arrest",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001695",
      "best_source_term_label": "Cardiac arrest",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001695"
      ],
      "supporting_source_term_labels": [
        "Cardiac arrest"
      ],
      "supporting_source_node_names": [
        "Cardiac arrest"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "HP:0001695",
      "term_label": "Cardiac arrest",
      "score": 0.249079,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0001645",
      "best_source_term_label": "Sudden cardiac death",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001645"
      ],
      "supporting_source_term_labels": [
        "Sudden cardiac death"
      ],
      "supporting_source_node_names": [
        "Sudden Cardiac Death"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001695" } }));
