window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000990"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000990",
  "term_label": "conventional dendritic cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.389186,
  "mean_score": 0.338736,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Monkeypox",
      "disease_term_id": "MONDO:0002594",
      "source_file": "Monkeypox.yaml",
      "term_id": "CL:0000990",
      "term_label": "conventional dendritic cell",
      "score": 0.389186,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000453",
      "best_source_term_label": "Langerhans cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000453"
      ],
      "supporting_source_term_labels": [
        "Langerhans cell"
      ],
      "supporting_source_node_names": [
        "Lymphatic Dissemination",
        "Viral Entry and Initial Replication"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Contact Dermatitis",
      "disease_term_id": "MONDO:0005480",
      "source_file": "Contact_Dermatitis.yaml",
      "term_id": "CL:0000990",
      "term_label": "conventional dendritic cell",
      "score": 0.288286,
      "direct_score": 0.0,
      "propagated_score": 0.324074,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000453",
      "best_source_term_label": "Langerhans cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000453"
      ],
      "supporting_source_term_labels": [
        "Langerhans cell"
      ],
      "supporting_source_node_names": [
        "Allergen-specific T-cell priming",
        "Skin innate immune activation during sensitization"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000990" } }));
