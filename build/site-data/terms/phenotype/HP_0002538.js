window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002538"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002538",
  "term_label": "Abnormal cerebral cortex morphology",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.520508,
  "mean_score": 0.404955,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "D-2-Hydroxyglutaric Aciduria",
      "disease_term_id": "MONDO:0010924",
      "source_file": "D-2-Hydroxyglutaric_Aciduria.yaml",
      "term_id": "HP:0002538",
      "term_label": "Abnormal cerebral cortex morphology",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002120",
      "best_source_term_label": "Cerebral cortical atrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002120"
      ],
      "supporting_source_term_labels": [
        "Cerebral cortical atrophy"
      ],
      "supporting_source_node_names": [
        "Cerebral cortical atrophy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Tuberous Sclerosis Complex",
      "disease_term_id": "MONDO:0001734",
      "source_file": "Tuberous_Sclerosis_Complex.yaml",
      "term_id": "HP:0002538",
      "term_label": "Abnormal cerebral cortex morphology",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0009717",
      "best_source_term_label": "Cortical tubers",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009717"
      ],
      "supporting_source_term_labels": [
        "Cortical tubers"
      ],
      "supporting_source_node_names": [
        "Cortical Tubers"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0002538",
      "term_label": "Abnormal cerebral cortex morphology",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002126",
      "best_source_term_label": "Polymicrogyria",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002126"
      ],
      "supporting_source_term_labels": [
        "Polymicrogyria"
      ],
      "supporting_source_node_names": [
        "Polymicrogyria"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Neonatal Severe Encephalopathy with Lactic Acidosis and Brain Abnormalities",
      "disease_term_id": "MONDO:0060562",
      "source_file": "NELABA.yaml",
      "term_id": "HP:0002538",
      "term_label": "Abnormal cerebral cortex morphology",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0002126",
      "best_source_term_label": "Polymicrogyria",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002126"
      ],
      "supporting_source_term_labels": [
        "Polymicrogyria"
      ],
      "supporting_source_node_names": [
        "Polymicrogyria"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dystroglycanopathy",
      "disease_term_id": "MONDO:0018276",
      "source_file": "Dystroglycanopathy.yaml",
      "term_id": "HP:0002538",
      "term_label": "Abnormal cerebral cortex morphology",
      "score": 0.255049,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0007260",
      "best_source_term_label": "Type II lissencephaly",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007260"
      ],
      "supporting_source_term_labels": [
        "Type II lissencephaly"
      ],
      "supporting_source_node_names": [
        "Cobblestone lissencephaly"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002538" } }));
