window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000016"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000016",
  "term_label": "endocrine pancreas",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.444784,
  "mean_score": 0.433018,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Type I Diabetes",
      "disease_term_id": "MONDO:0005147",
      "source_file": "Type_I_Diabetes.yaml",
      "term_id": "UBERON:0000016",
      "term_label": "endocrine pancreas",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000006",
      "best_source_term_label": "islet of Langerhans",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000006"
      ],
      "supporting_source_term_labels": [
        "islet of Langerhans"
      ],
      "supporting_source_node_names": [
        "Autoimmune Destruction of Beta Cells"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "UBERON:0000016",
      "term_label": "endocrine pancreas",
      "score": 0.421253,
      "direct_score": 0.0,
      "propagated_score": 0.473549,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000006",
      "best_source_term_label": "islet of Langerhans",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000006"
      ],
      "supporting_source_term_labels": [
        "islet of Langerhans"
      ],
      "supporting_source_node_names": [
        "Autoimmune pancreatic beta-cell destruction",
        "Pancreatogenic endocrine hormone loss (T5DM/fibro-inflammatory overlap)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000016" } }));
