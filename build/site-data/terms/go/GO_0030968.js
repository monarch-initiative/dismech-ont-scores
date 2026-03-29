window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030968"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030968",
  "term_label": "endoplasmic reticulum unfolded protein response",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.825521,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Type I Diabetes",
      "disease_term_id": "MONDO:0005147",
      "source_file": "Type_I_Diabetes.yaml",
      "term_id": "GO:0030968",
      "term_label": "endoplasmic reticulum unfolded protein response",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0030968",
      "best_source_term_label": "endoplasmic reticulum unfolded protein response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030968"
      ],
      "supporting_source_term_labels": [
        "endoplasmic reticulum unfolded protein response"
      ],
      "supporting_source_node_names": [
        "ER Stress and Unfolded Protein Response"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Homocystinuria",
      "disease_term_id": "MONDO:0004737",
      "source_file": "Homocystinuria.yaml",
      "term_id": "GO:0030968",
      "term_label": "endoplasmic reticulum unfolded protein response",
      "score": 0.976562,
      "direct_score": 0.976562,
      "propagated_score": 0.976562,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0030968",
      "best_source_term_label": "endoplasmic reticulum unfolded protein response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030968"
      ],
      "supporting_source_term_labels": [
        "endoplasmic reticulum unfolded protein response"
      ],
      "supporting_source_node_names": [
        "CBS protein misfolding and proteostasis disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "GO:0030968",
      "term_label": "endoplasmic reticulum unfolded protein response",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0030968",
      "best_source_term_label": "endoplasmic reticulum unfolded protein response",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030968"
      ],
      "supporting_source_term_labels": [
        "endoplasmic reticulum unfolded protein response"
      ],
      "supporting_source_node_names": [
        "Endoplasmic Reticulum Stress"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030968" } }));
