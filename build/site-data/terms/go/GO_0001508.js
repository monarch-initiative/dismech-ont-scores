window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001508"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001508",
  "term_label": "action potential",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Atrial Fibrillation",
      "disease_term_id": "MONDO:0004981",
      "source_file": "Atrial_Fibrillation.yaml",
      "term_id": "GO:0001508",
      "term_label": "action potential",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0086001",
      "best_source_term_label": "cardiac muscle cell action potential",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0086001"
      ],
      "supporting_source_term_labels": [
        "cardiac muscle cell action potential"
      ],
      "supporting_source_node_names": [
        "Atrial Electrical Remodeling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dravet_syndrome",
      "disease_term_id": "MONDO:0100135",
      "source_file": "Dravet_syndrome.yaml",
      "term_id": "GO:0001508",
      "term_label": "action potential",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0019228",
      "best_source_term_label": "neuronal action potential",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019228"
      ],
      "supporting_source_term_labels": [
        "neuronal action potential"
      ],
      "supporting_source_node_names": [
        "SCN1A Gene Mutation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001508" } }));
