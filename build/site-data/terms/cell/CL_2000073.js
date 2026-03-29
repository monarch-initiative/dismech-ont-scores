window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:2000073"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:2000073",
  "term_label": "migratory cardiac neural crest cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "CL:2000073",
      "term_label": "migratory cardiac neural crest cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:2000073",
      "best_source_term_label": "migratory cardiac neural crest cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:2000073"
      ],
      "supporting_source_term_labels": [
        "migratory cardiac neural crest cell"
      ],
      "supporting_source_node_names": [
        "Cardiac neural crest migration defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:2000073" } }));
