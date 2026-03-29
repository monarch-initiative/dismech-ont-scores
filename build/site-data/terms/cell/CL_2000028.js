window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:2000028"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:2000028",
  "term_label": "cerebellum glutamatergic neuron",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.434597,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Medulloblastoma, SHH-Activated",
      "disease_term_id": "MONDO:0850197",
      "source_file": "Medulloblastoma_SHH_Activated.yaml",
      "term_id": "CL:2000028",
      "term_label": "cerebellum glutamatergic neuron",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
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
      "term_id": "CL:2000028",
      "term_label": "cerebellum glutamatergic neuron",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
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
      "disorder_name": "CACNA1A-Related Disorder",
      "disease_term_id": "MONDO:0100254",
      "source_file": "CACNA1A_Related_Disorder.yaml",
      "term_id": "CL:2000028",
      "term_label": "cerebellum glutamatergic neuron",
      "score": 0.148834,
      "direct_score": 0.0,
      "propagated_score": 0.180412,
      "specificity": 0.824968,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:2000028" } }));
