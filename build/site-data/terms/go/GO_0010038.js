window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0010038"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0010038",
  "term_label": "response to metal ion",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.295797,
  "mean_score": 0.214522,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0010038",
      "term_label": "response to metal ion",
      "score": 0.295797,
      "direct_score": 0.0,
      "propagated_score": 0.358556,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0010039",
      "best_source_term_label": "response to iron ion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0010039",
        "GO:0010040"
      ],
      "supporting_source_term_labels": [
        "response to iron ion",
        "response to iron(II) ion"
      ],
      "supporting_source_node_names": [
        "Cardiac Iron Deposition",
        "Pancreatic Iron Toxicity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0010038",
      "term_label": "response to metal ion",
      "score": 0.224575,
      "direct_score": 0.0,
      "propagated_score": 0.272222,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0071276",
      "best_source_term_label": "cellular response to cadmium ion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071276"
      ],
      "supporting_source_term_labels": [
        "cellular response to cadmium ion"
      ],
      "supporting_source_node_names": [
        "Cadmium Absorption and Systemic Distribution"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Thallium Poisoning",
      "disease_term_id": "MONDO:0041996",
      "source_file": "Thallium_Poisoning.yaml",
      "term_id": "GO:0010038",
      "term_label": "response to metal ion",
      "score": 0.123195,
      "direct_score": 0.0,
      "propagated_score": 0.149333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0035864",
      "best_source_term_label": "response to potassium ion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035864"
      ],
      "supporting_source_term_labels": [
        "response to potassium ion"
      ],
      "supporting_source_node_names": [
        "Potassium-mimetic cellular uptake"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0010038" } }));
