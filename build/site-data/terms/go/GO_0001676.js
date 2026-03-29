window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001676"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001676",
  "term_label": "long-chain fatty acid metabolic process",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 0.4,
  "mean_score": 0.331397,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Carnitine Palmitoyltransferase II Deficiency",
      "disease_term_id": "MONDO:0015515",
      "source_file": "Carnitine_Palmitoyltransferase_II_Deficiency.yaml",
      "term_id": "GO:0001676",
      "term_label": "long-chain fatty acid metabolic process",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0001676",
      "best_source_term_label": "long-chain fatty acid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001676"
      ],
      "supporting_source_term_labels": [
        "long-chain fatty acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired mitochondrial long-chain fatty acid oxidation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "GO:0001676",
      "term_label": "long-chain fatty acid metabolic process",
      "score": 0.384985,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0019369",
      "best_source_term_label": "arachidonate metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019369"
      ],
      "supporting_source_term_labels": [
        "arachidonate metabolic process"
      ],
      "supporting_source_node_names": [
        "Arachidonic Acid Metabolism Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Mitochondrial Trifunctional Protein Deficiency",
      "disease_term_id": "MONDO:0012172",
      "source_file": "Mitochondrial_Trifunctional_Protein_Deficiency.yaml",
      "term_id": "GO:0001676",
      "term_label": "long-chain fatty acid metabolic process",
      "score": 0.209205,
      "direct_score": 0.209205,
      "propagated_score": 0.209205,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0001676",
      "best_source_term_label": "long-chain fatty acid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001676"
      ],
      "supporting_source_term_labels": [
        "long-chain fatty acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired mitochondrial long-chain fatty acid beta-oxidation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001676" } }));
