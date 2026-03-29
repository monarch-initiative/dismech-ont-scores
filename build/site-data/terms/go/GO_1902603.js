window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1902603"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1902603",
  "term_label": "carnitine transmembrane transport",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Primary Carnitine Deficiency",
      "disease_term_id": "MONDO:0008919",
      "source_file": "Primary_Carnitine_Deficiency.yaml",
      "term_id": "GO:1902603",
      "term_label": "carnitine transmembrane transport",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:1902603",
      "best_source_term_label": "carnitine transmembrane transport",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1902603"
      ],
      "supporting_source_term_labels": [
        "carnitine transmembrane transport"
      ],
      "supporting_source_node_names": [
        "SLC22A5/OCTN2 transporter dysfunction",
        "Systemic carnitine depletion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1902603" } }));
