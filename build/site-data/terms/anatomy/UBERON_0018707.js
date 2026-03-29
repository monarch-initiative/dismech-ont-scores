window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0018707"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0018707",
  "term_label": "bladder organ",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.415131,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "FGFR-Altered Urothelial Carcinoma",
      "disease_term_id": "MONDO:0040679",
      "source_file": "FGFR_Altered_Urothelial_Carcinoma.yaml",
      "term_id": "UBERON:0018707",
      "term_label": "bladder organ",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001255",
      "best_source_term_label": "urinary bladder",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001255"
      ],
      "supporting_source_term_labels": [
        "urinary bladder"
      ],
      "supporting_source_node_names": [
        "FGFR3 Constitutive Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Schistosomiasis",
      "disease_term_id": "MONDO:0015254",
      "source_file": "Schistosomiasis.yaml",
      "term_id": "UBERON:0018707",
      "term_label": "bladder organ",
      "score": 0.207566,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001255",
      "best_source_term_label": "urinary bladder",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001255"
      ],
      "supporting_source_term_labels": [
        "urinary bladder"
      ],
      "supporting_source_node_names": [
        "Egg trapping triggers granulomatous inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0018707" } }));
