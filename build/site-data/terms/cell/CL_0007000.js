window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0007000"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0007000",
  "term_label": "preameloblast",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.16,
  "mean_score": 0.16,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Junctional Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0017612",
      "source_file": "Junctional_Epidermolysis_Bullosa.yaml",
      "term_id": "CL:0007000",
      "term_label": "preameloblast",
      "score": 0.16,
      "direct_score": 0.0,
      "propagated_score": 0.16,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000059",
      "best_source_term_label": "ameloblast",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000059"
      ],
      "supporting_source_term_labels": [
        "ameloblast"
      ],
      "supporting_source_node_names": [
        "Enamel Hypoplasia from Ameloblast-BMZ Defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0007000" } }));
