window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0034381"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0034381",
  "term_label": "plasma lipoprotein particle clearance",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.433108,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Coronary Artery Disease",
      "disease_term_id": "MONDO:1060134",
      "source_file": "Coronary_Artery_Disease.yaml",
      "term_id": "GO:0034381",
      "term_label": "plasma lipoprotein particle clearance",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0034383",
      "best_source_term_label": "low-density lipoprotein particle clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034383"
      ],
      "supporting_source_term_labels": [
        "low-density lipoprotein particle clearance"
      ],
      "supporting_source_node_names": [
        "Atherosclerotic Plaque Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Peripheral Artery Disease",
      "disease_term_id": "MONDO:0005386",
      "source_file": "Peripheral_Artery_Disease.yaml",
      "term_id": "GO:0034381",
      "term_label": "plasma lipoprotein particle clearance",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0034383",
      "best_source_term_label": "low-density lipoprotein particle clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034383"
      ],
      "supporting_source_term_labels": [
        "low-density lipoprotein particle clearance"
      ],
      "supporting_source_node_names": [
        "Atherosclerosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "GO:0034381",
      "term_label": "plasma lipoprotein particle clearance",
      "score": 0.144369,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0034383",
      "best_source_term_label": "low-density lipoprotein particle clearance",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034383"
      ],
      "supporting_source_term_labels": [
        "low-density lipoprotein particle clearance"
      ],
      "supporting_source_node_names": [
        "Impaired LDL Receptor Function"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0034381" } }));
