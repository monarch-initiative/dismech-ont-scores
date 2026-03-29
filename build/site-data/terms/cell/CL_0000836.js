window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000836"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000836",
  "term_label": "promyelocyte",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.276615,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Acute Promyelocytic Leukemia, PML-RARA",
      "disease_term_id": "MONDO:0012883",
      "source_file": "APL_PML_RARA.yaml",
      "term_id": "CL:0000836",
      "term_label": "promyelocyte",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0000836",
      "best_source_term_label": "promyelocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000836"
      ],
      "supporting_source_term_labels": [
        "promyelocyte"
      ],
      "supporting_source_node_names": [
        "PML-RARA Fusion Oncogene Formation",
        "Promyelocyte Accumulation",
        "Transcriptional Repression of Differentiation Genes"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Dientamoebiasis",
      "disease_term_id": "MONDO:0024608",
      "source_file": "Dientamoebiasis.yaml",
      "term_id": "CL:0000836",
      "term_label": "promyelocyte",
      "score": 0.045377,
      "direct_score": 0.0,
      "propagated_score": 0.05824,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000041",
      "best_source_term_label": "mature eosinophil",
      "best_source_path_score": 0.0784,
      "best_source_path": "develops_from > is_a > develops_from > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 2,
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
      "term_id": "CL:0000836",
      "term_label": "promyelocyte",
      "score": 0.040723,
      "direct_score": 0.0,
      "propagated_score": 0.052267,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000041",
      "best_source_term_label": "mature eosinophil",
      "best_source_path_score": 0.0784,
      "best_source_path": "develops_from > is_a > develops_from > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 2,
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
      "term_id": "CL:0000836",
      "term_label": "promyelocyte",
      "score": 0.020361,
      "direct_score": 0.0,
      "propagated_score": 0.026133,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000041",
      "best_source_term_label": "mature eosinophil",
      "best_source_path_score": 0.0784,
      "best_source_path": "develops_from > is_a > develops_from > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000836" } }));
