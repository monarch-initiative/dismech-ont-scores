window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000833"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000833",
  "term_label": "eosinophilic promyelocyte",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.068637,
  "mean_score": 0.053678,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Dientamoebiasis",
      "disease_term_id": "MONDO:0024608",
      "source_file": "Dientamoebiasis.yaml",
      "term_id": "CL:0000833",
      "term_label": "eosinophilic promyelocyte",
      "score": 0.068637,
      "direct_score": 0.0,
      "propagated_score": 0.0832,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000041",
      "best_source_term_label": "mature eosinophil",
      "best_source_path_score": 0.112,
      "best_source_path": "develops_from > is_a > develops_from",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 2,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000041"
      ],
      "supporting_source_term_labels": [
        "mature eosinophil"
      ],
      "supporting_source_node_names": [
        "Mucosal inflammatory response",
        "Systemic immune activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Collagenous Sprue",
      "disease_term_id": "MONDO:0044092",
      "source_file": "Collagenous_Sprue.yaml",
      "term_id": "CL:0000833",
      "term_label": "eosinophilic promyelocyte",
      "score": 0.061598,
      "direct_score": 0.0,
      "propagated_score": 0.074667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000041",
      "best_source_term_label": "mature eosinophil",
      "best_source_path_score": 0.112,
      "best_source_path": "develops_from > is_a > develops_from",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 2,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000041"
      ],
      "supporting_source_term_labels": [
        "mature eosinophil"
      ],
      "supporting_source_node_names": [
        "Mucosal immune activation with intraepithelial lymphocytosis"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "CL:0000833",
      "term_label": "eosinophilic promyelocyte",
      "score": 0.030799,
      "direct_score": 0.0,
      "propagated_score": 0.037333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000041",
      "best_source_term_label": "mature eosinophil",
      "best_source_path_score": 0.112,
      "best_source_path": "develops_from > is_a > develops_from",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 2,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000041"
      ],
      "supporting_source_term_labels": [
        "mature eosinophil"
      ],
      "supporting_source_node_names": [
        "Immune-mediated increase in pulmonary capillary permeability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000833" } }));
