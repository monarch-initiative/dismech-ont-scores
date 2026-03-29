window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000064"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000064",
  "term_label": "ciliated cell",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.207134,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "CL:0000064",
      "term_label": "ciliated cell",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000065",
      "best_source_term_label": "ependymal cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000065"
      ],
      "supporting_source_term_labels": [
        "ependymal cell"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Bronchiectasis",
      "disease_term_id": "MONDO:0004822",
      "source_file": "Bronchiectasis.yaml",
      "term_id": "CL:0000064",
      "term_label": "ciliated cell",
      "score": 0.139995,
      "direct_score": 0.0,
      "propagated_score": 0.169697,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000067",
      "best_source_term_label": "ciliated epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000067"
      ],
      "supporting_source_term_labels": [
        "ciliated epithelial cell"
      ],
      "supporting_source_node_names": [
        "Impaired Mucociliary Clearance"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Bacterial meningitis",
      "disease_term_id": "MONDO:0006670",
      "source_file": "Bacterial_meningitis.yaml",
      "term_id": "CL:0000064",
      "term_label": "ciliated cell",
      "score": 0.077172,
      "direct_score": 0.0,
      "propagated_score": 0.093545,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000706",
      "best_source_term_label": "choroid plexus epithelial cell",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000706"
      ],
      "supporting_source_term_labels": [
        "choroid plexus epithelial cell"
      ],
      "supporting_source_node_names": [
        "Bacterial Invasion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000064" } }));
