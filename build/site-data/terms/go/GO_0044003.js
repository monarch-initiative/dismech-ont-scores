window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0044003"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0044003",
  "term_label": "symbiont-mediated perturbation of host process",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.725045,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Clostridioides difficile Infection",
      "disease_term_id": "MONDO:0000705",
      "source_file": "Clostridioides_difficile_Infection.yaml",
      "term_id": "GO:0044003",
      "term_label": "symbiont-mediated perturbation of host process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0044003",
      "best_source_term_label": "symbiont-mediated perturbation of host process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0044003",
      "term_label": "symbiont-mediated perturbation of host process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0044003",
      "best_source_term_label": "symbiont-mediated perturbation of host process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0044003",
      "term_label": "symbiont-mediated perturbation of host process",
      "score": 0.769231,
      "direct_score": 0.769231,
      "propagated_score": 0.769231,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0044003",
      "best_source_term_label": "symbiont-mediated perturbation of host process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0044003",
      "term_label": "symbiont-mediated perturbation of host process",
      "score": 0.130949,
      "direct_score": 0.0,
      "propagated_score": 0.16807,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0039502",
      "best_source_term_label": "symbiont-mediated suppression of host type I interferon-mediated signaling pathway",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0044003" } }));
