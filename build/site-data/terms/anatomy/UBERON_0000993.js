window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000993"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000993",
  "term_label": "oviduct",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.136349,
  "mean_score": 0.136349,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "UBERON:0000993",
      "term_label": "oviduct",
      "score": 0.136349,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000995",
      "best_source_term_label": "uterus",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000995"
      ],
      "supporting_source_term_labels": [
        "uterus"
      ],
      "supporting_source_node_names": [
        "Estrogen Deficiency"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Cervical Cancer",
      "disease_term_id": "MONDO:0002974",
      "source_file": "Cervical_Cancer.yaml",
      "term_id": "UBERON:0000993",
      "term_label": "oviduct",
      "score": 0.136349,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000002",
      "best_source_term_label": "uterine cervix",
      "best_source_path_score": 0.175,
      "best_source_path": "part_of > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0000002"
      ],
      "supporting_source_term_labels": [
        "uterine cervix"
      ],
      "supporting_source_node_names": [
        "E6 Oncoprotein-Mediated p53 Degradation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "UBERON:0000993",
      "term_label": "oviduct",
      "score": 0.136349,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001295",
      "best_source_term_label": "endometrium",
      "best_source_path_score": 0.175,
      "best_source_path": "part_of > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001295"
      ],
      "supporting_source_term_labels": [
        "endometrium"
      ],
      "supporting_source_node_names": [
        "Accelerated Tumor Development",
        "Microsatellite Instability",
        "Neoantigen Generation and Immune Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "MSI-High Endometrial Cancer",
      "disease_term_id": "MONDO:0011962",
      "source_file": "MSI_High_Endometrial_Cancer.yaml",
      "term_id": "UBERON:0000993",
      "term_label": "oviduct",
      "score": 0.136349,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001295",
      "best_source_term_label": "endometrium",
      "best_source_path_score": 0.175,
      "best_source_path": "part_of > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001295"
      ],
      "supporting_source_term_labels": [
        "endometrium"
      ],
      "supporting_source_node_names": [
        "Mismatch Repair Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000993" } }));
