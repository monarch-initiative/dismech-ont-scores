window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030061"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030061",
  "term_label": "Neuroectodermal neoplasm",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.244097,
  "mean_score": 0.228841,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Neurofibromatosis Type 1",
      "disease_term_id": "MONDO:0018975",
      "source_file": "Neurofibromatosis_Type_1.yaml",
      "term_id": "HP:0030061",
      "term_label": "Neuroectodermal neoplasm",
      "score": 0.244097,
      "direct_score": 0.0,
      "propagated_score": 0.2744,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0009734",
      "best_source_term_label": "Optic nerve glioma",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009734"
      ],
      "supporting_source_term_labels": [
        "Optic nerve glioma"
      ],
      "supporting_source_node_names": [
        "Optic Pathway Glioma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Tuberous Sclerosis Complex",
      "disease_term_id": "MONDO:0001734",
      "source_file": "Tuberous_Sclerosis_Complex.yaml",
      "term_id": "HP:0030061",
      "term_label": "Neuroectodermal neoplasm",
      "score": 0.213585,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0009718",
      "best_source_term_label": "Subependymal giant-cell astrocytoma",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009718"
      ],
      "supporting_source_term_labels": [
        "Subependymal giant-cell astrocytoma"
      ],
      "supporting_source_node_names": [
        "Subependymal Giant Cell Astrocytoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030061" } }));
