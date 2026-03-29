window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001033"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001033",
  "term_label": "gustatory system",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.444784,
  "mean_score": 0.27799,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bell's palsy",
      "disease_term_id": "MONDO:0005665",
      "source_file": "Bells_Palsy.yaml",
      "term_id": "UBERON:0001033",
      "term_label": "gustatory system",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001647",
      "best_source_term_label": "facial nerve",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001647"
      ],
      "supporting_source_term_labels": [
        "facial nerve"
      ],
      "supporting_source_node_names": [
        "Facial nerve edema within the facial canal",
        "Incomplete recovery with aberrant reinnervation",
        "Intracanalicular compression and conduction block of cranial nerve VII",
        "Putative post-viral immune activation in the geniculate ganglion"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "UBERON:0001033",
      "term_label": "gustatory system",
      "score": 0.111196,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001723",
      "best_source_term_label": "tongue",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001723"
      ],
      "supporting_source_term_labels": [
        "tongue"
      ],
      "supporting_source_node_names": [
        "Non-caseating granulomatous inflammation with epithelioid histiocytes"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001033" } }));
