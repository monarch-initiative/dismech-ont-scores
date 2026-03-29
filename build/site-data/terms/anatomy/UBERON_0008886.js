window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0008886"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0008886",
  "term_label": "pulmonary vascular system",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.444784,
  "mean_score": 0.333588,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "UBERON:0008886",
      "term_label": "pulmonary vascular system",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002012",
      "best_source_term_label": "pulmonary artery",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002012"
      ],
      "supporting_source_term_labels": [
        "pulmonary artery"
      ],
      "supporting_source_node_names": [
        "Endothelial Dysfunction",
        "Increased Pulmonary Vascular Resistance",
        "Inflammation and Immune Activation",
        "Vascular Remodeling"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0008886",
      "term_label": "pulmonary vascular system",
      "score": 0.222392,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002016",
      "best_source_term_label": "pulmonary vein",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002016"
      ],
      "supporting_source_term_labels": [
        "pulmonary vein"
      ],
      "supporting_source_node_names": [
        "Anomalous pulmonary venous drainage"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0008886" } }));
