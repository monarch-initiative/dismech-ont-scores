window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001874"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001874",
  "term_label": "putamen",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.177778,
  "mean_score": 0.163307,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "UBERON:0001874",
      "term_label": "putamen",
      "score": 0.177778,
      "direct_score": 0.177778,
      "propagated_score": 0.177778,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001874",
      "best_source_term_label": "putamen",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Glutaryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0009281",
      "source_file": "Glutaryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "UBERON:0001874",
      "term_label": "putamen",
      "score": 0.148837,
      "direct_score": 0.148837,
      "propagated_score": 0.148837,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001874",
      "best_source_term_label": "putamen",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001874"
      ],
      "supporting_source_term_labels": [
        "putamen"
      ],
      "supporting_source_node_names": [
        "Striatal vulnerability and encephalopathic crises"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001874" } }));
