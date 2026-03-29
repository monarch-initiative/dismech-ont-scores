window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006098"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006098",
  "term_label": "pentose-phosphate shunt",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "GO:0006098",
      "term_label": "pentose-phosphate shunt",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006098",
      "best_source_term_label": "pentose-phosphate shunt",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006098"
      ],
      "supporting_source_term_labels": [
        "pentose-phosphate shunt"
      ],
      "supporting_source_node_names": [
        "Decreased G6PD Enzyme Activity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Non-Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0005233",
      "source_file": "Non-Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0006098",
      "term_label": "pentose-phosphate shunt",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006098",
      "best_source_term_label": "pentose-phosphate shunt",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006098"
      ],
      "supporting_source_term_labels": [
        "pentose-phosphate shunt"
      ],
      "supporting_source_node_names": [
        "Metabolic Rewiring"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006098" } }));
