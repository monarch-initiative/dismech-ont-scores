window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1990542"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1990542",
  "term_label": "mitochondrial transmembrane transport",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.510611,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Carnitine Palmitoyltransferase II Deficiency",
      "disease_term_id": "MONDO:0015515",
      "source_file": "Carnitine_Palmitoyltransferase_II_Deficiency.yaml",
      "term_id": "GO:1990542",
      "term_label": "mitochondrial transmembrane transport",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
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
      "term_id": "GO:1990542",
      "term_label": "mitochondrial transmembrane transport",
      "score": 0.398526,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.889567,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1990542" } }));
