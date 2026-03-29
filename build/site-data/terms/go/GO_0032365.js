window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032365"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032365",
  "term_label": "intracellular lipid transport",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.360603,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Carnitine Palmitoyltransferase II Deficiency",
      "disease_term_id": "MONDO:0015515",
      "source_file": "Carnitine_Palmitoyltransferase_II_Deficiency.yaml",
      "term_id": "GO:0032365",
      "term_label": "intracellular lipid transport",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006853",
      "best_source_term_label": "carnitine shuttle",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006853"
      ],
      "supporting_source_term_labels": [
        "carnitine shuttle"
      ],
      "supporting_source_node_names": [
        "Carnitine shuttle disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Carnitine-acylcarnitine Translocase Deficiency",
      "disease_term_id": "MONDO:0008918",
      "source_file": "Carnitine-Acylcarnitine_Translocase_Deficiency.yaml",
      "term_id": "GO:0032365",
      "term_label": "intracellular lipid transport",
      "score": 0.369586,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006853",
      "best_source_term_label": "carnitine shuttle",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006853"
      ],
      "supporting_source_term_labels": [
        "carnitine shuttle"
      ],
      "supporting_source_node_names": [
        "Toxic acylcarnitine accumulation and secondary carnitine depletion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Niemann-Pick Disease Type C",
      "disease_term_id": "MONDO:0018982",
      "source_file": "Niemann_Pick_Disease_Type_C.yaml",
      "term_id": "GO:0032365",
      "term_label": "intracellular lipid transport",
      "score": 0.134745,
      "direct_score": 0.0,
      "propagated_score": 0.163333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0032367",
      "best_source_term_label": "intracellular cholesterol transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032367"
      ],
      "supporting_source_term_labels": [
        "intracellular cholesterol transport"
      ],
      "supporting_source_node_names": [
        "Impaired Intracellular Cholesterol Trafficking"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032365" } }));
