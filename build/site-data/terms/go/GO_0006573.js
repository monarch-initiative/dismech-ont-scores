window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006573"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006573",
  "term_label": "valine metabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.269231,
  "mean_score": 0.269231,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Isobutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012648",
      "source_file": "Isobutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "GO:0006573",
      "term_label": "valine metabolic process",
      "score": 0.269231,
      "direct_score": 0.0,
      "propagated_score": 0.269231,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0006574",
      "best_source_term_label": "L-valine catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006573" } }));
