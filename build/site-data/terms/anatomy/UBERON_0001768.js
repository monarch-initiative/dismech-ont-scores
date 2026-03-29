window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001768"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001768",
  "term_label": "uvea",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.398117,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Uveal Melanoma",
      "disease_term_id": "MONDO:0006486",
      "source_file": "Uveal_Melanoma.yaml",
      "term_id": "UBERON:0001768",
      "term_label": "uvea",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001768",
      "best_source_term_label": "uvea",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001768"
      ],
      "supporting_source_term_labels": [
        "uvea"
      ],
      "supporting_source_node_names": [
        "GNAQ/GNA11 Oncogenic Mutations",
        "Uncontrolled Uveal Melanocyte Proliferation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "UBERON:0001768",
      "term_label": "uvea",
      "score": 0.267827,
      "direct_score": 0.0,
      "propagated_score": 0.34375,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005969",
      "best_source_term_label": "eye trabecular meshwork",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001779",
        "UBERON:0005969"
      ],
      "supporting_source_term_labels": [
        "eye trabecular meshwork",
        "iris stroma"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Glaucoma",
      "disease_term_id": "MONDO:0005041",
      "source_file": "Glaucoma.yaml",
      "term_id": "UBERON:0001768",
      "term_label": "uvea",
      "score": 0.194784,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005969",
      "best_source_term_label": "eye trabecular meshwork",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0005969"
      ],
      "supporting_source_term_labels": [
        "eye trabecular meshwork"
      ],
      "supporting_source_node_names": [
        "Trabecular Meshwork Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pars Planitis",
      "disease_term_id": "MONDO:0011644",
      "source_file": "Pars_Planitis.yaml",
      "term_id": "UBERON:0001768",
      "term_label": "uvea",
      "score": 0.129856,
      "direct_score": 0.0,
      "propagated_score": 0.166667,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001775",
      "best_source_term_label": "ciliary body",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001775"
      ],
      "supporting_source_term_labels": [
        "ciliary body"
      ],
      "supporting_source_node_names": [
        "Autoimmune T-Cell Predominant Inflammation",
        "Snowbank Formation at Pars Plana"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001768" } }));
