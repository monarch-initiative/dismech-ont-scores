window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002069"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002069",
  "term_label": "Bilateral tonic-clonic seizure",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.655674,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Lafora_Disease",
      "disease_term_id": "MONDO:0009697",
      "source_file": "Lafora_Disease.yaml",
      "term_id": "HP:0002069",
      "term_label": "Bilateral tonic-clonic seizure",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002069",
      "best_source_term_label": "Bilateral tonic-clonic seizure",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002069"
      ],
      "supporting_source_term_labels": [
        "Bilateral tonic-clonic seizure"
      ],
      "supporting_source_node_names": [
        "Generalized tonic-clonic seizures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Jeavons Syndrome",
      "disease_term_id": "MONDO:0015346",
      "source_file": "Jeavons_Syndrome.yaml",
      "term_id": "HP:0002069",
      "term_label": "Bilateral tonic-clonic seizure",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0025190",
      "best_source_term_label": "Bilateral tonic-clonic seizure with generalized onset",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025190"
      ],
      "supporting_source_term_labels": [
        "Bilateral tonic-clonic seizure with generalized onset"
      ],
      "supporting_source_node_names": [
        "Generalized Tonic-Clonic Seizures"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002069" } }));
