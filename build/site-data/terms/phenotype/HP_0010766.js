window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010766"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010766",
  "term_label": "Ectopic calcification",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.586486,
  "mean_score": 0.482309,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CKD-Mineral Bone Disorder",
      "disease_term_id": "MONDO:0006946",
      "source_file": "CKD-Mineral_Bone_Disorder.yaml",
      "term_id": "HP:0010766",
      "term_label": "Ectopic calcification",
      "score": 0.586486,
      "direct_score": 0.0,
      "propagated_score": 0.71092,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0025520",
      "best_source_term_label": "Calcinosis cutis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003207",
        "HP:0025520"
      ],
      "supporting_source_term_labels": [
        "Arterial calcification",
        "Calcinosis cutis"
      ],
      "supporting_source_node_names": [
        "Calciphylaxis",
        "Vascular Calcification"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "HP:0010766",
      "term_label": "Ectopic calcification",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0430048",
      "best_source_term_label": "Intracranial calcification",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0430048"
      ],
      "supporting_source_term_labels": [
        "Intracranial calcification"
      ],
      "supporting_source_node_names": [
        "Intracranial Calcification"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Gorlin Syndrome",
      "disease_term_id": "MONDO:0007187",
      "source_file": "Gorlin_Syndrome.yaml",
      "term_id": "HP:0010766",
      "term_label": "Ectopic calcification",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005462",
      "best_source_term_label": "Calcification of falx cerebri",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005462"
      ],
      "supporting_source_term_labels": [
        "Calcification of falx cerebri"
      ],
      "supporting_source_node_names": [
        "Calcification of Falx Cerebri"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010766" } }));
