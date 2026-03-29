window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002255"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002255",
  "term_label": "stromal cell of endometrium",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Endometriosis",
      "disease_term_id": "MONDO:0005133",
      "source_file": "Endometriosis.yaml",
      "term_id": "CL:0002255",
      "term_label": "stromal cell of endometrium",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002255",
      "best_source_term_label": "stromal cell of endometrium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002255"
      ],
      "supporting_source_term_labels": [
        "stromal cell of endometrium"
      ],
      "supporting_source_node_names": [
        "Ectopic Endometrial Tissue"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002255" } }));
