window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010614"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010614",
  "term_label": "Fibroma",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.709012,
  "mean_score": 0.609205,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Gorlin Syndrome",
      "disease_term_id": "MONDO:0007187",
      "source_file": "Gorlin_Syndrome.yaml",
      "term_id": "HP:0010614",
      "term_label": "Fibroma",
      "score": 0.709012,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010618",
      "best_source_term_label": "Ovarian fibroma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010617",
        "HP:0010618"
      ],
      "supporting_source_term_labels": [
        "Cardiac fibroma",
        "Ovarian fibroma"
      ],
      "supporting_source_node_names": [
        "Cardiac Fibroma",
        "Ovarian Fibroma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Neurofibromatosis Type 1",
      "disease_term_id": "MONDO:0018975",
      "source_file": "Neurofibromatosis_Type_1.yaml",
      "term_id": "HP:0010614",
      "term_label": "Fibroma",
      "score": 0.63702,
      "direct_score": 0.0,
      "propagated_score": 0.8176,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001067",
      "best_source_term_label": "Neurofibroma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001067",
        "HP:0009732"
      ],
      "supporting_source_term_labels": [
        "Neurofibroma",
        "Plexiform neurofibroma"
      ],
      "supporting_source_node_names": [
        "Cutaneous Neurofibromas",
        "Plexiform Neurofibromas"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "SUFU-related nevoid basal cell carcinoma syndrome",
      "disease_term_id": "MONDO:0958189",
      "source_file": "SUFU-related_Nevoid_Basal_Cell_Carcinoma_Syndrome.yaml",
      "term_id": "HP:0010614",
      "term_label": "Fibroma",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010618",
      "best_source_term_label": "Ovarian fibroma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010618"
      ],
      "supporting_source_term_labels": [
        "Ovarian fibroma"
      ],
      "supporting_source_node_names": [
        "Ovarian Fibroma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Tuberous Sclerosis Complex",
      "disease_term_id": "MONDO:0001734",
      "source_file": "Tuberous_Sclerosis_Complex.yaml",
      "term_id": "HP:0010614",
      "term_label": "Fibroma",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010615",
      "best_source_term_label": "Angiofibromas",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010615"
      ],
      "supporting_source_term_labels": [
        "Angiofibromas"
      ],
      "supporting_source_node_names": [
        "Facial Angiofibromas"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010614" } }));
