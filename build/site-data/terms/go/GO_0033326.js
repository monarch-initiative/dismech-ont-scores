window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0033326"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0033326",
  "term_label": "cerebrospinal fluid secretion",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Spaceflight Associated Neuro-Ocular Syndrome",
      "disease_term_id": "",
      "source_file": "Spaceflight_Associated_Neuro-Ocular_Syndrome.yaml",
      "term_id": "GO:0033326",
      "term_label": "cerebrospinal fluid secretion",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0033326",
      "best_source_term_label": "cerebrospinal fluid secretion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0033326"
      ],
      "supporting_source_term_labels": [
        "cerebrospinal fluid secretion"
      ],
      "supporting_source_node_names": [
        "Elevated Intracranial Pressure"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0033326" } }));
