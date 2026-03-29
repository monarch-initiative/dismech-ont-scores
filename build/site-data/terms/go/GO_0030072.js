window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030072"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030072",
  "term_label": "peptide hormone secretion",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.545394,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:0030072",
      "term_label": "peptide hormone secretion",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030073",
      "best_source_term_label": "insulin secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030073"
      ],
      "supporting_source_term_labels": [
        "insulin secretion"
      ],
      "supporting_source_node_names": [
        "Absolute insulin deficiency",
        "Pancreatic beta-cell secretory dysfunction",
        "Pancreatogenic endocrine hormone loss (T5DM/fibro-inflammatory overlap)",
        "Relative insulin deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Malnutrition-Related Diabetes Mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Malnutrition-related_Diabetes_Mellitus.yaml",
      "term_id": "GO:0030072",
      "term_label": "peptide hormone secretion",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030073",
      "best_source_term_label": "insulin secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030073"
      ],
      "supporting_source_term_labels": [
        "insulin secretion"
      ],
      "supporting_source_node_names": [
        "Insulin deficiency from beta-cell impairment in undernutrition"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "GO:0030072",
      "term_label": "peptide hormone secretion",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0070459",
      "best_source_term_label": "prolactin secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070459"
      ],
      "supporting_source_term_labels": [
        "prolactin secretion"
      ],
      "supporting_source_node_names": [
        "Hyperprolactinemia-associated endocrine dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Type 2 Diabetes Mellitus",
      "disease_term_id": "MONDO:0005148",
      "source_file": "Type_2_Diabetes_Mellitus.yaml",
      "term_id": "GO:0030072",
      "term_label": "peptide hormone secretion",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030073",
      "best_source_term_label": "insulin secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030073"
      ],
      "supporting_source_term_labels": [
        "insulin secretion"
      ],
      "supporting_source_node_names": [
        "Beta Cell Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030072" } }));
