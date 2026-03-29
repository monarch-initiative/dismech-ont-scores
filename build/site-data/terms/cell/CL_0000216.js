window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000216"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000216",
  "term_label": "Sertoli cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.2,
  "mean_score": 0.2,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "CL:0000216",
      "term_label": "Sertoli cell",
      "score": 0.2,
      "direct_score": 0.2,
      "propagated_score": 0.2,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000216",
      "best_source_term_label": "Sertoli cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000216"
      ],
      "supporting_source_term_labels": [
        "Sertoli cell"
      ],
      "supporting_source_node_names": [
        "Testicular Microenvironment Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000216" } }));
