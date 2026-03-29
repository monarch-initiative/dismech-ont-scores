window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001173"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001173",
  "term_label": "biliary tree",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.311349,
  "mean_score": 0.311349,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "FGFR-Altered Cholangiocarcinoma",
      "disease_term_id": "MONDO:0003210",
      "source_file": "FGFR_Altered_Cholangiocarcinoma.yaml",
      "term_id": "UBERON:0001173",
      "term_label": "biliary tree",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003704",
      "best_source_term_label": "intrahepatic bile duct",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0001173",
      "term_label": "biliary tree",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003704",
      "best_source_term_label": "intrahepatic bile duct",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001173" } }));
