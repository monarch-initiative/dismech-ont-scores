window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006549"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006549",
  "term_label": "isoleucine metabolic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.467023,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "2-Methylbutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012392",
      "source_file": "2-Methylbutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "GO:0006549",
      "term_label": "isoleucine metabolic process",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006550",
      "best_source_term_label": "L-isoleucine catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006550"
      ],
      "supporting_source_term_labels": [
        "L-isoleucine catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired isoleucine catabolism via SBCAD loss-of-function",
        "Metabolic rerouting via the R-pathway of isoleucine oxidation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Beta-Ketothiolase Deficiency",
      "disease_term_id": "MONDO:0008760",
      "source_file": "Beta-Ketothiolase_Deficiency.yaml",
      "term_id": "GO:0006549",
      "term_label": "isoleucine metabolic process",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006550",
      "best_source_term_label": "L-isoleucine catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006550"
      ],
      "supporting_source_term_labels": [
        "L-isoleucine catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired isoleucine catabolism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006549" } }));
