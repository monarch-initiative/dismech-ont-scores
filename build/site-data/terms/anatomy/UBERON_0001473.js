window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001473"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001473",
  "term_label": "lymphatic vessel",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.875,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Lymphatic filariasis",
      "disease_term_id": "MONDO:0016075",
      "source_file": "Lymphatic_Filariasis.yaml",
      "term_id": "UBERON:0001473",
      "term_label": "lymphatic vessel",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001473",
      "best_source_term_label": "lymphatic vessel",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "term_id": "UBERON:0001473",
      "term_label": "lymphatic vessel",
      "score": 0.75,
      "direct_score": 0.75,
      "propagated_score": 0.75,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001473",
      "best_source_term_label": "lymphatic vessel",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001473" } }));
