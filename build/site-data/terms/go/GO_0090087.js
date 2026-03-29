window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0090087"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0090087",
  "term_label": "regulation of peptide transport",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.141482,
  "mean_score": 0.083725,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Type 2 Diabetes Mellitus",
      "disease_term_id": "MONDO:0005148",
      "source_file": "Type_2_Diabetes_Mellitus.yaml",
      "term_id": "GO:0090087",
      "term_label": "regulation of peptide transport",
      "score": 0.141482,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050796",
      "best_source_term_label": "regulation of insulin secretion",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050796"
      ],
      "supporting_source_term_labels": [
        "regulation of insulin secretion"
      ],
      "supporting_source_node_names": [
        "Incretin Axis Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0090087",
      "term_label": "regulation of peptide transport",
      "score": 0.066025,
      "direct_score": 0.0,
      "propagated_score": 0.080033,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0046676",
      "best_source_term_label": "negative regulation of insulin secretion",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046676"
      ],
      "supporting_source_term_labels": [
        "negative regulation of insulin secretion"
      ],
      "supporting_source_node_names": [
        "Pancreatic Iron Toxicity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:0090087",
      "term_label": "regulation of peptide transport",
      "score": 0.043667,
      "direct_score": 0.0,
      "propagated_score": 0.052932,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050796",
      "best_source_term_label": "regulation of insulin secretion",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050796"
      ],
      "supporting_source_term_labels": [
        "regulation of insulin secretion"
      ],
      "supporting_source_node_names": [
        "Incretin axis dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0090087" } }));
