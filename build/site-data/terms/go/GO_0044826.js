window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0044826"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0044826",
  "term_label": "viral genome integration into host DNA",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cervical Cancer",
      "disease_term_id": "MONDO:0002974",
      "source_file": "Cervical_Cancer.yaml",
      "term_id": "GO:0044826",
      "term_label": "viral genome integration into host DNA",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0044826",
      "best_source_term_label": "viral genome integration into host DNA",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044826"
      ],
      "supporting_source_term_labels": [
        "viral genome integration into host DNA"
      ],
      "supporting_source_node_names": [
        "HPV Genome Integration"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "HPV-Positive Head and Neck Cancer",
      "disease_term_id": "MONDO:0044926",
      "source_file": "HPV_Positive_Head_and_Neck_Cancer.yaml",
      "term_id": "GO:0044826",
      "term_label": "viral genome integration into host DNA",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0044826",
      "best_source_term_label": "viral genome integration into host DNA",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044826"
      ],
      "supporting_source_term_labels": [
        "viral genome integration into host DNA"
      ],
      "supporting_source_node_names": [
        "Viral Oncogene Integration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0044826" } }));
