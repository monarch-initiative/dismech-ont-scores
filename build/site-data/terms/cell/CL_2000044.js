window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:2000044"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:2000044",
  "term_label": "brain microvascular endothelial cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.579052,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Bacterial meningitis",
      "disease_term_id": "MONDO:0006670",
      "source_file": "Bacterial_meningitis.yaml",
      "term_id": "CL:2000044",
      "term_label": "brain microvascular endothelial cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:2000044",
      "best_source_term_label": "brain microvascular endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:2000044"
      ],
      "supporting_source_term_labels": [
        "brain microvascular endothelial cell"
      ],
      "supporting_source_node_names": [
        "Bacterial Invasion",
        "Blood-Brain Barrier Disruption",
        "TLR-Mediated Innate Immune Activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Argininosuccinic Aciduria",
      "disease_term_id": "MONDO:0008815",
      "source_file": "Argininosuccinic_Aciduria.yaml",
      "term_id": "CL:2000044",
      "term_label": "brain microvascular endothelial cell",
      "score": 0.158103,
      "direct_score": 0.158103,
      "propagated_score": 0.158103,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:2000044",
      "best_source_term_label": "brain microvascular endothelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:2000044"
      ],
      "supporting_source_term_labels": [
        "brain microvascular endothelial cell"
      ],
      "supporting_source_node_names": [
        "Nitric oxide deficiency and endothelial dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:2000044" } }));
