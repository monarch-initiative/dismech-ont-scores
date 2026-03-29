window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002170"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002170",
  "term_label": "Intracranial hemorrhage",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Glutaryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0009281",
      "source_file": "Glutaryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0002170",
      "term_label": "Intracranial hemorrhage",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100309",
      "best_source_term_label": "Subdural hemorrhage",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100309"
      ],
      "supporting_source_term_labels": [
        "Subdural hemorrhage"
      ],
      "supporting_source_node_names": [
        "Subdural hemorrhage"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Menkes Disease",
      "disease_term_id": "MONDO:0010651",
      "source_file": "Menkes_Disease.yaml",
      "term_id": "HP:0002170",
      "term_label": "Intracranial hemorrhage",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100309",
      "best_source_term_label": "Subdural hemorrhage",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100309"
      ],
      "supporting_source_term_labels": [
        "Subdural hemorrhage"
      ],
      "supporting_source_node_names": [
        "Subdural hemorrhage"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002170" } }));
