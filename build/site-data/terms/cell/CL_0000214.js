window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000214"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000214",
  "term_label": "synovial cell",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 0.5,
  "mean_score": 0.325901,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Osteoarthritis",
      "disease_term_id": "MONDO:0005178",
      "source_file": "Osteoarthritis.yaml",
      "term_id": "CL:0000214",
      "term_label": "synovial cell",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000214",
      "best_source_term_label": "synovial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000214"
      ],
      "supporting_source_term_labels": [
        "synovial cell"
      ],
      "supporting_source_node_names": [
        "Synovial Inflammation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "CL:0000214",
      "term_label": "synovial cell",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0000214",
      "best_source_term_label": "synovial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000214"
      ],
      "supporting_source_term_labels": [
        "synovial cell"
      ],
      "supporting_source_node_names": [
        "Synovial Hyperplasia"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "CL:0000214",
      "term_label": "synovial cell",
      "score": 0.144369,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002301",
      "best_source_term_label": "type B synovial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002301"
      ],
      "supporting_source_term_labels": [
        "type B synovial cell"
      ],
      "supporting_source_node_names": [
        "PRG4/Lubricin Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000214" } }));
