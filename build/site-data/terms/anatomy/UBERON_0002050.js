window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002050"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002050",
  "term_label": "embryonic structure",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.272697,
  "mean_score": 0.230838,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Laryngotracheoesophageal Cleft",
      "disease_term_id": "MONDO:0016060",
      "source_file": "Laryngotracheoesophageal_Cleft.yaml",
      "term_id": "UBERON:0002050",
      "term_label": "embryonic structure",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003081",
      "best_source_term_label": "lateral plate mesoderm",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003081"
      ],
      "supporting_source_term_labels": [
        "lateral plate mesoderm"
      ],
      "supporting_source_node_names": [
        "Enriched esophageal malformation gene expression in lateral plate mesoderm"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Meckel Syndrome",
      "disease_term_id": "MONDO:0018921",
      "source_file": "Meckel_Syndrome.yaml",
      "term_id": "UBERON:0002050",
      "term_label": "embryonic structure",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
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
      "term_id": "UBERON:0002050",
      "term_label": "embryonic structure",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007124",
      "best_source_term_label": "pharyngeal pouch 3",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0007124"
      ],
      "supporting_source_term_labels": [
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
      "term_id": "UBERON:0002050",
      "term_label": "embryonic structure",
      "score": 0.18707,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005417",
      "best_source_term_label": "forelimb bud",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005417"
      ],
      "supporting_source_term_labels": [
        "forelimb bud"
      ],
      "supporting_source_node_names": [
        "TBX5 Haploinsufficiency and Enhancer Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002050" } }));
