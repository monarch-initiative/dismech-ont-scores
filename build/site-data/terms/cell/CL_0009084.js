window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0009084"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0009084",
  "term_label": "glandular epithelial cell of endometrium",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "CL:0009084",
      "term_label": "glandular epithelial cell of endometrium",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0002656",
      "best_source_term_label": "glandular endometrial unciliated epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0009084" } }));
