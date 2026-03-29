window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0061577"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0061577",
  "term_label": "calcium ion transmembrane transport via high voltage-gated calcium channel",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.416667,
  "mean_score": 0.416667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CACNA1A-Related Disorder",
      "disease_term_id": "MONDO:0100254",
      "source_file": "CACNA1A_Related_Disorder.yaml",
      "term_id": "GO:0061577",
      "term_label": "calcium ion transmembrane transport via high voltage-gated calcium channel",
      "score": 0.416667,
      "direct_score": 0.416667,
      "propagated_score": 0.416667,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0061577",
      "best_source_term_label": "calcium ion transmembrane transport via high voltage-gated calcium channel",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061577"
      ],
      "supporting_source_term_labels": [
        "calcium ion transmembrane transport via high voltage-gated calcium channel"
      ],
      "supporting_source_node_names": [
        "P/Q-type Calcium Channel Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0061577" } }));
