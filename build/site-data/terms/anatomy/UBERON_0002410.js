window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002410"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002410",
  "term_label": "autonomic nervous system",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.304121,
  "mean_score": 0.25446,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "UBERON:0002410",
      "term_label": "autonomic nervous system",
      "score": 0.304121,
      "direct_score": 0.0,
      "propagated_score": 0.341875,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002005",
      "best_source_term_label": "enteric nervous system",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002005",
        "UBERON:0002439"
      ],
      "supporting_source_term_labels": [
        "enteric nervous system",
        "myenteric nerve plexus"
      ],
      "supporting_source_node_names": [
        "Disrupted Enteric Nervous System Development",
        "Failure of Enteric Ganglion Cell Migration"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Thallium Poisoning",
      "disease_term_id": "MONDO:0041996",
      "source_file": "Thallium_Poisoning.yaml",
      "term_id": "UBERON:0002410",
      "term_label": "autonomic nervous system",
      "score": 0.2048,
      "direct_score": 0.2048,
      "propagated_score": 0.2048,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002410",
      "best_source_term_label": "autonomic nervous system",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002410"
      ],
      "supporting_source_term_labels": [
        "autonomic nervous system"
      ],
      "supporting_source_node_names": [
        "Autonomic and central neurotoxicity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002410" } }));
