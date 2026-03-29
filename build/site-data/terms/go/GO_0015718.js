window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0015718"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0015718",
  "term_label": "monocarboxylic acid transport",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.360924,
  "mean_score": 0.274995,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Meningioma",
      "disease_term_id": "MONDO:0016642",
      "source_file": "Meningioma.yaml",
      "term_id": "GO:0015718",
      "term_label": "monocarboxylic acid transport",
      "score": 0.360924,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0015908",
      "best_source_term_label": "fatty acid transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015908"
      ],
      "supporting_source_term_labels": [
        "fatty acid transport"
      ],
      "supporting_source_node_names": [
        "CD36-Associated Fatty Acid Oxidation Reprogramming"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Carnitine Palmitoyltransferase II Deficiency",
      "disease_term_id": "MONDO:0015515",
      "source_file": "Carnitine_Palmitoyltransferase_II_Deficiency.yaml",
      "term_id": "GO:0015718",
      "term_label": "monocarboxylic acid transport",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006853",
      "best_source_term_label": "carnitine shuttle",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "term_id": "GO:0015718",
      "term_label": "monocarboxylic acid transport",
      "score": 0.181097,
      "direct_score": 0.0,
      "propagated_score": 0.21952,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006853",
      "best_source_term_label": "carnitine shuttle",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0015718" } }));
