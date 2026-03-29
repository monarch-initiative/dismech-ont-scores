window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001750"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001750",
  "term_label": "lacrimal apparatus",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.179688,
  "mean_score": 0.179688,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "UBERON:0001750",
      "term_label": "lacrimal apparatus",
      "score": 0.179688,
      "direct_score": 0.0,
      "propagated_score": 0.179688,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002392",
      "best_source_term_label": "nasolacrimal duct",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001351",
        "UBERON:0002392"
      ],
      "supporting_source_term_labels": [
        "lacrimal sac",
        "nasolacrimal duct"
      ],
      "supporting_source_node_names": [
        "Lacrimal Canal Stenosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001750" } }));
