window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006835"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006835",
  "term_label": "dicarboxylic acid transport",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.391402,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Gilbert's Syndrome",
      "disease_term_id": "MONDO:0007745",
      "source_file": "Gilberts_Syndrome.yaml",
      "term_id": "GO:0006835",
      "term_label": "dicarboxylic acid transport",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0015723",
      "best_source_term_label": "bilirubin transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015723"
      ],
      "supporting_source_term_labels": [
        "bilirubin transport"
      ],
      "supporting_source_node_names": [
        "Fasting- and Stress-Induced Bilirubin Elevation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Citrin Deficiency",
      "disease_term_id": "MONDO:0016602",
      "source_file": "Citrin_Deficiency.yaml",
      "term_id": "GO:0006835",
      "term_label": "dicarboxylic acid transport",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0015810",
      "best_source_term_label": "aspartate transmembrane transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015810"
      ],
      "supporting_source_term_labels": [
        "aspartate transmembrane transport"
      ],
      "supporting_source_node_names": [
        "Aspartate and glutamate transmembrane transport disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CACNA1A-Related Disorder",
      "disease_term_id": "MONDO:0100254",
      "source_file": "CACNA1A_Related_Disorder.yaml",
      "term_id": "GO:0006835",
      "term_label": "dicarboxylic acid transport",
      "score": 0.192493,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0014047",
      "best_source_term_label": "glutamate secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0014047"
      ],
      "supporting_source_term_labels": [
        "glutamate secretion"
      ],
      "supporting_source_node_names": [
        "Cortical Spreading Depression in FHM1"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006835" } }));
