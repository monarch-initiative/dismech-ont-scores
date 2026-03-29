window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002617"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002617",
  "term_label": "Vascular dilatation",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.489219,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "HP:0002617",
      "term_label": "Vascular dilatation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0002617",
      "best_source_term_label": "Vascular dilatation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002617"
      ],
      "supporting_source_term_labels": [
        "Vascular dilatation"
      ],
      "supporting_source_node_names": [
        "Aneurysm Formation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Shprintzen-Goldberg Syndrome",
      "disease_term_id": "MONDO:0008426",
      "source_file": "Shprintzen-Goldberg_Syndrome.yaml",
      "term_id": "HP:0002617",
      "term_label": "Vascular dilatation",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0004942",
      "best_source_term_label": "Aortic aneurysm",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004942"
      ],
      "supporting_source_term_labels": [
        "Aortic aneurysm"
      ],
      "supporting_source_node_names": [
        "Aortic Aneurysm"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "HP:0002617",
      "term_label": "Vascular dilatation",
      "score": 0.506184,
      "direct_score": 0.0,
      "propagated_score": 0.680736,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0004942",
      "best_source_term_label": "Aortic aneurysm",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002616",
        "HP:0004942"
      ],
      "supporting_source_term_labels": [
        "Aortic aneurysm",
        "Aortic root aneurysm"
      ],
      "supporting_source_node_names": [
        "Aortic Aneurysm",
        "Aortic Root Aneurysm"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Polycystic Kidney Disease",
      "disease_term_id": "MONDO:0020642",
      "source_file": "Polycystic_Kidney_Disease.yaml",
      "term_id": "HP:0002617",
      "term_label": "Vascular dilatation",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0007029",
      "best_source_term_label": "Cerebral berry aneurysm",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007029"
      ],
      "supporting_source_term_labels": [
        "Cerebral berry aneurysm"
      ],
      "supporting_source_node_names": [
        "Intracranial Aneurysm"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Loeys-Dietz Syndrome",
      "disease_term_id": "MONDO:0018954",
      "source_file": "Loeys-Dietz_Syndrome.yaml",
      "term_id": "HP:0002617",
      "term_label": "Vascular dilatation",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002616",
      "best_source_term_label": "Aortic root aneurysm",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002616"
      ],
      "supporting_source_term_labels": [
        "Aortic root aneurysm"
      ],
      "supporting_source_node_names": [
        "Aortic Root Aneurysm"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002617" } }));
