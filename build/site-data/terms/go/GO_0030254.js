window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030254"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030254",
  "term_label": "protein secretion by the type III secretion system",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.571429,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Campylobacteriosis",
      "disease_term_id": "MONDO:0005688",
      "source_file": "Campylobacteriosis.yaml",
      "term_id": "GO:0030254",
      "term_label": "protein secretion by the type III secretion system",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030254",
      "best_source_term_label": "protein secretion by the type III secretion system",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030254"
      ],
      "supporting_source_term_labels": [
        "protein secretion by the type III secretion system"
      ],
      "supporting_source_node_names": [
        "Type III/VI secretion-dependent invasion signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0030254",
      "term_label": "protein secretion by the type III secretion system",
      "score": 0.142857,
      "direct_score": 0.142857,
      "propagated_score": 0.142857,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030254",
      "best_source_term_label": "protein secretion by the type III secretion system",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030254"
      ],
      "supporting_source_term_labels": [
        "protein secretion by the type III secretion system"
      ],
      "supporting_source_node_names": [
        "Type III secretion system-mediated invasion and vacuolar escape"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030254" } }));
