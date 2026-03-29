window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000120"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000120",
  "term_label": "granule cell",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.545394,
  "mean_score": 0.353293,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Medulloblastoma, SHH-Activated",
      "disease_term_id": "MONDO:0850197",
      "source_file": "Medulloblastoma_SHH_Activated.yaml",
      "term_id": "CL:0000120",
      "term_label": "granule cell",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0001031",
      "best_source_term_label": "cerebellar granule cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0001031"
      ],
      "supporting_source_term_labels": [
        "cerebellar granule cell"
      ],
      "supporting_source_node_names": [
        "Cerebellar Granule Cell Proliferation",
        "SHH Pathway Activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Medulloblastoma, WNT-Activated",
      "disease_term_id": "MONDO:0850196",
      "source_file": "Medulloblastoma_WNT_Activated.yaml",
      "term_id": "CL:0000120",
      "term_label": "granule cell",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0001031",
      "best_source_term_label": "cerebellar granule cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0001031"
      ],
      "supporting_source_term_labels": [
        "cerebellar granule cell"
      ],
      "supporting_source_node_names": [
        "Cell Proliferation and Tumor Formation",
        "WNT/Beta-Catenin Pathway Activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "CL:0000120",
      "term_label": "granule cell",
      "score": 0.181818,
      "direct_score": 0.181818,
      "propagated_score": 0.181818,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0000120",
      "best_source_term_label": "granule cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000120"
      ],
      "supporting_source_term_labels": [
        "granule cell"
      ],
      "supporting_source_node_names": [
        "Oxidative stress and microglia-driven cerebellar neurodegeneration"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "CACNA1A-Related Disorder",
      "disease_term_id": "MONDO:0100254",
      "source_file": "CACNA1A_Related_Disorder.yaml",
      "term_id": "CL:0000120",
      "term_label": "granule cell",
      "score": 0.140565,
      "direct_score": 0.0,
      "propagated_score": 0.180412,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0001031",
      "best_source_term_label": "cerebellar granule cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0001031"
      ],
      "supporting_source_term_labels": [
        "cerebellar granule cell"
      ],
      "supporting_source_node_names": [
        "P/Q-type Calcium Channel Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000120" } }));
