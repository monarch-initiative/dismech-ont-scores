window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000065"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000065",
  "term_label": "ependymal cell",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.584913,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "CL:0000065",
      "term_label": "ependymal cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000065",
      "best_source_term_label": "ependymal cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "Bacterial meningitis",
      "disease_term_id": "MONDO:0006670",
      "source_file": "Bacterial_meningitis.yaml",
      "term_id": "CL:0000065",
      "term_label": "ependymal cell",
      "score": 0.169826,
      "direct_score": 0.0,
      "propagated_score": 0.190909,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000706",
      "best_source_term_label": "choroid plexus epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000065" } }));
