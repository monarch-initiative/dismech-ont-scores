window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011695"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011695",
  "term_label": "embryonic cardiovascular system",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0011695",
      "term_label": "embryonic cardiovascular system",
      "score": 0.25,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005440",
      "best_source_term_label": "ductus arteriosus",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0005440"
      ],
      "supporting_source_term_labels": [
        "ductus arteriosus"
      ],
      "supporting_source_node_names": [
        "Patent ductus arteriosus and aortic arch anomalies"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011695" } }));
