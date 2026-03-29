window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030323"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030323",
  "term_label": "respiratory tube development",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.444784,
  "mean_score": 0.339765,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Thanatophoric Dysplasia Type 1",
      "disease_term_id": "MONDO:0008546",
      "source_file": "Thanatophoric_Dysplasia_Type_1.yaml",
      "term_id": "GO:0030323",
      "term_label": "respiratory tube development",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0030324",
      "best_source_term_label": "lung development",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0030324"
      ],
      "supporting_source_term_labels": [
        "lung development"
      ],
      "supporting_source_node_names": [
        "Pulmonary hypoplasia"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "GO:0030323",
      "term_label": "respiratory tube development",
      "score": 0.234747,
      "direct_score": 0.0,
      "propagated_score": 0.263889,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0030324",
      "best_source_term_label": "lung development",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0030324",
        "GO:0060461"
      ],
      "supporting_source_term_labels": [
        "lung development",
        "right lung morphogenesis"
      ],
      "supporting_source_node_names": [
        "Embryologic developmental disruption",
        "Right lung hypoplasia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030323" } }));
