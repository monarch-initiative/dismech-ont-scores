window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025318"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025318",
  "term_label": "Ovarian carcinoma",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Ovarian High-Grade Serous Carcinoma",
      "disease_term_id": "MONDO:0005211",
      "source_file": "Ovarian_High-Grade_Serous_Carcinoma.yaml",
      "term_id": "HP:0025318",
      "term_label": "Ovarian carcinoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025318",
      "best_source_term_label": "Ovarian carcinoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025318"
      ],
      "supporting_source_term_labels": [
        "Ovarian carcinoma"
      ],
      "supporting_source_node_names": [
        "Ovarian Carcinoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hereditary Breast and Ovarian Cancer Syndrome",
      "disease_term_id": "MONDO:0011450",
      "source_file": "Hereditary_Breast_and_Ovarian_Cancer_Syndrome.yaml",
      "term_id": "HP:0025318",
      "term_label": "Ovarian carcinoma",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025318",
      "best_source_term_label": "Ovarian carcinoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025318"
      ],
      "supporting_source_term_labels": [
        "Ovarian carcinoma"
      ],
      "supporting_source_node_names": [
        "Ovarian Cancer"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025318" } }));
