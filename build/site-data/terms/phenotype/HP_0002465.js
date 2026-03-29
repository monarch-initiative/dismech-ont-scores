window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002465"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002465",
  "term_label": "Poor speech",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.262144,
  "mean_score": 0.262144,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Angelman Syndrome",
      "disease_term_id": "MONDO:0007113",
      "source_file": "Angelman_Syndrome.yaml",
      "term_id": "HP:0002465",
      "term_label": "Poor speech",
      "score": 0.262144,
      "direct_score": 0.262144,
      "propagated_score": 0.262144,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0002465",
      "best_source_term_label": "Poor speech",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002465"
      ],
      "supporting_source_term_labels": [
        "Poor speech"
      ],
      "supporting_source_node_names": [
        "Severe speech impairment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002465" } }));
