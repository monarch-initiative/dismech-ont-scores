window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003202"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003202",
  "term_label": "Skeletal muscle atrophy",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "2-Methylbutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012392",
      "source_file": "2-Methylbutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0003202",
      "term_label": "Skeletal muscle atrophy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0003202",
      "best_source_term_label": "Skeletal muscle atrophy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003202"
      ],
      "supporting_source_term_labels": [
        "Skeletal muscle atrophy"
      ],
      "supporting_source_node_names": [
        "Skeletal muscle atrophy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Amyotrophic Lateral Sclerosis",
      "disease_term_id": "MONDO:0004976",
      "source_file": "Amyotrophic_Lateral_Sclerosis.yaml",
      "term_id": "HP:0003202",
      "term_label": "Skeletal muscle atrophy",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0003700",
      "best_source_term_label": "Generalized amyotrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003700"
      ],
      "supporting_source_term_labels": [
        "Generalized amyotrophy"
      ],
      "supporting_source_node_names": [
        "Generalized Amyotrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003202" } }));
