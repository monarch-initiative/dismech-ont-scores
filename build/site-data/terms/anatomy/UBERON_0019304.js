window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0019304"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0019304",
  "term_label": "sensory organ epithelium",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.305122,
  "mean_score": 0.207047,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "UBERON:0019304",
      "term_label": "sensory organ epithelium",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001985",
      "best_source_term_label": "corneal endothelium",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001985"
      ],
      "supporting_source_term_labels": [
        "corneal endothelium"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "UBERON:0019304",
      "term_label": "sensory organ epithelium",
      "score": 0.108972,
      "direct_score": 0.0,
      "propagated_score": 0.1225,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005384",
      "best_source_term_label": "nasal cavity epithelium",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005384"
      ],
      "supporting_source_term_labels": [
        "nasal cavity epithelium"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0019304" } }));
