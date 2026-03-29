window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000351"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000351",
  "term_label": "trophoblast cell",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 0.64,
  "mean_score": 0.572493,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Antiphospholipid Syndrome",
      "disease_term_id": "MONDO:8000010",
      "source_file": "Antiphospholipid_Syndrome.yaml",
      "term_id": "CL:0000351",
      "term_label": "trophoblast cell",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000351",
      "best_source_term_label": "trophoblast cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000351"
      ],
      "supporting_source_term_labels": [
        "trophoblast cell"
      ],
      "supporting_source_node_names": [
        "Placental immune injury"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Twin to Twin Transfusion Syndrome",
      "disease_term_id": "MONDO:0019805",
      "source_file": "Twin_to_Twin_Transfusion_Syndrome.yaml",
      "term_id": "CL:0000351",
      "term_label": "trophoblast cell",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000525",
      "best_source_term_label": "syncytiotrophoblast cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000525"
      ],
      "supporting_source_term_labels": [
        "syncytiotrophoblast cell"
      ],
      "supporting_source_node_names": [
        "Unbalanced placental vascular anastomoses"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "CL:0000351",
      "term_label": "trophoblast cell",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000351",
      "best_source_term_label": "trophoblast cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000351"
      ],
      "supporting_source_term_labels": [
        "trophoblast cell"
      ],
      "supporting_source_node_names": [
        "CYP19A1 Gene Mutation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000351" } }));
