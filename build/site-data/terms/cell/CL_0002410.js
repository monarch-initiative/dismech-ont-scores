window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002410"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002410",
  "term_label": "pancreatic stellate cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.82,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Chronic Pancreatitis",
      "disease_term_id": "MONDO:0005003",
      "source_file": "Chronic_Pancreatitis.yaml",
      "term_id": "CL:0002410",
      "term_label": "pancreatic stellate cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002410",
      "best_source_term_label": "pancreatic stellate cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002410"
      ],
      "supporting_source_term_labels": [
        "pancreatic stellate cell"
      ],
      "supporting_source_node_names": [
        "Pancreatic Fibrosis"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Pancreatic Ductal Adenocarcinoma",
      "disease_term_id": "MONDO:0005184",
      "source_file": "Pancreatic_Ductal_Adenocarcinoma.yaml",
      "term_id": "CL:0002410",
      "term_label": "pancreatic stellate cell",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002410",
      "best_source_term_label": "pancreatic stellate cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002410"
      ],
      "supporting_source_term_labels": [
        "pancreatic stellate cell"
      ],
      "supporting_source_node_names": [
        "Desmoplastic Stroma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002410" } }));
