window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035708"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035708",
  "term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.25,
  "mean_score": 0.225,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "GO:0035708",
      "term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0035708",
      "best_source_term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035708"
      ],
      "supporting_source_term_labels": [
        "interleukin-4-dependent isotype switching to IgE isotypes"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "GO:0035708",
      "term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "score": 0.2,
      "direct_score": 0.2,
      "propagated_score": 0.2,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0035708",
      "best_source_term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035708"
      ],
      "supporting_source_term_labels": [
        "interleukin-4-dependent isotype switching to IgE isotypes"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response / Th2 Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035708" } }));
