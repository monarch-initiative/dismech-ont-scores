window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008380"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008380",
  "term_label": "RNA splicing",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Myotonic Dystrophy Type 1",
      "disease_term_id": "MONDO:0008056",
      "source_file": "Myotonic_Dystrophy_Type_1.yaml",
      "term_id": "GO:0008380",
      "term_label": "RNA splicing",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0008380",
      "best_source_term_label": "RNA splicing",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "disorder_name": "Amyotrophic Lateral Sclerosis",
      "disease_term_id": "MONDO:0004976",
      "source_file": "Amyotrophic_Lateral_Sclerosis.yaml",
      "term_id": "GO:0008380",
      "term_label": "RNA splicing",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0000375",
      "best_source_term_label": "RNA splicing, via transesterification reactions",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008380" } }));
