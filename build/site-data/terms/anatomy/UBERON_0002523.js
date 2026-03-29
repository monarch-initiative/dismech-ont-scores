window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002523"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002523",
  "term_label": "tunica intima",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.309874,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "UBERON:0002523",
      "term_label": "tunica intima",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002523",
      "best_source_term_label": "tunica intima",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002523"
      ],
      "supporting_source_term_labels": [
        "tunica intima"
      ],
      "supporting_source_node_names": [
        "Accelerated Atherosclerosis"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "UBERON:0002523",
      "term_label": "tunica intima",
      "score": 0.119749,
      "direct_score": 0.0,
      "propagated_score": 0.134615,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003619",
      "best_source_term_label": "aorta tunica intima",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003619"
      ],
      "supporting_source_term_labels": [
        "aorta tunica intima"
      ],
      "supporting_source_node_names": [
        "Vascular Inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002523" } }));
