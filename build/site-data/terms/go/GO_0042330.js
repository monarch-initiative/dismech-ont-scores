window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042330"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042330",
  "term_label": "taxis",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.267243,
  "mean_score": 0.088359,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Vitiligo",
      "disease_term_id": "MONDO:0008661",
      "source_file": "Vitiligo.yaml",
      "term_id": "GO:0042330",
      "term_label": "taxis",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030595",
      "best_source_term_label": "leukocyte chemotaxis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030595"
      ],
      "supporting_source_term_labels": [
        "leukocyte chemotaxis"
      ],
      "supporting_source_node_names": [
        "IFN-gamma-CXCL9/CXCL10 Chemokine Axis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "GO:0042330",
      "term_label": "taxis",
      "score": 0.041904,
      "direct_score": 0.0,
      "propagated_score": 0.053782,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030593",
      "best_source_term_label": "neutrophil chemotaxis",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030593"
      ],
      "supporting_source_term_labels": [
        "neutrophil chemotaxis"
      ],
      "supporting_source_node_names": [
        "Systemic neutrophilic inflammation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Transient Neonatal Pustular Melanosis",
      "disease_term_id": "",
      "source_file": "Transient_Neonatal_Pustular_Melanosis.yaml",
      "term_id": "GO:0042330",
      "term_label": "taxis",
      "score": 0.027936,
      "direct_score": 0.0,
      "propagated_score": 0.035855,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030593",
      "best_source_term_label": "neutrophil chemotaxis",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030593"
      ],
      "supporting_source_term_labels": [
        "neutrophil chemotaxis"
      ],
      "supporting_source_node_names": [
        "Pustule Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "GO:0042330",
      "term_label": "taxis",
      "score": 0.016353,
      "direct_score": 0.0,
      "propagated_score": 0.020988,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030593",
      "best_source_term_label": "neutrophil chemotaxis",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030593"
      ],
      "supporting_source_term_labels": [
        "neutrophil chemotaxis"
      ],
      "supporting_source_node_names": [
        "Neutrophilic Airway Inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042330" } }));
