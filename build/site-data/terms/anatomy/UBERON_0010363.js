window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0010363"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0010363",
  "term_label": "endochondral element",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.205224,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "UBERON:0010363",
      "term_label": "endochondral element",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005411",
      "best_source_term_label": "bony otic capsule",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005411"
      ],
      "supporting_source_term_labels": [
        "bony otic capsule"
      ],
      "supporting_source_node_names": [
        "Bony Dehiscence of Semicircular Canal"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0010363",
      "term_label": "endochondral element",
      "score": 0.194784,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004129",
      "best_source_term_label": "growth plate cartilage",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0004129"
      ],
      "supporting_source_term_labels": [
        "growth plate cartilage"
      ],
      "supporting_source_node_names": [
        "Epiphyseal skeletal overgrowth"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Kummell Disease",
      "disease_term_id": "MONDO:0003940",
      "source_file": "Kummell_Disease.yaml",
      "term_id": "UBERON:0010363",
      "term_label": "endochondral element",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001075",
      "best_source_term_label": "bony vertebral centrum",
      "best_source_path_score": 0.245,
      "best_source_path": "part_of > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001075"
      ],
      "supporting_source_term_labels": [
        "bony vertebral centrum"
      ],
      "supporting_source_node_names": [
        "Basivertebral foramen microcirculation compromise",
        "Vertebral body avascular necrosis"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0010363",
      "term_label": "endochondral element",
      "score": 0.053449,
      "direct_score": 0.0,
      "propagated_score": 0.0686,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005922",
      "best_source_term_label": "inferior nasal concha",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005922"
      ],
      "supporting_source_term_labels": [
        "inferior nasal concha"
      ],
      "supporting_source_node_names": [
        "Turbinate tissue loss from surgical resection"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0010363" } }));
