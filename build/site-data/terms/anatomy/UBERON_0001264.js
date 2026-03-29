window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001264"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001264",
  "term_label": "pancreas",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.576325,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "UBERON:0001264",
      "term_label": "pancreas",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001264",
      "best_source_term_label": "pancreas",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001264"
      ],
      "supporting_source_term_labels": [
        "pancreas"
      ],
      "supporting_source_node_names": [
        "CF-Related Diabetes",
        "Exocrine Pancreatic Tissue Destruction",
        "Pancreatic Duct Obstruction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pancreatic Mucinous Cystadenoma",
      "disease_term_id": "MONDO:0018523",
      "source_file": "Pancreatic_Mucinous_Cystadenoma.yaml",
      "term_id": "UBERON:0001264",
      "term_label": "pancreas",
      "score": 0.584351,
      "direct_score": 0.0,
      "propagated_score": 0.75,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001151",
      "best_source_term_label": "tail of pancreas",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001150",
        "UBERON:0001151"
      ],
      "supporting_source_term_labels": [
        "body of pancreas",
        "tail of pancreas"
      ],
      "supporting_source_node_names": [
        "Mucinous Epithelial Proliferation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "UBERON:0001264",
      "term_label": "pancreas",
      "score": 0.526165,
      "direct_score": 0.526165,
      "propagated_score": 0.638357,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001264",
      "best_source_term_label": "pancreas",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000006",
        "UBERON:0001264"
      ],
      "supporting_source_term_labels": [
        "islet of Langerhans",
        "pancreas"
      ],
      "supporting_source_node_names": [
        "Pancreatogenic exocrine pancreatic insufficiency (T5DM/fibro-inflammatory overlap)"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Type I Diabetes",
      "disease_term_id": "MONDO:0005147",
      "source_file": "Type_I_Diabetes.yaml",
      "term_id": "UBERON:0001264",
      "term_label": "pancreas",
      "score": 0.194784,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000006",
      "best_source_term_label": "islet of Langerhans",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0000006"
      ],
      "supporting_source_term_labels": [
        "islet of Langerhans"
      ],
      "supporting_source_node_names": [
        "Autoimmune Destruction of Beta Cells"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001264" } }));
