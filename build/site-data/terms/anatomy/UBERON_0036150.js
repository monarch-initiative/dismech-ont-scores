window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0036150"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0036150",
  "term_label": "skin appendage follicle",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.434263,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Folliculitis",
      "disease_term_id": "MONDO:0006552",
      "source_file": "Folliculitis.yaml",
      "term_id": "UBERON:0036150",
      "term_label": "skin appendage follicle",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002073",
      "best_source_term_label": "hair follicle",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002073"
      ],
      "supporting_source_term_labels": [
        "hair follicle"
      ],
      "supporting_source_node_names": [
        "Demodex follicular colonization",
        "Folliculitis decalvans follicular dysbiosis",
        "Gram-negative follicular overgrowth and infection",
        "Malassezia follicular colonization",
        "Non-staphylococcal microbial follicular colonization",
        "Staphylococcus aureus follicular colonization"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "UBERON:0036150",
      "term_label": "skin appendage follicle",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002073",
      "best_source_term_label": "hair follicle",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002073"
      ],
      "supporting_source_term_labels": [
        "hair follicle"
      ],
      "supporting_source_node_names": [
        "Adhesin-enriched follicular attachment",
        "Colonization reservoir and follicular inoculation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Thallium Poisoning",
      "disease_term_id": "MONDO:0041996",
      "source_file": "Thallium_Poisoning.yaml",
      "term_id": "UBERON:0036150",
      "term_label": "skin appendage follicle",
      "score": 0.147834,
      "direct_score": 0.0,
      "propagated_score": 0.1792,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002073",
      "best_source_term_label": "hair follicle",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002073"
      ],
      "supporting_source_term_labels": [
        "hair follicle"
      ],
      "supporting_source_node_names": [
        "Hair follicle toxicity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0036150" } }));
