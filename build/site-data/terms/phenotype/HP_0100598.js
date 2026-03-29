window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100598"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100598",
  "term_label": "Pulmonary edema",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.262144,
  "mean_score": 0.262144,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "HP:0100598",
      "term_label": "Pulmonary edema",
      "score": 0.262144,
      "direct_score": 0.262144,
      "propagated_score": 0.262144,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0100598",
      "best_source_term_label": "Pulmonary edema",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100598"
      ],
      "supporting_source_term_labels": [
        "Pulmonary edema"
      ],
      "supporting_source_node_names": [
        "Neurogenic pulmonary edema"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100598" } }));
