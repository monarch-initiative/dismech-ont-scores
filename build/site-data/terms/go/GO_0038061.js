window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0038061"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0038061",
  "term_label": "non-canonical NF-kappaB signal transduction",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "GO:0038061",
      "term_label": "non-canonical NF-kappaB signal transduction",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0038061",
      "best_source_term_label": "non-canonical NF-kappaB signal transduction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0038061"
      ],
      "supporting_source_term_labels": [
        "non-canonical NF-kappaB signal transduction"
      ],
      "supporting_source_node_names": [
        "Inflammation and Immune Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nasopharyngeal Carcinoma",
      "disease_term_id": "MONDO:0015459",
      "source_file": "Nasopharyngeal_Carcinoma.yaml",
      "term_id": "GO:0038061",
      "term_label": "non-canonical NF-kappaB signal transduction",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0038061",
      "best_source_term_label": "non-canonical NF-kappaB signal transduction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0038061"
      ],
      "supporting_source_term_labels": [
        "non-canonical NF-kappaB signal transduction"
      ],
      "supporting_source_node_names": [
        "EBV Latent Membrane Protein 1 (LMP1) Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0038061" } }));
