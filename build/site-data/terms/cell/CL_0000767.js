window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000767"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000767",
  "term_label": "basophil",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.333333,
  "mean_score": 0.235159,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "CL:0000767",
      "term_label": "basophil",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000767",
      "best_source_term_label": "basophil",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000767"
      ],
      "supporting_source_term_labels": [
        "basophil"
      ],
      "supporting_source_node_names": [
        "Immune-mediated increase in pulmonary capillary permeability"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "CL:0000767",
      "term_label": "basophil",
      "score": 0.136986,
      "direct_score": 0.136986,
      "propagated_score": 0.136986,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000767",
      "best_source_term_label": "basophil",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000767"
      ],
      "supporting_source_term_labels": [
        "basophil"
      ],
      "supporting_source_node_names": [
        "Airway Inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000767" } }));
