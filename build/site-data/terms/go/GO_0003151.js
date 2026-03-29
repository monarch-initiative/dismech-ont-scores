window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003151"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003151",
  "term_label": "outflow tract morphogenesis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5625,
  "mean_score": 0.5625,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "GO:0003151",
      "term_label": "outflow tract morphogenesis",
      "score": 0.5625,
      "direct_score": 0.5,
      "propagated_score": 0.5625,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0003151",
      "best_source_term_label": "outflow tract morphogenesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003151",
        "GO:0003253"
      ],
      "supporting_source_term_labels": [
        "cardiac neural crest cell migration involved in outflow tract morphogenesis",
        "outflow tract morphogenesis"
      ],
      "supporting_source_node_names": [
        "Cardiac neural crest migration defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003151" } }));
