window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002197"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002197",
  "term_label": "Generalized-onset seizure",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.610394,
  "mean_score": 0.565062,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "HP:0002197",
      "term_label": "Generalized-onset seizure",
      "score": 0.610394,
      "direct_score": 0.0,
      "propagated_score": 0.7399,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0007270",
      "best_source_term_label": "Atypical absence seizure",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002123",
        "HP:0007270"
      ],
      "supporting_source_term_labels": [
        "Atypical absence seizure",
        "Generalized myoclonic seizure"
      ],
      "supporting_source_node_names": [
        "Atypical absence seizures",
        "Myoclonic seizures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lafora_Disease",
      "disease_term_id": "MONDO:0009697",
      "source_file": "Lafora_Disease.yaml",
      "term_id": "HP:0002197",
      "term_label": "Generalized-onset seizure",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002121",
      "best_source_term_label": "Generalized non-motor (absence) seizure",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002121"
      ],
      "supporting_source_term_labels": [
        "Generalized non-motor (absence) seizure"
      ],
      "supporting_source_node_names": [
        "Absence seizures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Jeavons Syndrome",
      "disease_term_id": "MONDO:0015346",
      "source_file": "Jeavons_Syndrome.yaml",
      "term_id": "HP:0002197",
      "term_label": "Generalized-onset seizure",
      "score": 0.507314,
      "direct_score": 0.0,
      "propagated_score": 0.61495,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0011149",
      "best_source_term_label": "Absence seizure with eyelid myoclonia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011149",
        "HP:0025190"
      ],
      "supporting_source_term_labels": [
        "Absence seizure with eyelid myoclonia",
        "Bilateral tonic-clonic seizure with generalized onset"
      ],
      "supporting_source_node_names": [
        "Absences",
        "Eyelid Myoclonia",
        "Generalized Tonic-Clonic Seizures"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002197" } }));
