window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0001069"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0001069",
  "term_label": "group 2 innate lymphoid cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.256849,
  "mean_score": 0.192462,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "CL:0001069",
      "term_label": "group 2 innate lymphoid cell",
      "score": 0.256849,
      "direct_score": 0.256849,
      "propagated_score": 0.256849,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0001069",
      "best_source_term_label": "group 2 innate lymphoid cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0001069"
      ],
      "supporting_source_term_labels": [
        "group 2 innate lymphoid cell"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response / Th2 Signaling"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "CL:0001069",
      "term_label": "group 2 innate lymphoid cell",
      "score": 0.128074,
      "direct_score": 0.128074,
      "propagated_score": 0.128074,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0001069",
      "best_source_term_label": "group 2 innate lymphoid cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0001069"
      ],
      "supporting_source_term_labels": [
        "group 2 innate lymphoid cell"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0001069" } }));
