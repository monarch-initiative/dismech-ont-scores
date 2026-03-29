window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100360"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100360",
  "term_label": "Upper-limb joint contracture",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.34871,
  "mean_score": 0.326916,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "HP:0100360",
      "term_label": "Upper-limb joint contracture",
      "score": 0.34871,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0005679",
      "best_source_term_label": "Dupuytren contracture",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005679"
      ],
      "supporting_source_term_labels": [
        "Dupuytren contracture"
      ],
      "supporting_source_node_names": [
        "Dupuytren Contracture"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "HP:0100360",
      "term_label": "Upper-limb joint contracture",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012785",
      "best_source_term_label": "Flexion contracture of finger",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012785"
      ],
      "supporting_source_term_labels": [
        "Flexion contracture of finger"
      ],
      "supporting_source_node_names": [
        "Finger Flexion Contracture"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100360" } }));
