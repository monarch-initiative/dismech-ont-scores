window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001801"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001801",
  "term_label": "anterior segment of eyeball",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.389567,
  "mean_score": 0.245509,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Glaucoma",
      "disease_term_id": "MONDO:0005041",
      "source_file": "Glaucoma.yaml",
      "term_id": "UBERON:0001801",
      "term_label": "anterior segment of eyeball",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001766",
      "best_source_term_label": "anterior chamber of eyeball",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001766"
      ],
      "supporting_source_term_labels": [
        "anterior chamber of eyeball"
      ],
      "supporting_source_node_names": [
        "Elevated Intraocular Pressure"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "UBERON:0001801",
      "term_label": "anterior segment of eyeball",
      "score": 0.267827,
      "direct_score": 0.0,
      "propagated_score": 0.34375,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001985",
      "best_source_term_label": "corneal endothelium",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001779",
        "UBERON:0001985"
      ],
      "supporting_source_term_labels": [
        "corneal endothelium",
        "iris stroma"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ehlers-Danlos Syndrome, COL5A1-related",
      "disease_term_id": "MONDO:0007522",
      "source_file": "Ehlers-Danlos_Syndrome_COL5A1-related.yaml",
      "term_id": "UBERON:0001801",
      "term_label": "anterior segment of eyeball",
      "score": 0.194784,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001777",
      "best_source_term_label": "substantia propria of cornea",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001777"
      ],
      "supporting_source_term_labels": [
        "substantia propria of cornea"
      ],
      "supporting_source_node_names": [
        "Tissue Injury and Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pars Planitis",
      "disease_term_id": "MONDO:0011644",
      "source_file": "Pars_Planitis.yaml",
      "term_id": "UBERON:0001801",
      "term_label": "anterior segment of eyeball",
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001801" } }));
