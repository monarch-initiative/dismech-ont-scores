window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000058"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000058",
  "term_label": "duct",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.319396,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "UBERON:0000058",
      "term_label": "duct",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001343",
      "best_source_term_label": "seminiferous tubule of testis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001343"
      ],
      "supporting_source_term_labels": [
        "seminiferous tubule of testis"
      ],
      "supporting_source_node_names": [
        "Progressive Germ Cell Loss",
        "Testicular Microenvironment Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "UBERON:0000058",
      "term_label": "duct",
      "score": 0.361324,
      "direct_score": 0.0,
      "propagated_score": 0.46375,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002392",
      "best_source_term_label": "nasolacrimal duct",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
    },
    {
      "ontology": "anatomy",
      "disorder_name": "FGFR-Altered Cholangiocarcinoma",
      "disease_term_id": "MONDO:0003210",
      "source_file": "FGFR_Altered_Cholangiocarcinoma.yaml",
      "term_id": "UBERON:0000058",
      "term_label": "duct",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003704",
      "best_source_term_label": "intrahepatic bile duct",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003704"
      ],
      "supporting_source_term_labels": [
        "intrahepatic bile duct"
      ],
      "supporting_source_node_names": [
        "FGFR2 Fusion and Constitutive Activation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "IDH-Mutant Cholangiocarcinoma",
      "disease_term_id": "MONDO:0003210",
      "source_file": "IDH_Mutant_Cholangiocarcinoma.yaml",
      "term_id": "UBERON:0000058",
      "term_label": "duct",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003704",
      "best_source_term_label": "intrahepatic bile duct",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0003704"
      ],
      "supporting_source_term_labels": [
        "intrahepatic bile duct"
      ],
      "supporting_source_node_names": [
        "IDH1/2 Neomorphic Mutation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000058" } }));
