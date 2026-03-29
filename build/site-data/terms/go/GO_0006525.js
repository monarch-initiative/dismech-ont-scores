window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006525"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006525",
  "term_label": "arginine metabolic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.360924,
  "mean_score": 0.261469,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arginase Deficiency",
      "disease_term_id": "MONDO:0008814",
      "source_file": "Arginase_Deficiency.yaml",
      "term_id": "GO:0006525",
      "term_label": "arginine metabolic process",
      "score": 0.360924,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006527",
      "best_source_term_label": "L-arginine catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006527"
      ],
      "supporting_source_term_labels": [
        "L-arginine catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired ureagenesis and hyperargininemia"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Argininosuccinic Aciduria",
      "disease_term_id": "MONDO:0008815",
      "source_file": "Argininosuccinic_Aciduria.yaml",
      "term_id": "GO:0006525",
      "term_label": "arginine metabolic process",
      "score": 0.230991,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006526",
      "best_source_term_label": "L-arginine biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006526"
      ],
      "supporting_source_term_labels": [
        "L-arginine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Nitric oxide deficiency and endothelial dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Citrullinemia Type I",
      "disease_term_id": "MONDO:0008988",
      "source_file": "Citrullinemia_Type_I.yaml",
      "term_id": "GO:0006525",
      "term_label": "arginine metabolic process",
      "score": 0.192493,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006526",
      "best_source_term_label": "L-arginine biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006526"
      ],
      "supporting_source_term_labels": [
        "L-arginine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Impaired hepatic ureagenesis due to ASS1 deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006525" } }));
