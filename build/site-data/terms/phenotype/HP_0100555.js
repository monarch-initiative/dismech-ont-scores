window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100555"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100555",
  "term_label": "Asymmetric growth",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.859159,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0100555",
      "term_label": "Asymmetric growth",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0100555",
      "best_source_term_label": "Asymmetric growth",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001528",
        "HP:0100555",
        "HP:0100559"
      ],
      "supporting_source_term_labels": [
        "Asymmetric growth",
        "Hemihypertrophy",
        "Lower limb asymmetry"
      ],
      "supporting_source_node_names": [
        "Asymmetric Growth"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Proteus syndrome",
      "disease_term_id": "MONDO:0008318",
      "source_file": "Proteus_syndrome.yaml",
      "term_id": "HP:0100555",
      "term_label": "Asymmetric growth",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0100555",
      "best_source_term_label": "Asymmetric growth",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100555"
      ],
      "supporting_source_term_labels": [
        "Asymmetric growth"
      ],
      "supporting_source_node_names": [
        "Asymmetric growth"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Wilms Tumor",
      "disease_term_id": "MONDO:0006058",
      "source_file": "Wilms_Tumor.yaml",
      "term_id": "HP:0100555",
      "term_label": "Asymmetric growth",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001528",
      "best_source_term_label": "Hemihypertrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001528"
      ],
      "supporting_source_term_labels": [
        "Hemihypertrophy"
      ],
      "supporting_source_node_names": [
        "Hemihypertrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100555" } }));
