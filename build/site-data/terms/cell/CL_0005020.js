window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0005020"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0005020",
  "term_label": "lymphangioblast",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.186667,
  "mean_score": 0.186667,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "CL:0005020",
      "term_label": "lymphangioblast",
      "score": 0.186667,
      "direct_score": 0.0,
      "propagated_score": 0.186667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0002138",
      "best_source_term_label": "endothelial cell of lymphatic vessel",
      "best_source_path_score": 0.28,
      "best_source_path": "develops_from > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002138"
      ],
      "supporting_source_term_labels": [
        "endothelial cell of lymphatic vessel"
      ],
      "supporting_source_node_names": [
        "Lymphatic dysfunction with intralymphatic histiocytosis and persistent edema"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0005020" } }));
