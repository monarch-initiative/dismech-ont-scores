window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009370"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009370",
  "term_label": "Type A brachydactyly",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Brachydactyly Type A1",
      "disease_term_id": "MONDO:0007215",
      "source_file": "Brachydactyly_Type_A1.yaml",
      "term_id": "HP:0009370",
      "term_label": "Type A brachydactyly",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0009371",
      "best_source_term_label": "Type A1 brachydactyly",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009371"
      ],
      "supporting_source_term_labels": [
        "Type A1 brachydactyly"
      ],
      "supporting_source_node_names": [
        "Type A1 Brachydactyly"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009370" } }));
