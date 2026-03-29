window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002088"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002088",
  "term_label": "interstitial cell of Cajal",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Gastrointestinal Stromal Tumor",
      "disease_term_id": "MONDO:0011719",
      "source_file": "Gastrointestinal_Stromal_Tumor.yaml",
      "term_id": "CL:0002088",
      "term_label": "interstitial cell of Cajal",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002088",
      "best_source_term_label": "interstitial cell of Cajal",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002088"
      ],
      "supporting_source_term_labels": [
        "interstitial cell of Cajal"
      ],
      "supporting_source_node_names": [
        "KIT Receptor Tyrosine Kinase Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002088" } }));
