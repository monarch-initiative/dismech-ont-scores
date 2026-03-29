window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002301"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002301",
  "term_label": "type B synovial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "CL:0002301",
      "term_label": "type B synovial cell",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002301",
      "best_source_term_label": "type B synovial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002301"
      ],
      "supporting_source_term_labels": [
        "type B synovial cell"
      ],
      "supporting_source_node_names": [
        "PRG4/Lubricin Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002301" } }));
