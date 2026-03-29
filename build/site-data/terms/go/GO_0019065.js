window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019065"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019065",
  "term_label": "receptor-mediated endocytosis of virus by host cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.694444,
  "mean_score": 0.694444,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "GO:0019065",
      "term_label": "receptor-mediated endocytosis of virus by host cell",
      "score": 0.694444,
      "direct_score": 0.694444,
      "propagated_score": 0.694444,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0019065",
      "best_source_term_label": "receptor-mediated endocytosis of virus by host cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019065"
      ],
      "supporting_source_term_labels": [
        "receptor-mediated endocytosis of virus by host cell"
      ],
      "supporting_source_node_names": [
        "Receptor-mediated viral entry and endosomal uncoating"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019065" } }));
