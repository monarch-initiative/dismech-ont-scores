window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002123"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002123",
  "term_label": "Generalized myoclonic seizure",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.717944,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "HP:0002123",
      "term_label": "Generalized myoclonic seizure",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002123",
      "best_source_term_label": "Generalized myoclonic seizure",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "HP:0002123",
      "term_label": "Generalized myoclonic seizure",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
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
        "HP:0011149"
      ],
      "supporting_source_term_labels": [
        "Absence seizure with eyelid myoclonia"
      ],
      "supporting_source_node_names": [
        "Absences",
        "Eyelid Myoclonia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002123" } }));
