window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1903351"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1903351",
  "term_label": "cellular response to dopamine",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.4375,
  "mean_score": 0.4375,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Major Depressive Disorder",
      "disease_term_id": "MONDO:0002009",
      "source_file": "Major_Depressive_Disorder.yaml",
      "term_id": "GO:1903351",
      "term_label": "cellular response to dopamine",
      "score": 0.4375,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0007212",
      "best_source_term_label": "G protein-coupled dopamine receptor signaling pathway",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0007210",
        "GO:0007212"
      ],
      "supporting_source_term_labels": [
        "G protein-coupled dopamine receptor signaling pathway",
        "serotonin receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Monoamine Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1903351" } }));
