window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010786"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010786",
  "term_label": "Urinary tract neoplasm",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.336781,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Clear Cell Renal Cell Carcinoma",
      "disease_term_id": "MONDO:0005005",
      "source_file": "Clear_Cell_Renal_Cell_Carcinoma.yaml",
      "term_id": "HP:0010786",
      "term_label": "Urinary tract neoplasm",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009726",
      "best_source_term_label": "Renal neoplasm",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009726"
      ],
      "supporting_source_term_labels": [
        "Renal neoplasm"
      ],
      "supporting_source_node_names": [
        "Renal Mass"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0010786",
      "term_label": "Urinary tract neoplasm",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002667",
      "best_source_term_label": "Nephroblastoma",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002667"
      ],
      "supporting_source_term_labels": [
        "Nephroblastoma"
      ],
      "supporting_source_node_names": [
        "Nephroblastoma (Wilms Tumor)"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Tuberous Sclerosis Complex",
      "disease_term_id": "MONDO:0001734",
      "source_file": "Tuberous_Sclerosis_Complex.yaml",
      "term_id": "HP:0010786",
      "term_label": "Urinary tract neoplasm",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0006772",
      "best_source_term_label": "Renal angiomyolipoma",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006772"
      ],
      "supporting_source_term_labels": [
        "Renal angiomyolipoma"
      ],
      "supporting_source_node_names": [
        "Renal Angiomyolipoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "HP:0010786",
      "term_label": "Urinary tract neoplasm",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0006770",
      "best_source_term_label": "Clear cell renal cell carcinoma",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006770"
      ],
      "supporting_source_term_labels": [
        "Clear cell renal cell carcinoma"
      ],
      "supporting_source_node_names": [
        "Clear Cell Renal Cell Carcinoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010786" } }));
