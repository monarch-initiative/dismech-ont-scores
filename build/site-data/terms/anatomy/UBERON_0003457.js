window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003457"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003457",
  "term_label": "head bone",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.233361,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "UBERON:0003457",
      "term_label": "head bone",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
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
      "term_id": "UBERON:0003457",
      "term_label": "head bone",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
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
      "disorder_name": "Silent Sinus Syndrome",
      "disease_term_id": "MONDO:0019108",
      "source_file": "Silent_Sinus_Syndrome.yaml",
      "term_id": "UBERON:0003457",
      "term_label": "head bone",
      "score": 0.093535,
      "direct_score": 0.0,
      "propagated_score": 0.12005,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001764",
      "best_source_term_label": "maxillary sinus",
      "best_source_path_score": 0.12005,
      "best_source_path": "part_of > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001764"
      ],
      "supporting_source_term_labels": [
        "maxillary sinus"
      ],
      "supporting_source_node_names": [
        "Maxillary Sinus Atelectasis"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0003457",
      "term_label": "head bone",
      "score": 0.076355,
      "direct_score": 0.0,
      "propagated_score": 0.098,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005922",
      "best_source_term_label": "inferior nasal concha",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003457" } }));
