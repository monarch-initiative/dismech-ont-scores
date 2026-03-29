window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048193"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048193",
  "term_label": "Golgi vesicle transport",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.311349,
  "mean_score": 0.270141,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0048193",
      "term_label": "Golgi vesicle transport",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006890",
      "best_source_term_label": "retrograde vesicle-mediated transport, Golgi to endoplasmic reticulum",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006890"
      ],
      "supporting_source_term_labels": [
        "retrograde vesicle-mediated transport, Golgi to endoplasmic reticulum"
      ],
      "supporting_source_node_names": [
        "Cholera Toxin Binding and Uptake"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0048193",
      "term_label": "Golgi vesicle transport",
      "score": 0.228933,
      "direct_score": 0.0,
      "propagated_score": 0.257353,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006888",
      "best_source_term_label": "endoplasmic reticulum to Golgi vesicle-mediated transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006888"
      ],
      "supporting_source_term_labels": [
        "endoplasmic reticulum to Golgi vesicle-mediated transport"
      ],
      "supporting_source_node_names": [
        "Ubiquitin-Proteasome Pathway Dysregulation (KLHL40)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048193" } }));
