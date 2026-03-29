window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0065002"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0065002",
  "term_label": "intracellular protein transmembrane transport",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "GO:0065002",
      "term_label": "intracellular protein transmembrane transport",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0016558",
      "best_source_term_label": "protein import into peroxisome matrix",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0016558"
      ],
      "supporting_source_term_labels": [
        "protein import into peroxisome matrix"
      ],
      "supporting_source_node_names": [
        "Impaired Peroxisome Biogenesis and Import"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0065002" } }));
