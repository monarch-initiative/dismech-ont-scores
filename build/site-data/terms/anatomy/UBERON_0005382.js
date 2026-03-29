window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0005382"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0005382",
  "term_label": "dorsal striatum",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.096837,
  "mean_score": 0.068187,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Glutaryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0009281",
      "source_file": "Glutaryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "UBERON:0005382",
      "term_label": "dorsal striatum",
      "score": 0.096837,
      "direct_score": 0.0,
      "propagated_score": 0.108859,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001873",
      "best_source_term_label": "caudate nucleus",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0005382",
      "term_label": "dorsal striatum",
      "score": 0.039536,
      "direct_score": 0.0,
      "propagated_score": 0.044444,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001874",
      "best_source_term_label": "putamen",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0005382" } }));
