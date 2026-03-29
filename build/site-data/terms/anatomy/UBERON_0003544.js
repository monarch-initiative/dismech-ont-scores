window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003544"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003544",
  "term_label": "brain white matter",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.691811,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "UBERON:0003544",
      "term_label": "brain white matter",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003544",
      "best_source_term_label": "brain white matter",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002437",
        "UBERON:0003544"
      ],
      "supporting_source_term_labels": [
        "brain white matter",
        "cerebral hemisphere white matter"
      ],
      "supporting_source_node_names": [
        "Demyelination",
        "GALC Deficiency and Psychosine Accumulation",
        "Inflammasome Activation",
        "Neuroinflammation",
        "Proteostasis Failure"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "UBERON:0003544",
      "term_label": "brain white matter",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003544",
      "best_source_term_label": "brain white matter",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002437",
        "UBERON:0003544"
      ],
      "supporting_source_term_labels": [
        "brain white matter",
        "cerebral hemisphere white matter"
      ],
      "supporting_source_node_names": [
        "Abnormal Cholesterol and Lipid Trafficking",
        "Iron-Dependent Oligodendrocyte Death (Ferroptosis)",
        "Oligodendrocyte Apoptosis",
        "PLP1 Missense Mutation Causing Protein Misfolding",
        "Unfolded Protein Response Activation in Oligodendrocytes"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Biotinidase Deficiency",
      "disease_term_id": "MONDO:0009665",
      "source_file": "Biotinidase_Deficiency.yaml",
      "term_id": "UBERON:0003544",
      "term_label": "brain white matter",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003544",
      "best_source_term_label": "brain white matter",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003544"
      ],
      "supporting_source_term_labels": [
        "brain white matter"
      ],
      "supporting_source_node_names": [
        "Central nervous system vulnerability and white matter injury"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "CADASIL Type 1",
      "disease_term_id": "MONDO:0007432",
      "source_file": "CADASIL_Type_1.yaml",
      "term_id": "UBERON:0003544",
      "term_label": "brain white matter",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002437",
      "best_source_term_label": "cerebral hemisphere white matter",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002437"
      ],
      "supporting_source_term_labels": [
        "cerebral hemisphere white matter"
      ],
      "supporting_source_node_names": [
        "Small Vessel Arteriopathy and Hypoperfusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003544" } }));
