window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:4000054"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:4000054",
  "term_label": "Exanthem",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Wissler syndrome",
      "disease_term_id": "MONDO:0006018",
      "source_file": "Wissler_syndrome.yaml",
      "term_id": "HP:4000054",
      "term_label": "Exanthem",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:4000054",
      "best_source_term_label": "Exanthem",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:4000054"
      ],
      "supporting_source_term_labels": [
        "Exanthem"
      ],
      "supporting_source_node_names": [
        "Exanthem"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "HP:4000054",
      "term_label": "Exanthem",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0040186",
      "best_source_term_label": "Maculopapular exanthema",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0040186"
      ],
      "supporting_source_term_labels": [
        "Maculopapular exanthema"
      ],
      "supporting_source_node_names": [
        "Maculopapular exanthem"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:4000054" } }));
