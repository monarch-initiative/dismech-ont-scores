window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000922"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000922",
  "term_label": "embryo",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.355874,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "UBERON:0000922",
      "term_label": "embryo",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000922",
      "best_source_term_label": "embryo",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000922"
      ],
      "supporting_source_term_labels": [
        "embryo"
      ],
      "supporting_source_node_names": [
        "Situs Inversus"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Meckel Syndrome",
      "disease_term_id": "MONDO:0018921",
      "source_file": "Meckel_Syndrome.yaml",
      "term_id": "UBERON:0000922",
      "term_label": "embryo",
      "score": 0.260254,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001049",
      "best_source_term_label": "neural tube",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001049"
      ],
      "supporting_source_term_labels": [
        "neural tube"
      ],
      "supporting_source_node_names": [
        "Altered Hedgehog signaling in neural tube patterning"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "UBERON:0000922",
      "term_label": "embryo",
      "score": 0.206809,
      "direct_score": 0.0,
      "propagated_score": 0.278125,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007124",
      "best_source_term_label": "pharyngeal pouch 3",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002539",
        "UBERON:0007124"
      ],
      "supporting_source_term_labels": [
        "pharyngeal arch",
        "pharyngeal pouch 3"
      ],
      "supporting_source_node_names": [
        "TBX1 haploinsufficiency and pharyngeal arch development"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "UBERON:0000922",
      "term_label": "embryo",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005417",
      "best_source_term_label": "forelimb bud",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0005417"
      ],
      "supporting_source_term_labels": [
        "forelimb bud"
      ],
      "supporting_source_node_names": [
        "TBX5 Haploinsufficiency and Enhancer Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Laryngotracheoesophageal Cleft",
      "disease_term_id": "MONDO:0016060",
      "source_file": "Laryngotracheoesophageal_Cleft.yaml",
      "term_id": "UBERON:0000922",
      "term_label": "embryo",
      "score": 0.130127,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003081",
      "best_source_term_label": "lateral plate mesoderm",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0003081"
      ],
      "supporting_source_term_labels": [
        "lateral plate mesoderm"
      ],
      "supporting_source_node_names": [
        "Enriched esophageal malformation gene expression in lateral plate mesoderm"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000922" } }));
