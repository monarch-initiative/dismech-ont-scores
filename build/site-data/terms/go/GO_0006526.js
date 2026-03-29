window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006526"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006526",
  "term_label": "L-arginine biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.4,
  "mean_score": 0.366667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Argininosuccinic Aciduria",
      "disease_term_id": "MONDO:0008815",
      "source_file": "Argininosuccinic_Aciduria.yaml",
      "term_id": "GO:0006526",
      "term_label": "L-arginine biosynthetic process",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006526",
      "best_source_term_label": "L-arginine biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0006526",
      "term_label": "L-arginine biosynthetic process",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006526",
      "best_source_term_label": "L-arginine biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006526" } }));
