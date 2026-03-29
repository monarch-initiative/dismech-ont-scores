window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0006558"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0006558",
  "term_label": "lymphatic part of lymphoid system",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.444784,
  "mean_score": 0.389186,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Lymphatic filariasis",
      "disease_term_id": "MONDO:0016075",
      "source_file": "Lymphatic_Filariasis.yaml",
      "term_id": "UBERON:0006558",
      "term_label": "lymphatic part of lymphoid system",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001473",
      "best_source_term_label": "lymphatic vessel",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001473"
      ],
      "supporting_source_term_labels": [
        "lymphatic vessel"
      ],
      "supporting_source_node_names": [
        "Lymphatic vessel blockage and dysfunction",
        "Lymphatic vessel remodeling and dilation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "UBERON:0006558",
      "term_label": "lymphatic part of lymphoid system",
      "score": 0.333588,
      "direct_score": 0.0,
      "propagated_score": 0.375,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001473",
      "best_source_term_label": "lymphatic vessel",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001473"
      ],
      "supporting_source_term_labels": [
        "lymphatic vessel"
      ],
      "supporting_source_node_names": [
        "Lymphatic dysfunction with intralymphatic histiocytosis and persistent edema"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0006558" } }));
