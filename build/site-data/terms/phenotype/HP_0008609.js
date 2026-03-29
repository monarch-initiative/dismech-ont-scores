window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008609"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008609",
  "term_label": "Abnormal middle ear morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.52944,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0008609",
      "term_label": "Abnormal middle ear morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0004452",
      "best_source_term_label": "Abnormality of the middle ear ossicles",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004452"
      ],
      "supporting_source_term_labels": [
        "Abnormality of the middle ear ossicles"
      ],
      "supporting_source_node_names": [
        "Middle Ear Ossicle Abnormalities"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "HP:0008609",
      "term_label": "Abnormal middle ear morphology",
      "score": 0.436184,
      "direct_score": 0.0,
      "propagated_score": 0.490333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000389",
      "best_source_term_label": "Chronic otitis media",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
        "Chronic Otitis Media",
        "Otitis Media"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008609" } }));
