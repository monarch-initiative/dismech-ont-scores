window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0040223"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0040223",
  "term_label": "Pulmonary hemorrhage",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.711348,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Leptospirosis",
      "disease_term_id": "MONDO:0005825",
      "source_file": "Leptospirosis.yaml",
      "term_id": "HP:0040223",
      "term_label": "Pulmonary hemorrhage",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0040223",
      "best_source_term_label": "Pulmonary hemorrhage",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0040223"
      ],
      "supporting_source_term_labels": [
        "Pulmonary hemorrhage"
      ],
      "supporting_source_node_names": [
        "Pulmonary hemorrhage"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "HP:0040223",
      "term_label": "Pulmonary hemorrhage",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0025420",
      "best_source_term_label": "Diffuse alveolar hemorrhage",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025420"
      ],
      "supporting_source_term_labels": [
        "Diffuse alveolar hemorrhage"
      ],
      "supporting_source_node_names": [
        "Diffuse alveolar hemorrhage"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0040223" } }));
