window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002894"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002894",
  "term_label": "Neoplasm of the pancreas",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.622072,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Pancreatic Neuroendocrine Tumor",
      "disease_term_id": "MONDO:0019954",
      "source_file": "Pancreatic_Neuroendocrine_Tumor.yaml",
      "term_id": "HP:0002894",
      "term_label": "Neoplasm of the pancreas",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0002894",
      "best_source_term_label": "Neoplasm of the pancreas",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002894"
      ],
      "supporting_source_term_labels": [
        "Neoplasm of the pancreas"
      ],
      "supporting_source_node_names": [
        "Pancreatic Mass"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pancreatic Ductal Adenocarcinoma",
      "disease_term_id": "MONDO:0005184",
      "source_file": "Pancreatic_Ductal_Adenocarcinoma.yaml",
      "term_id": "HP:0002894",
      "term_label": "Neoplasm of the pancreas",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0006725",
      "best_source_term_label": "Pancreatic adenocarcinoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006725"
      ],
      "supporting_source_term_labels": [
        "Pancreatic adenocarcinoma"
      ],
      "supporting_source_node_names": [
        "Pancreatic Adenocarcinoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hereditary Breast and Ovarian Cancer Syndrome",
      "disease_term_id": "MONDO:0011450",
      "source_file": "Hereditary_Breast_and_Ovarian_Cancer_Syndrome.yaml",
      "term_id": "HP:0002894",
      "term_label": "Neoplasm of the pancreas",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0006725",
      "best_source_term_label": "Pancreatic adenocarcinoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006725"
      ],
      "supporting_source_term_labels": [
        "Pancreatic adenocarcinoma"
      ],
      "supporting_source_node_names": [
        "Pancreatic Cancer"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002894" } }));
