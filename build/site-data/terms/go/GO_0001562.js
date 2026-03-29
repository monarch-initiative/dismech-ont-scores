window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001562"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001562",
  "term_label": "response to protozoan",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.269231,
  "mean_score": 0.269231,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Dientamoebiasis",
      "disease_term_id": "MONDO:0024608",
      "source_file": "Dientamoebiasis.yaml",
      "term_id": "GO:0001562",
      "term_label": "response to protozoan",
      "score": 0.269231,
      "direct_score": 0.0,
      "propagated_score": 0.269231,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0042832",
      "best_source_term_label": "defense response to protozoan",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042832"
      ],
      "supporting_source_term_labels": [
        "defense response to protozoan"
      ],
      "supporting_source_node_names": [
        "Mucosal inflammatory response"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001562" } }));
