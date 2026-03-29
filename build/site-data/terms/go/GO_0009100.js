window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009100"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009100",
  "term_label": "glycoprotein metabolic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.463909,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Beta Mannosidosis",
      "disease_term_id": "MONDO:0009562",
      "source_file": "Beta_Mannosidosis.yaml",
      "term_id": "GO:0009100",
      "term_label": "glycoprotein metabolic process",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006516",
      "best_source_term_label": "glycoprotein catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006516"
      ],
      "supporting_source_term_labels": [
        "glycoprotein catabolic process"
      ],
      "supporting_source_node_names": [
        "Beta-mannosidase deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dystroglycanopathy",
      "disease_term_id": "MONDO:0018276",
      "source_file": "Dystroglycanopathy.yaml",
      "term_id": "GO:0009100",
      "term_label": "glycoprotein metabolic process",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0035269",
      "best_source_term_label": "protein O-linked glycosylation via mannose",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035269"
      ],
      "supporting_source_term_labels": [
        "protein O-linked glycosylation via mannose"
      ],
      "supporting_source_node_names": [
        "Defective alpha-dystroglycan O-mannosyl glycosylation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009100" } }));
