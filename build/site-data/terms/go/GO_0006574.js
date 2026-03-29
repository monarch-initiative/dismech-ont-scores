window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006574"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006574",
  "term_label": "L-valine catabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.384615,
  "mean_score": 0.384615,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Isobutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012648",
      "source_file": "Isobutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "GO:0006574",
      "term_label": "L-valine catabolic process",
      "score": 0.384615,
      "direct_score": 0.384615,
      "propagated_score": 0.384615,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006574",
      "best_source_term_label": "L-valine catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006574"
      ],
      "supporting_source_term_labels": [
        "L-valine catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired mitochondrial valine catabolism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006574" } }));
