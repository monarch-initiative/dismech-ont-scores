window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0017006"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0017006",
  "term_label": "B-lymphoblast",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Philadelphia Chromosome-Positive Acute Lymphoblastic Leukemia",
      "disease_term_id": "MONDO:0004947",
      "source_file": "Ph_Positive_ALL.yaml",
      "term_id": "CL:0017006",
      "term_label": "B-lymphoblast",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0017006",
      "best_source_term_label": "B-lymphoblast",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0017006" } }));
