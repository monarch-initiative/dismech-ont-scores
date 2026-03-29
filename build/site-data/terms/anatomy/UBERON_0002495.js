window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002495"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002495",
  "term_label": "long bone",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.311349,
  "mean_score": 0.233511,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Camurati-Engelmann Disease",
      "disease_term_id": "MONDO:0007542",
      "source_file": "Camurati-Engelmann_Disease.yaml",
      "term_id": "UBERON:0002495",
      "term_label": "long bone",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004769",
      "best_source_term_label": "diaphysis",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0004769"
      ],
      "supporting_source_term_labels": [
        "diaphysis"
      ],
      "supporting_source_node_names": [
        "Impaired Bone Remodeling Balance"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0002495",
      "term_label": "long bone",
      "score": 0.155674,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001437",
      "best_source_term_label": "epiphysis",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001437"
      ],
      "supporting_source_term_labels": [
        "epiphysis"
      ],
      "supporting_source_node_names": [
        "Epiphyseal skeletal overgrowth"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002495" } }));
