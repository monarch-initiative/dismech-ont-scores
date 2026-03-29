window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035821"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035821",
  "term_label": "modulation of process of another organism",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.400497,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Clostridioides difficile Infection",
      "disease_term_id": "MONDO:0000705",
      "source_file": "Clostridioides_difficile_Infection.yaml",
      "term_id": "GO:0035821",
      "term_label": "modulation of process of another organism",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0044003",
      "best_source_term_label": "symbiont-mediated perturbation of host process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044003"
      ],
      "supporting_source_term_labels": [
        "symbiont-mediated perturbation of host process"
      ],
      "supporting_source_node_names": [
        "Toxin Production (TcdA/TcdB)"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Irritable Bowel Syndrome",
      "disease_term_id": "MONDO:0005052",
      "source_file": "Irritable_Bowel_Syndrome.yaml",
      "term_id": "GO:0035821",
      "term_label": "modulation of process of another organism",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0044003",
      "best_source_term_label": "symbiont-mediated perturbation of host process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044003"
      ],
      "supporting_source_term_labels": [
        "symbiont-mediated perturbation of host process"
      ],
      "supporting_source_node_names": [
        "Microbiome Dysbiosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ulcerative Colitis",
      "disease_term_id": "MONDO:0005101",
      "source_file": "Ulcerative_Colitis.yaml",
      "term_id": "GO:0035821",
      "term_label": "modulation of process of another organism",
      "score": 0.419534,
      "direct_score": 0.0,
      "propagated_score": 0.538462,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0044003",
      "best_source_term_label": "symbiont-mediated perturbation of host process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044003"
      ],
      "supporting_source_term_labels": [
        "symbiont-mediated perturbation of host process"
      ],
      "supporting_source_node_names": [
        "Loss of Microbial Diversity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hepatitis C",
      "disease_term_id": "MONDO:0005231",
      "source_file": "Hepatitis_C.yaml",
      "term_id": "GO:0035821",
      "term_label": "modulation of process of another organism",
      "score": 0.091664,
      "direct_score": 0.0,
      "propagated_score": 0.117649,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0039502",
      "best_source_term_label": "symbiont-mediated suppression of host type I interferon-mediated signaling pathway",
      "best_source_path_score": 0.117649,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 6,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0039502"
      ],
      "supporting_source_term_labels": [
        "symbiont-mediated suppression of host type I interferon-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "Immune Evasion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035821" } }));
