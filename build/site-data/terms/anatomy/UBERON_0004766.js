window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004766"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004766",
  "term_label": "cranial bone",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.288354,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "UBERON:0004766",
      "term_label": "cranial bone",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000209",
      "best_source_term_label": "tetrapod frontal bone",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000209"
      ],
      "supporting_source_term_labels": [
        "tetrapod frontal bone"
      ],
      "supporting_source_node_names": [
        "Endocrine-mediated calvarial bone overgrowth"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "UBERON:0004766",
      "term_label": "cranial bone",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005411",
      "best_source_term_label": "bony otic capsule",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005411"
      ],
      "supporting_source_term_labels": [
        "bony otic capsule"
      ],
      "supporting_source_node_names": [
        "Bony Dehiscence of Semicircular Canal"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0004766",
      "term_label": "cranial bone",
      "score": 0.056593,
      "direct_score": 0.0,
      "propagated_score": 0.0686,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005922",
      "best_source_term_label": "inferior nasal concha",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005922"
      ],
      "supporting_source_term_labels": [
        "inferior nasal concha"
      ],
      "supporting_source_node_names": [
        "Turbinate tissue loss from surgical resection"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004766" } }));
