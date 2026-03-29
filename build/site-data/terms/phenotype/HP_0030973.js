window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030973"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030973",
  "term_label": "Postexertional symptom exacerbation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "HP:0030973",
      "term_label": "Postexertional symptom exacerbation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0030973",
      "best_source_term_label": "Postexertional symptom exacerbation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030973"
      ],
      "supporting_source_term_labels": [
        "Postexertional symptom exacerbation"
      ],
      "supporting_source_node_names": [
        "Post-exertional Malaise"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome",
      "disease_term_id": "MONDO:0005404",
      "source_file": "Myalgic_Encephalomyelitis_Chronic_Fatigue_Syndrome.yaml",
      "term_id": "HP:0030973",
      "term_label": "Postexertional symptom exacerbation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0030973",
      "best_source_term_label": "Postexertional symptom exacerbation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030973"
      ],
      "supporting_source_term_labels": [
        "Postexertional symptom exacerbation"
      ],
      "supporting_source_node_names": [
        "Post-Exertional Malaise"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030973" } }));
