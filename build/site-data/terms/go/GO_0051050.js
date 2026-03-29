window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051050"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051050",
  "term_label": "positive regulation of transport",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.305122,
  "mean_score": 0.243371,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0051050",
      "term_label": "positive regulation of transport",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0010701",
      "best_source_term_label": "positive regulation of norepinephrine secretion",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0010701"
      ],
      "supporting_source_term_labels": [
        "positive regulation of norepinephrine secretion"
      ],
      "supporting_source_node_names": [
        "Excessive Sympathetic Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0051050",
      "term_label": "positive regulation of transport",
      "score": 0.18162,
      "direct_score": 0.0,
      "propagated_score": 0.204167,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0034758",
      "best_source_term_label": "positive regulation of iron ion transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034758"
      ],
      "supporting_source_term_labels": [
        "positive regulation of iron ion transport"
      ],
      "supporting_source_node_names": [
        "Low Hepcidin Leads to Ferroportin Hyperabsorption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051050" } }));
