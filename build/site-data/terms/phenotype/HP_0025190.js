window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025190"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025190",
  "term_label": "Bilateral tonic-clonic seizure with generalized onset",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Jeavons Syndrome",
      "disease_term_id": "MONDO:0015346",
      "source_file": "Jeavons_Syndrome.yaml",
      "term_id": "HP:0025190",
      "term_label": "Bilateral tonic-clonic seizure with generalized onset",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0025190",
      "best_source_term_label": "Bilateral tonic-clonic seizure with generalized onset",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025190" } }));
