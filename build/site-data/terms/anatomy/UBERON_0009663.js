window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0009663"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0009663",
  "term_label": "telencephalic nucleus",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.175705,
  "mean_score": 0.143203,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Glutaryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0009281",
      "source_file": "Glutaryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "UBERON:0009663",
      "term_label": "telencephalic nucleus",
      "score": 0.175705,
      "direct_score": 0.0,
      "propagated_score": 0.197517,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001874",
      "best_source_term_label": "putamen",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001873",
        "UBERON:0001874"
      ],
      "supporting_source_term_labels": [
        "caudate nucleus",
        "putamen"
      ],
      "supporting_source_node_names": [
        "Striatal vulnerability and encephalopathic crises"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "UBERON:0009663",
      "term_label": "telencephalic nucleus",
      "score": 0.110702,
      "direct_score": 0.0,
      "propagated_score": 0.124444,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001874",
      "best_source_term_label": "putamen",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001874"
      ],
      "supporting_source_term_labels": [
        "putamen"
      ],
      "supporting_source_node_names": [
        "Neurodegeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0009663" } }));
