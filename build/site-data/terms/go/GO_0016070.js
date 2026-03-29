window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0016070"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0016070",
  "term_label": "RNA metabolic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.202117,
  "mean_score": 0.180558,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Myotonic Dystrophy Type 1",
      "disease_term_id": "MONDO:0008056",
      "source_file": "Myotonic_Dystrophy_Type_1.yaml",
      "term_id": "GO:0016070",
      "term_label": "RNA metabolic process",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0008380",
      "best_source_term_label": "RNA splicing",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0008380"
      ],
      "supporting_source_term_labels": [
        "RNA splicing"
      ],
      "supporting_source_node_names": [
        "Chloride Channel Mis-splicing and Myotonia",
        "Toxic RNA Gain-of-Function"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "You-Hoover-Fong Syndrome",
      "disease_term_id": "MONDO:0014848",
      "source_file": "You-Hoover-Fong_Syndrome.yaml",
      "term_id": "GO:0016070",
      "term_label": "RNA metabolic process",
      "score": 0.198075,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0000184",
      "best_source_term_label": "nuclear-transcribed mRNA catabolic process, nonsense-mediated decay",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000184"
      ],
      "supporting_source_term_labels": [
        "nuclear-transcribed mRNA catabolic process, nonsense-mediated decay"
      ],
      "supporting_source_node_names": [
        "TTT complex dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Amyotrophic Lateral Sclerosis",
      "disease_term_id": "MONDO:0004976",
      "source_file": "Amyotrophic_Lateral_Sclerosis.yaml",
      "term_id": "GO:0016070",
      "term_label": "RNA metabolic process",
      "score": 0.141482,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0000375",
      "best_source_term_label": "RNA splicing, via transesterification reactions",
      "best_source_path_score": 0.1715,
      "best_source_path": "is_a > is_a > part_of > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0000375"
      ],
      "supporting_source_term_labels": [
        "RNA splicing, via transesterification reactions"
      ],
      "supporting_source_node_names": [
        "TDP-43 Proteinopathy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0016070" } }));
