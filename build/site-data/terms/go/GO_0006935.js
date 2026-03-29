window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006935"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006935",
  "term_label": "chemotaxis",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.126227,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Vitiligo",
      "disease_term_id": "MONDO:0008661",
      "source_file": "Vitiligo.yaml",
      "term_id": "GO:0006935",
      "term_label": "chemotaxis",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030595",
      "best_source_term_label": "leukocyte chemotaxis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "GO:0006935",
      "term_label": "chemotaxis",
      "score": 0.059862,
      "direct_score": 0.0,
      "propagated_score": 0.076832,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030593",
      "best_source_term_label": "neutrophil chemotaxis",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
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
      "term_id": "GO:0006935",
      "term_label": "chemotaxis",
      "score": 0.039908,
      "direct_score": 0.0,
      "propagated_score": 0.051221,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030593",
      "best_source_term_label": "neutrophil chemotaxis",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
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
      "term_id": "GO:0006935",
      "term_label": "chemotaxis",
      "score": 0.023361,
      "direct_score": 0.0,
      "propagated_score": 0.029983,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030593",
      "best_source_term_label": "neutrophil chemotaxis",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006935" } }));
