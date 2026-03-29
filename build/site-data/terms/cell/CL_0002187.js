window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002187"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002187",
  "term_label": "basal cell of epidermis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Basal Cell Carcinoma",
      "disease_term_id": "MONDO:0005341",
      "source_file": "Basal_Cell_Carcinoma.yaml",
      "term_id": "CL:0002187",
      "term_label": "basal cell of epidermis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002187",
      "best_source_term_label": "basal cell of epidermis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002187"
      ],
      "supporting_source_term_labels": [
        "basal cell of epidermis"
      ],
      "supporting_source_node_names": [
        "PTCH1 Loss of Function",
        "SMO Activating Mutations",
        "Uncontrolled Basal Cell Proliferation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Gorlin Syndrome",
      "disease_term_id": "MONDO:0007187",
      "source_file": "Gorlin_Syndrome.yaml",
      "term_id": "CL:0002187",
      "term_label": "basal cell of epidermis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002187",
      "best_source_term_label": "basal cell of epidermis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002187"
      ],
      "supporting_source_term_labels": [
        "basal cell of epidermis"
      ],
      "supporting_source_node_names": [
        "PTCH1 Germline Mutations"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002187" } }));
