window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1001433"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1001433",
  "term_label": "epithelial cell of exocrine pancreas",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.413772,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Pancreatic Ductal Adenocarcinoma",
      "disease_term_id": "MONDO:0005184",
      "source_file": "Pancreatic_Ductal_Adenocarcinoma.yaml",
      "term_id": "CL:1001433",
      "term_label": "epithelial cell of exocrine pancreas",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002079",
      "best_source_term_label": "pancreatic ductal cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002079"
      ],
      "supporting_source_term_labels": [
        "pancreatic ductal cell"
      ],
      "supporting_source_node_names": [
        "KRAS Oncogene Activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Pancreatic Mucinous Cystadenoma",
      "disease_term_id": "MONDO:0018523",
      "source_file": "Pancreatic_Mucinous_Cystadenoma.yaml",
      "term_id": "CL:1001433",
      "term_label": "epithelial cell of exocrine pancreas",
      "score": 0.436315,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002079",
      "best_source_term_label": "pancreatic ductal cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002079"
      ],
      "supporting_source_term_labels": [
        "pancreatic ductal cell"
      ],
      "supporting_source_node_names": [
        "Mucinous Epithelial Proliferation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Chronic Pancreatitis",
      "disease_term_id": "MONDO:0005003",
      "source_file": "Chronic_Pancreatitis.yaml",
      "term_id": "CL:1001433",
      "term_label": "epithelial cell of exocrine pancreas",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002064",
      "best_source_term_label": "pancreatic acinar cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002064"
      ],
      "supporting_source_term_labels": [
        "pancreatic acinar cell"
      ],
      "supporting_source_node_names": [
        "Recurrent Acinar Cell Injury"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "CL:1001433",
      "term_label": "epithelial cell of exocrine pancreas",
      "score": 0.291603,
      "direct_score": 0.0,
      "propagated_score": 0.374265,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002079",
      "best_source_term_label": "pancreatic ductal cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002064",
        "CL:0002079"
      ],
      "supporting_source_term_labels": [
        "pancreatic acinar cell",
        "pancreatic ductal cell"
      ],
      "supporting_source_node_names": [
        "Exocrine Pancreatic Tissue Destruction",
        "Pancreatic Duct Obstruction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1001433" } }));
