window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043122"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043122",
  "term_label": "regulation of canonical NF-kappaB signal transduction",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.498158,
  "mean_score": 0.498158,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Adult T-Cell Leukemia/Lymphoma",
      "disease_term_id": "MONDO:0019471",
      "source_file": "Adult_T_Cell_Leukemia_Lymphoma.yaml",
      "term_id": "GO:0043122",
      "term_label": "regulation of canonical NF-kappaB signal transduction",
      "score": 0.498158,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0043123",
      "best_source_term_label": "positive regulation of canonical NF-kappaB signal transduction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043123"
      ],
      "supporting_source_term_labels": [
        "positive regulation of canonical NF-kappaB signal transduction"
      ],
      "supporting_source_node_names": [
        "Tax-Mediated NF-kappaB Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Kaposi Sarcoma",
      "disease_term_id": "MONDO:0005055",
      "source_file": "Kaposi_Sarcoma.yaml",
      "term_id": "GO:0043122",
      "term_label": "regulation of canonical NF-kappaB signal transduction",
      "score": 0.498158,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0043123",
      "best_source_term_label": "positive regulation of canonical NF-kappaB signal transduction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043123"
      ],
      "supporting_source_term_labels": [
        "positive regulation of canonical NF-kappaB signal transduction"
      ],
      "supporting_source_node_names": [
        "vFLIP-Mediated NF-kappaB Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043122" } }));
