window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0034392"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0034392",
  "term_label": "Joint contracture",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.512082,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Diastrophic Dysplasia",
      "disease_term_id": "MONDO:0009107",
      "source_file": "Diastrophic_Dysplasia.yaml",
      "term_id": "HP:0034392",
      "term_label": "Joint contracture",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0034392",
      "best_source_term_label": "Joint contracture",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0034392"
      ],
      "supporting_source_term_labels": [
        "Joint contracture"
      ],
      "supporting_source_node_names": [
        "Joint Contractures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Shprintzen-Goldberg Syndrome",
      "disease_term_id": "MONDO:0008426",
      "source_file": "Shprintzen-Goldberg_Syndrome.yaml",
      "term_id": "HP:0034392",
      "term_label": "Joint contracture",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001371",
      "best_source_term_label": "Flexion contracture",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001371"
      ],
      "supporting_source_term_labels": [
        "Flexion contracture"
      ],
      "supporting_source_node_names": [
        "Joint Contractures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "HP:0034392",
      "term_label": "Joint contracture",
      "score": 0.353277,
      "direct_score": 0.0,
      "propagated_score": 0.453422,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0012385",
      "best_source_term_label": "Camptodactyly",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012385",
        "HP:0012785"
      ],
      "supporting_source_term_labels": [
        "Camptodactyly",
        "Flexion contracture of finger"
      ],
      "supporting_source_node_names": [
        "Camptodactyly",
        "Finger Flexion Contracture"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "HP:0034392",
      "term_label": "Joint contracture",
      "score": 0.149656,
      "direct_score": 0.0,
      "propagated_score": 0.19208,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0005679",
      "best_source_term_label": "Dupuytren contracture",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0034392" } }));
