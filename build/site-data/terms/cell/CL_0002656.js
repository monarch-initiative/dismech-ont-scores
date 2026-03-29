window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002656"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002656",
  "term_label": "glandular endometrial unciliated epithelial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "CL:0002656",
      "term_label": "glandular endometrial unciliated epithelial cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002656",
      "best_source_term_label": "glandular endometrial unciliated epithelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002656"
      ],
      "supporting_source_term_labels": [
        "glandular endometrial unciliated epithelial cell"
      ],
      "supporting_source_node_names": [
        "Accelerated Tumor Development",
        "DNA Mismatch Repair Deficiency",
        "Microsatellite Instability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002656" } }));
