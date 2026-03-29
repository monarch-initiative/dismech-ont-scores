window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060047"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060047",
  "term_label": "heart contraction",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.490383,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Heart Failure",
      "disease_term_id": "MONDO:0005252",
      "source_file": "Heart_Failure.yaml",
      "term_id": "GO:0060047",
      "term_label": "heart contraction",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0060047",
      "best_source_term_label": "heart contraction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060047"
      ],
      "supporting_source_term_labels": [
        "heart contraction"
      ],
      "supporting_source_node_names": [
        "Myocardial Contractile Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dilated Cardiomyopathy",
      "disease_term_id": "MONDO:0005021",
      "source_file": "Dilated_Cardiomyopathy.yaml",
      "term_id": "GO:0060047",
      "term_label": "heart contraction",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0060048",
      "best_source_term_label": "cardiac muscle contraction",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0060048"
      ],
      "supporting_source_term_labels": [
        "cardiac muscle contraction"
      ],
      "supporting_source_node_names": [
        "Sarcomeric and Cytoskeletal Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Primary Carnitine Deficiency",
      "disease_term_id": "MONDO:0008919",
      "source_file": "Primary_Carnitine_Deficiency.yaml",
      "term_id": "GO:0060047",
      "term_label": "heart contraction",
      "score": 0.058664,
      "direct_score": 0.0,
      "propagated_score": 0.071111,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0060048",
      "best_source_term_label": "cardiac muscle contraction",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0060048"
      ],
      "supporting_source_term_labels": [
        "cardiac muscle contraction"
      ],
      "supporting_source_node_names": [
        "Cardiac remodeling and fibrosis in OCTN2 deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060047" } }));
