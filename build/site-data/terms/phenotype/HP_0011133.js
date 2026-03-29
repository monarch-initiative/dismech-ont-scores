window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011133"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011133",
  "term_label": "Increased sensitivity to ionizing radiation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "HP:0011133",
      "term_label": "Increased sensitivity to ionizing radiation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0011133",
      "best_source_term_label": "Increased sensitivity to ionizing radiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011133"
      ],
      "supporting_source_term_labels": [
        "Increased sensitivity to ionizing radiation"
      ],
      "supporting_source_node_names": [
        "Increased sensitivity to ionizing radiation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011133" } }));
