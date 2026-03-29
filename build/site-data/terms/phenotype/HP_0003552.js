window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003552"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003552",
  "term_label": "Muscle stiffness",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Generalized Anxiety Disorder",
      "disease_term_id": "MONDO:0001942",
      "source_file": "Generalized_Anxiety_Disorder.yaml",
      "term_id": "HP:0003552",
      "term_label": "Muscle stiffness",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003552",
      "best_source_term_label": "Muscle stiffness",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003552"
      ],
      "supporting_source_term_labels": [
        "Muscle stiffness"
      ],
      "supporting_source_node_names": [
        "Muscle Tension"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Carnitine Palmitoyltransferase II Deficiency",
      "disease_term_id": "MONDO:0015515",
      "source_file": "Carnitine_Palmitoyltransferase_II_Deficiency.yaml",
      "term_id": "HP:0003552",
      "term_label": "Muscle stiffness",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0008967",
      "best_source_term_label": "Exercise-induced muscle stiffness",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008967"
      ],
      "supporting_source_term_labels": [
        "Exercise-induced muscle stiffness"
      ],
      "supporting_source_node_names": [
        "Episodic muscle stiffness"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003552" } }));
