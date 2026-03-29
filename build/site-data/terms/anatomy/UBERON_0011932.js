window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011932"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011932",
  "term_label": "pilosebaceous unit",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.494175,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Acne Vulgaris",
      "disease_term_id": "MONDO:0011438",
      "source_file": "Acne_Vulgaris.yaml",
      "term_id": "UBERON:0011932",
      "term_label": "pilosebaceous unit",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0011932",
      "best_source_term_label": "pilosebaceous unit",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0011932"
      ],
      "supporting_source_term_labels": [
        "pilosebaceous unit"
      ],
      "supporting_source_node_names": [
        "C. acnes follicular colonization",
        "Follicular keratinization",
        "Microcomedone formation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Folliculitis",
      "disease_term_id": "MONDO:0006552",
      "source_file": "Folliculitis.yaml",
      "term_id": "UBERON:0011932",
      "term_label": "pilosebaceous unit",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002073",
      "best_source_term_label": "hair follicle",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0011932",
      "term_label": "pilosebaceous unit",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002073",
      "best_source_term_label": "hair follicle",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0011932",
      "term_label": "pilosebaceous unit",
      "score": 0.197564,
      "direct_score": 0.0,
      "propagated_score": 0.253568,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002074",
      "best_source_term_label": "hair shaft",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0002073",
        "UBERON:0002074"
      ],
      "supporting_source_term_labels": [
        "hair follicle",
        "hair shaft"
      ],
      "supporting_source_node_names": [
        "Hair follicle toxicity",
        "Keratin affinity and appendage accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011932" } }));
