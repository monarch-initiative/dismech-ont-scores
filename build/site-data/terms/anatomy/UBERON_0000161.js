window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000161"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000161",
  "term_label": "orifice",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.126312,
  "mean_score": 0.076129,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0000161",
      "term_label": "orifice",
      "score": 0.126312,
      "direct_score": 0.0,
      "propagated_score": 0.141993,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002502",
      "best_source_term_label": "round window of inner ear",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002502"
      ],
      "supporting_source_term_labels": [
        "round window of inner ear"
      ],
      "supporting_source_node_names": [
        "Pathogen entry into the inner ear"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0000161",
      "term_label": "orifice",
      "score": 0.025946,
      "direct_score": 0.0,
      "propagated_score": 0.029167,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003343",
      "best_source_term_label": "mucosa of oral region",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0003343"
      ],
      "supporting_source_term_labels": [
        "mucosa of oral region"
      ],
      "supporting_source_node_names": [
        "Mucosal Origins and Dysbiosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000161" } }));
