window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002080"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002080",
  "term_label": "Intention tremor",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "L-2-Hydroxyglutaric Aciduria",
      "disease_term_id": "MONDO:0009370",
      "source_file": "L-2-Hydroxyglutaric_Aciduria.yaml",
      "term_id": "HP:0002080",
      "term_label": "Intention tremor",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0002080",
      "best_source_term_label": "Intention tremor",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002080"
      ],
      "supporting_source_term_labels": [
        "Intention tremor"
      ],
      "supporting_source_node_names": [
        "Intention tremor"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002080" } }));
