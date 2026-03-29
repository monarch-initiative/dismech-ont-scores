window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003009"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003009",
  "term_label": "skeletal muscle contraction",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.784314,
  "mean_score": 0.642157,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0003009",
      "term_label": "skeletal muscle contraction",
      "score": 0.784314,
      "direct_score": 0.784314,
      "propagated_score": 0.784314,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0003009",
      "best_source_term_label": "skeletal muscle contraction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "term_id": "GO:0003009",
      "term_label": "skeletal muscle contraction",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0003009",
      "best_source_term_label": "skeletal muscle contraction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003009"
      ],
      "supporting_source_term_labels": [
        "skeletal muscle contraction"
      ],
      "supporting_source_node_names": [
        "Failure of Upper Esophageal Sphincter Relaxation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003009" } }));
