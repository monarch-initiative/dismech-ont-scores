window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0016236"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0016236",
  "term_label": "macroautophagy",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.599631,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Danon disease",
      "disease_term_id": "MONDO:0010281",
      "source_file": "Danon_disease.yaml",
      "term_id": "GO:0016236",
      "term_label": "macroautophagy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0016236",
      "best_source_term_label": "macroautophagy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000423",
        "GO:0016236",
        "GO:0097352"
      ],
      "supporting_source_term_labels": [
        "autophagosome maturation",
        "macroautophagy",
        "mitophagy"
      ],
      "supporting_source_node_names": [
        "Autophagic vacuole accumulation",
        "Impaired autophagosome-lysosome fusion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "GO:0016236",
      "term_label": "macroautophagy",
      "score": 0.199263,
      "direct_score": 0.0,
      "propagated_score": 0.224,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0000423",
      "best_source_term_label": "mitophagy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000423"
      ],
      "supporting_source_term_labels": [
        "mitophagy"
      ],
      "supporting_source_node_names": [
        "Hepatocyte Injury"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0016236" } }));
