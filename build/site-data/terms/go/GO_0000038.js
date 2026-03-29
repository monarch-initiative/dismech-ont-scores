window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0000038"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0000038",
  "term_label": "very long-chain fatty acid metabolic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.642857,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "GO:0000038",
      "term_label": "very long-chain fatty acid metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0000038",
      "best_source_term_label": "very long-chain fatty acid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000038"
      ],
      "supporting_source_term_labels": [
        "very long-chain fatty acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Accumulation of Toxic Metabolites"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Very Long-Chain Acyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0008723",
      "source_file": "VLCAD_Deficiency.yaml",
      "term_id": "GO:0000038",
      "term_label": "very long-chain fatty acid metabolic process",
      "score": 0.285714,
      "direct_score": 0.285714,
      "propagated_score": 0.285714,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0000038",
      "best_source_term_label": "very long-chain fatty acid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000038"
      ],
      "supporting_source_term_labels": [
        "very long-chain fatty acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired very-long-chain fatty acid beta-oxidation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0000038" } }));
