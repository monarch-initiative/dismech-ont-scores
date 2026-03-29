window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030890"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030890",
  "term_label": "Hyperintensity of cerebral white matter on MRI",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.7048,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CADASIL Type 1",
      "disease_term_id": "MONDO:0007432",
      "source_file": "CADASIL_Type_1.yaml",
      "term_id": "HP:0030890",
      "term_label": "Hyperintensity of cerebral white matter on MRI",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0030890",
      "best_source_term_label": "Hyperintensity of cerebral white matter on MRI",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030890"
      ],
      "supporting_source_term_labels": [
        "Hyperintensity of cerebral white matter on MRI"
      ],
      "supporting_source_node_names": [
        "White Matter Hyperintensities"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Glutaryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0009281",
      "source_file": "Glutaryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0030890",
      "term_label": "Hyperintensity of cerebral white matter on MRI",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0030890",
      "best_source_term_label": "Hyperintensity of cerebral white matter on MRI",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030890"
      ],
      "supporting_source_term_labels": [
        "Hyperintensity of cerebral white matter on MRI"
      ],
      "supporting_source_node_names": [
        "Cerebral white matter hyperintensity on MRI"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030890" } }));
