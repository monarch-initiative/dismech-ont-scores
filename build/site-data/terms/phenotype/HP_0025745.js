window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025745"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025745",
  "term_label": "Abnormal urine amino acid level",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.2401,
  "mean_score": 0.2401,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Inherited Threoninemia",
      "disease_term_id": "MONDO:0010118",
      "source_file": "Inherited_Threoninemia.yaml",
      "term_id": "HP:0025745",
      "term_label": "Abnormal urine amino acid level",
      "score": 0.2401,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003296",
      "best_source_term_label": "Hyperthreoninuria",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003296"
      ],
      "supporting_source_term_labels": [
        "Hyperthreoninuria"
      ],
      "supporting_source_node_names": [
        "Hyperthreoninuria"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025745" } }));
