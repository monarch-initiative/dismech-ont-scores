window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0090287"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0090287",
  "term_label": "regulation of cellular response to growth factor stimulus",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.343911,
  "mean_score": 0.343911,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "GO:0090287",
      "term_label": "regulation of cellular response to growth factor stimulus",
      "score": 0.343911,
      "direct_score": 0.0,
      "propagated_score": 0.343911,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0030514",
      "best_source_term_label": "negative regulation of BMP signaling pathway",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030512",
        "GO:0030514"
      ],
      "supporting_source_term_labels": [
        "negative regulation of BMP signaling pathway",
        "negative regulation of transforming growth factor beta receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "LEMD3/MAN1 Loss-of-Function and Dysregulated TGF-beta/BMP Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0090287" } }));
