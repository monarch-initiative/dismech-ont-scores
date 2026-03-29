window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003704"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003704",
  "term_label": "intrahepatic bile duct",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "FGFR-Altered Cholangiocarcinoma",
      "disease_term_id": "MONDO:0003210",
      "source_file": "FGFR_Altered_Cholangiocarcinoma.yaml",
      "term_id": "UBERON:0003704",
      "term_label": "intrahepatic bile duct",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003704",
      "best_source_term_label": "intrahepatic bile duct",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "UBERON:0003704",
      "term_label": "intrahepatic bile duct",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0003704",
      "best_source_term_label": "intrahepatic bile duct",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003704" } }));
