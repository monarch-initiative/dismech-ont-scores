window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035825"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035825",
  "term_label": "homologous recombination",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.740351,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Triple-Negative Breast Cancer",
      "disease_term_id": "MONDO:0005494",
      "source_file": "Triple_Negative_Breast_Cancer.yaml",
      "term_id": "GO:0035825",
      "term_label": "homologous recombination",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0035825",
      "best_source_term_label": "homologous recombination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035825"
      ],
      "supporting_source_term_labels": [
        "homologous recombination"
      ],
      "supporting_source_node_names": [
        "DNA Repair Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hereditary Breast and Ovarian Cancer Syndrome",
      "disease_term_id": "MONDO:0011450",
      "source_file": "Hereditary_Breast_and_Ovarian_Cancer_Syndrome.yaml",
      "term_id": "GO:0035825",
      "term_label": "homologous recombination",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0035825",
      "best_source_term_label": "homologous recombination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035825"
      ],
      "supporting_source_term_labels": [
        "homologous recombination"
      ],
      "supporting_source_node_names": [
        "Homologous Recombination Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0035825",
      "term_label": "homologous recombination",
      "score": 0.421053,
      "direct_score": 0.421053,
      "propagated_score": 0.421053,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0035825",
      "best_source_term_label": "homologous recombination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035825"
      ],
      "supporting_source_term_labels": [
        "homologous recombination"
      ],
      "supporting_source_node_names": [
        "Homologous Recombination Impairment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035825" } }));
