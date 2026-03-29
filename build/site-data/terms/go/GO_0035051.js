window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035051"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035051",
  "term_label": "cardiocyte differentiation",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.077837,
  "mean_score": 0.066161,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0035051",
      "term_label": "cardiocyte differentiation",
      "score": 0.077837,
      "direct_score": 0.0,
      "propagated_score": 0.0875,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0003147",
      "best_source_term_label": "neural crest cell migration involved in heart formation",
      "best_source_path_score": 0.175,
      "best_source_path": "part_of > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0003147"
      ],
      "supporting_source_term_labels": [
        "neural crest cell migration involved in heart formation"
      ],
      "supporting_source_node_names": [
        "Neural crest developmental dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "GO:0035051",
      "term_label": "cardiocyte differentiation",
      "score": 0.054486,
      "direct_score": 0.0,
      "propagated_score": 0.06125,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0003253",
      "best_source_term_label": "cardiac neural crest cell migration involved in outflow tract morphogenesis",
      "best_source_path_score": 0.1225,
      "best_source_path": "part_of > is_a > part_of > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0003253"
      ],
      "supporting_source_term_labels": [
        "cardiac neural crest cell migration involved in outflow tract morphogenesis"
      ],
      "supporting_source_node_names": [
        "Cardiac neural crest migration defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035051" } }));
