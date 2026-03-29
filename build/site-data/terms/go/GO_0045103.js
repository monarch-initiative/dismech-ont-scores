window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0045103"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0045103",
  "term_label": "intermediate filament-based process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7756,
  "mean_score": 0.7756,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Epidermolysis Bullosa Simplex",
      "disease_term_id": "MONDO:0017610",
      "source_file": "Epidermolysis_Bullosa_Simplex.yaml",
      "term_id": "GO:0045103",
      "term_label": "intermediate filament-based process",
      "score": 0.7756,
      "direct_score": 0.0,
      "propagated_score": 0.7756,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0045104",
      "best_source_term_label": "intermediate filament cytoskeleton organization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045104",
        "GO:0045109"
      ],
      "supporting_source_term_labels": [
        "intermediate filament cytoskeleton organization",
        "intermediate filament organization"
      ],
      "supporting_source_node_names": [
        "Dominant-Negative Disruption of Filament Assembly",
        "KRT5/KRT14 Mutations Disrupt Keratin Intermediate Filament Network"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0045103" } }));
