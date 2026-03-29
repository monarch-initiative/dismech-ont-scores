window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0017005"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0017005",
  "term_label": "lymphoblast",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Philadelphia Chromosome-Positive Acute Lymphoblastic Leukemia",
      "disease_term_id": "MONDO:0004947",
      "source_file": "Ph_Positive_ALL.yaml",
      "term_id": "CL:0017005",
      "term_label": "lymphoblast",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0017006",
      "best_source_term_label": "B-lymphoblast",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0017006"
      ],
      "supporting_source_term_labels": [
        "B-lymphoblast"
      ],
      "supporting_source_node_names": [
        "B-lymphoid Differentiation Block",
        "BCR-ABL1 Fusion Oncogene in Lymphoid Progenitors",
        "Lymphoblast Accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0017005" } }));
