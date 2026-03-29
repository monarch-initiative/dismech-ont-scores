window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031273"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031273",
  "term_label": "Shock",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.659551,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Clostridioides difficile Infection",
      "disease_term_id": "MONDO:0000705",
      "source_file": "Clostridioides_difficile_Infection.yaml",
      "term_id": "HP:0031273",
      "term_label": "Shock",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0031273",
      "best_source_term_label": "Shock",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031273"
      ],
      "supporting_source_term_labels": [
        "Shock"
      ],
      "supporting_source_node_names": [
        "Septic shock"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "HP:0031273",
      "term_label": "Shock",
      "score": 0.534209,
      "direct_score": 0.203822,
      "propagated_score": 0.647552,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0031274",
      "best_source_term_label": "Hypovolemic shock",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031273",
        "HP:0031274"
      ],
      "supporting_source_term_labels": [
        "Hypovolemic shock",
        "Shock"
      ],
      "supporting_source_node_names": [
        "Shock"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ebola Virus Disease (EVD)",
      "disease_term_id": "MONDO:0005737",
      "source_file": "Ebola_Virus_Disease_EVD.yaml",
      "term_id": "HP:0031273",
      "term_label": "Shock",
      "score": 0.444444,
      "direct_score": 0.444444,
      "propagated_score": 0.444444,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0031273",
      "best_source_term_label": "Shock",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031273"
      ],
      "supporting_source_term_labels": [
        "Shock"
      ],
      "supporting_source_node_names": [
        "Hypovolemic Shock"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031273" } }));
