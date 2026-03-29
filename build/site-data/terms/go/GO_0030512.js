window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030512"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030512",
  "term_label": "negative regulation of transforming growth factor beta receptor signaling pathway",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.454545,
  "mean_score": 0.454545,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "GO:0030512",
      "term_label": "negative regulation of transforming growth factor beta receptor signaling pathway",
      "score": 0.454545,
      "direct_score": 0.454545,
      "propagated_score": 0.454545,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0030512",
      "best_source_term_label": "negative regulation of transforming growth factor beta receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030512"
      ],
      "supporting_source_term_labels": [
        "negative regulation of transforming growth factor beta receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "LEMD3/MAN1 Loss-of-Function and Dysregulated TGF-beta/BMP Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030512" } }));
