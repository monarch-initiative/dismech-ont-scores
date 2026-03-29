window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002900"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002900",
  "term_label": "Hypokalemia",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.398089,
  "mean_score": 0.398089,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "HP:0002900",
      "term_label": "Hypokalemia",
      "score": 0.398089,
      "direct_score": 0.398089,
      "propagated_score": 0.398089,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0002900",
      "best_source_term_label": "Hypokalemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002900"
      ],
      "supporting_source_term_labels": [
        "Hypokalemia"
      ],
      "supporting_source_node_names": [
        "Hypokalemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002900" } }));
