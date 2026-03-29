window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006839"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006839",
  "term_label": "mitochondrial transport",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.357428,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Carnitine Palmitoyltransferase II Deficiency",
      "disease_term_id": "MONDO:0015515",
      "source_file": "Carnitine_Palmitoyltransferase_II_Deficiency.yaml",
      "term_id": "GO:0006839",
      "term_label": "mitochondrial transport",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006853",
      "best_source_term_label": "carnitine shuttle",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "GO:0006839",
      "term_label": "mitochondrial transport",
      "score": 0.278968,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006853",
      "best_source_term_label": "carnitine shuttle",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006839" } }));
