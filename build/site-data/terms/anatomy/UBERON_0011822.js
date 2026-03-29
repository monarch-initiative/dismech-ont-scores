window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011822"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011822",
  "term_label": "dense irregular connective tissue",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.311349,
  "mean_score": 0.182917,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "UBERON:0011822",
      "term_label": "dense irregular connective tissue",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001013",
      "best_source_term_label": "adipose tissue",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001013"
      ],
      "supporting_source_term_labels": [
        "adipose tissue"
      ],
      "supporting_source_node_names": [
        "Estrogen Deficiency"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0011822",
      "term_label": "dense irregular connective tissue",
      "score": 0.054486,
      "direct_score": 0.0,
      "propagated_score": 0.06125,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0015143",
      "best_source_term_label": "mesenteric fat pad",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0015143"
      ],
      "supporting_source_term_labels": [
        "mesenteric fat pad"
      ],
      "supporting_source_node_names": [
        "Fibrosis and Stricture Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011822" } }));
