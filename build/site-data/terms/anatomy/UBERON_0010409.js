window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0010409"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0010409",
  "term_label": "ocular surface region",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.206242,
  "mean_score": 0.162738,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "UBERON:0010409",
      "term_label": "ocular surface region",
      "score": 0.206242,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.824968,
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
        "UBERON:0001985"
      ],
      "supporting_source_term_labels": [
        "corneal endothelium"
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
      "term_id": "UBERON:0010409",
      "term_label": "ocular surface region",
      "score": 0.206242,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.824968,
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
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "UBERON:0010409",
      "term_label": "ocular surface region",
      "score": 0.07573,
      "direct_score": 0.0,
      "propagated_score": 0.091797,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002392",
      "best_source_term_label": "nasolacrimal duct",
      "best_source_path_score": 0.125,
      "best_source_path": "part_of > part_of > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 3,
      "supporting_source_term_ids": [
        "UBERON:0001351",
        "UBERON:0002392"
      ],
      "supporting_source_term_labels": [
        "lacrimal sac",
        "nasolacrimal duct"
      ],
      "supporting_source_node_names": [
        "Lacrimal Canal Stenosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0010409" } }));
