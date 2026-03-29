window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010902"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010902",
  "term_label": "Abnormal circulating glutamine family amino acid concentration",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.435888,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Arginase Deficiency",
      "disease_term_id": "MONDO:0008814",
      "source_file": "Arginase_Deficiency.yaml",
      "term_id": "HP:0010902",
      "term_label": "Abnormal circulating glutamine family amino acid concentration",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0500153",
      "best_source_term_label": "Hyperargininemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0500153"
      ],
      "supporting_source_term_labels": [
        "Hyperargininemia"
      ],
      "supporting_source_node_names": [
        "Hyperargininemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ornithine Carbamoyltransferase Deficiency",
      "disease_term_id": "MONDO:0010703",
      "source_file": "Ornithine_Carbamoyltransferase_Deficiency.yaml",
      "term_id": "HP:0010902",
      "term_label": "Abnormal circulating glutamine family amino acid concentration",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0003217",
      "best_source_term_label": "Hyperglutaminemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003217"
      ],
      "supporting_source_term_labels": [
        "Hyperglutaminemia"
      ],
      "supporting_source_node_names": [
        "Hyperglutaminemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010902" } }));
