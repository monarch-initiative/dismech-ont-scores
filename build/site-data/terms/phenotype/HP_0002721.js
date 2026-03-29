window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002721"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002721",
  "term_label": "Immunodeficiency",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.633622,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Wolf-Hirschhorn_Syndrome",
      "disease_term_id": "",
      "source_file": "Wolf-Hirschhorn_Syndrome.yaml",
      "term_id": "HP:0002721",
      "term_label": "Immunodeficiency",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0002721",
      "best_source_term_label": "Immunodeficiency",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002721"
      ],
      "supporting_source_term_labels": [
        "Immunodeficiency"
      ],
      "supporting_source_node_names": [
        "Immunodeficiency"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "HP:0002721",
      "term_label": "Immunodeficiency",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005387",
      "best_source_term_label": "Combined immunodeficiency",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005387"
      ],
      "supporting_source_term_labels": [
        "Combined immunodeficiency"
      ],
      "supporting_source_node_names": [
        "Combined immunodeficiency"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "HP:0002721",
      "term_label": "Immunodeficiency",
      "score": 0.323388,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005352",
      "best_source_term_label": "Severe T-cell immunodeficiency",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005352"
      ],
      "supporting_source_term_labels": [
        "Severe T-cell immunodeficiency"
      ],
      "supporting_source_node_names": [
        "T-cell immunodeficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002721" } }));
