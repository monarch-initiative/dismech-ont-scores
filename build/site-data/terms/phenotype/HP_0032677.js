window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0032677"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0032677",
  "term_label": "Generalized-onset motor seizure",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.566187,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "HP:0032677",
      "term_label": "Generalized-onset motor seizure",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002123",
      "best_source_term_label": "Generalized myoclonic seizure",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002123"
      ],
      "supporting_source_term_labels": [
        "Generalized myoclonic seizure"
      ],
      "supporting_source_node_names": [
        "Myoclonic seizures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Jeavons Syndrome",
      "disease_term_id": "MONDO:0015346",
      "source_file": "Jeavons_Syndrome.yaml",
      "term_id": "HP:0032677",
      "term_label": "Generalized-onset motor seizure",
      "score": 0.509678,
      "direct_score": 0.0,
      "propagated_score": 0.57295,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0032677" } }));
