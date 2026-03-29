window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048645"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048645",
  "term_label": "animal organ formation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.1225,
  "mean_score": 0.1225,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0048645",
      "term_label": "animal organ formation",
      "score": 0.1225,
      "direct_score": 0.0,
      "propagated_score": 0.1225,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0003147",
      "best_source_term_label": "neural crest cell migration involved in heart formation",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0003147"
      ],
      "supporting_source_term_labels": [
        "neural crest cell migration involved in heart formation"
      ],
      "supporting_source_node_names": [
        "Neural crest developmental dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048645" } }));
