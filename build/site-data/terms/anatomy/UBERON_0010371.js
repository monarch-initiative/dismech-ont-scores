window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0010371"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0010371",
  "term_label": "ecto-epithelium",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "UBERON:0010371",
      "term_label": "ecto-epithelium",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001985",
      "best_source_term_label": "corneal endothelium",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Meckel Syndrome",
      "disease_term_id": "MONDO:0018921",
      "source_file": "Meckel_Syndrome.yaml",
      "term_id": "UBERON:0010371",
      "term_label": "ecto-epithelium",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001049",
      "best_source_term_label": "neural tube",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001049"
      ],
      "supporting_source_term_labels": [
        "neural tube"
      ],
      "supporting_source_node_names": [
        "Altered Hedgehog signaling in neural tube patterning"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0010371" } }));
