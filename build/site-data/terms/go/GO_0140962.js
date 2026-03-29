window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0140962"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0140962",
  "term_label": "multicellular organismal-level chemical homeostasis",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.270072,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glaucoma",
      "disease_term_id": "MONDO:0005041",
      "source_file": "Glaucoma.yaml",
      "term_id": "GO:0140962",
      "term_label": "multicellular organismal-level chemical homeostasis",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050891",
      "best_source_term_label": "multicellular organismal-level water homeostasis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050891"
      ],
      "supporting_source_term_labels": [
        "multicellular organismal-level water homeostasis"
      ],
      "supporting_source_node_names": [
        "Elevated Intraocular Pressure"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Meniere's Disease",
      "disease_term_id": "MONDO:0007972",
      "source_file": "Menieres_Disease.yaml",
      "term_id": "GO:0140962",
      "term_label": "multicellular organismal-level chemical homeostasis",
      "score": 0.192493,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050891",
      "best_source_term_label": "multicellular organismal-level water homeostasis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050891"
      ],
      "supporting_source_term_labels": [
        "multicellular organismal-level water homeostasis"
      ],
      "supporting_source_node_names": [
        "Ion Transport Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0140962",
      "term_label": "multicellular organismal-level chemical homeostasis",
      "score": 0.040244,
      "direct_score": 0.0,
      "propagated_score": 0.048782,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0070295",
      "best_source_term_label": "renal water absorption",
      "best_source_path_score": 0.1715,
      "best_source_path": "is_a > part_of > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0070295"
      ],
      "supporting_source_term_labels": [
        "renal water absorption"
      ],
      "supporting_source_node_names": [
        "Impaired Tubular Reabsorption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0140962" } }));
