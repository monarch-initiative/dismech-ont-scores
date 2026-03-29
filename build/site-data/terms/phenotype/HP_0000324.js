window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000324"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000324",
  "term_label": "Facial asymmetry",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0000324",
      "term_label": "Facial asymmetry",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000324",
      "best_source_term_label": "Facial asymmetry",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000324"
      ],
      "supporting_source_term_labels": [
        "Facial asymmetry"
      ],
      "supporting_source_node_names": [
        "Facial Asymmetry"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Silent Sinus Syndrome",
      "disease_term_id": "MONDO:0019108",
      "source_file": "Silent_Sinus_Syndrome.yaml",
      "term_id": "HP:0000324",
      "term_label": "Facial asymmetry",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000324",
      "best_source_term_label": "Facial asymmetry",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000324"
      ],
      "supporting_source_term_labels": [
        "Facial asymmetry"
      ],
      "supporting_source_node_names": [
        "Facial Asymmetry"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000324" } }));
