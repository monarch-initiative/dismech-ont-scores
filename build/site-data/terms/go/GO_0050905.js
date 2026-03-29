window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050905"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050905",
  "term_label": "neuromuscular process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.226462,
  "mean_score": 0.154409,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0050905",
      "term_label": "neuromuscular process",
      "score": 0.226462,
      "direct_score": 0.0,
      "propagated_score": 0.27451,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0003009",
      "best_source_term_label": "skeletal muscle contraction",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0003009"
      ],
      "supporting_source_term_labels": [
        "skeletal muscle contraction"
      ],
      "supporting_source_node_names": [
        "Reduced Sarcomeric Tension",
        "Thin Filament Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Retrograde Cricopharyngeus Dysfunction",
      "disease_term_id": "MONDO:0100099",
      "source_file": "Retrograde_Cricopharyngeus_Dysfunction.yaml",
      "term_id": "GO:0050905",
      "term_label": "neuromuscular process",
      "score": 0.144369,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0003009",
      "best_source_term_label": "skeletal muscle contraction",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0003009"
      ],
      "supporting_source_term_labels": [
        "skeletal muscle contraction"
      ],
      "supporting_source_node_names": [
        "Failure of Upper Esophageal Sphincter Relaxation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "GO:0050905",
      "term_label": "neuromuscular process",
      "score": 0.092396,
      "direct_score": 0.0,
      "propagated_score": 0.112,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050973",
      "best_source_term_label": "detection of mechanical stimulus involved in equilibrioception",
      "best_source_path_score": 0.175,
      "best_source_path": "part_of > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0050973"
      ],
      "supporting_source_term_labels": [
        "detection of mechanical stimulus involved in equilibrioception"
      ],
      "supporting_source_node_names": [
        "Third Window Effect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050905" } }));
