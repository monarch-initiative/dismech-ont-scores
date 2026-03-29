window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002220"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002220",
  "term_label": "innate immune response activating cell surface receptor signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.080282,
  "mean_score": 0.080282,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Very Long-Chain Acyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0008723",
      "source_file": "VLCAD_Deficiency.yaml",
      "term_id": "GO:0002220",
      "term_label": "innate immune response activating cell surface receptor signaling pathway",
      "score": 0.080282,
      "direct_score": 0.0,
      "propagated_score": 0.080282,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0034142",
      "best_source_term_label": "toll-like receptor 4 signaling pathway",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034142"
      ],
      "supporting_source_term_labels": [
        "toll-like receptor 4 signaling pathway"
      ],
      "supporting_source_node_names": [
        "Immunometabolic dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002220" } }));
