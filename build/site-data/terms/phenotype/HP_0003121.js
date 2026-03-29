window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003121"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003121",
  "term_label": "Limb joint contracture",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.244097,
  "mean_score": 0.228841,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "HP:0003121",
      "term_label": "Limb joint contracture",
      "score": 0.244097,
      "direct_score": 0.0,
      "propagated_score": 0.2744,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0005679",
      "best_source_term_label": "Dupuytren contracture",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "term_id": "HP:0003121",
      "term_label": "Limb joint contracture",
      "score": 0.213585,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012785",
      "best_source_term_label": "Flexion contracture of finger",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003121" } }));
