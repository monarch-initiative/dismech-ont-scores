window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0015850"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0015850",
  "term_label": "organic hydroxy compound transport",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.255049,
  "mean_score": 0.156106,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "GO:0015850",
      "term_label": "organic hydroxy compound transport",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0014046",
      "best_source_term_label": "dopamine secretion",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0014046"
      ],
      "supporting_source_term_labels": [
        "dopamine secretion"
      ],
      "supporting_source_node_names": [
        "Dysregulation of Dopamine Neurotransmission"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Tuberculosis",
      "disease_term_id": "MONDO:0018076",
      "source_file": "Tuberculosis.yaml",
      "term_id": "GO:0015850",
      "term_label": "organic hydroxy compound transport",
      "score": 0.194323,
      "direct_score": 0.0,
      "propagated_score": 0.261333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0030301",
      "best_source_term_label": "cholesterol transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030301"
      ],
      "supporting_source_term_labels": [
        "cholesterol transport"
      ],
      "supporting_source_node_names": [
        "Granuloma Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0015850",
      "term_label": "organic hydroxy compound transport",
      "score": 0.163231,
      "direct_score": 0.0,
      "propagated_score": 0.21952,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0048243",
      "best_source_term_label": "norepinephrine secretion",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048243"
      ],
      "supporting_source_term_labels": [
        "norepinephrine secretion"
      ],
      "supporting_source_node_names": [
        "Sympathetic Denervation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Niemann-Pick Disease Type C",
      "disease_term_id": "MONDO:0018982",
      "source_file": "Niemann_Pick_Disease_Type_C.yaml",
      "term_id": "GO:0015850",
      "term_label": "organic hydroxy compound transport",
      "score": 0.085016,
      "direct_score": 0.0,
      "propagated_score": 0.114333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0032367",
      "best_source_term_label": "intracellular cholesterol transport",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032367"
      ],
      "supporting_source_term_labels": [
        "intracellular cholesterol transport"
      ],
      "supporting_source_node_names": [
        "Impaired Intracellular Cholesterol Trafficking"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "GO:0015850",
      "term_label": "organic hydroxy compound transport",
      "score": 0.082911,
      "direct_score": 0.0,
      "propagated_score": 0.111502,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0050432",
      "best_source_term_label": "catecholamine secretion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050432"
      ],
      "supporting_source_term_labels": [
        "catecholamine secretion"
      ],
      "supporting_source_node_names": [
        "Catecholamine excess"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0015850" } }));
