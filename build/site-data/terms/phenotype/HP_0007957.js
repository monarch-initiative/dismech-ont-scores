window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0007957"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0007957",
  "term_label": "Corneal opacity",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.51997,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Mucopolysaccharidosis",
      "disease_term_id": "MONDO:0019249",
      "source_file": "Mucopolysaccharidosis.yaml",
      "term_id": "HP:0007957",
      "term_label": "Corneal opacity",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0007957",
      "best_source_term_label": "Corneal opacity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007957"
      ],
      "supporting_source_term_labels": [
        "Corneal opacity"
      ],
      "supporting_source_node_names": [
        "Corneal Clouding"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "HP:0007957",
      "term_label": "Corneal opacity",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0200032",
      "best_source_term_label": "Kayser-Fleischer ring",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0200032"
      ],
      "supporting_source_term_labels": [
        "Kayser-Fleischer ring"
      ],
      "supporting_source_node_names": [
        "Kayser-Fleischer Rings"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0007957",
      "term_label": "Corneal opacity",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001084",
      "best_source_term_label": "Corneal arcus",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001084"
      ],
      "supporting_source_term_labels": [
        "Corneal arcus"
      ],
      "supporting_source_node_names": [
        "Corneal Arcus"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "HP:0007957",
      "term_label": "Corneal opacity",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001084",
      "best_source_term_label": "Corneal arcus",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001084"
      ],
      "supporting_source_term_labels": [
        "Corneal arcus"
      ],
      "supporting_source_node_names": [
        "Corneal Arcus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0007957" } }));
