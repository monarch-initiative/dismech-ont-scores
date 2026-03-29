window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006941"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006941",
  "term_label": "striated muscle contraction",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.330854,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Dilated Cardiomyopathy",
      "disease_term_id": "MONDO:0005021",
      "source_file": "Dilated_Cardiomyopathy.yaml",
      "term_id": "GO:0006941",
      "term_label": "striated muscle contraction",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0060048",
      "best_source_term_label": "cardiac muscle contraction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0006941",
      "term_label": "striated muscle contraction",
      "score": 0.42776,
      "direct_score": 0.0,
      "propagated_score": 0.54902,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0003009",
      "best_source_term_label": "skeletal muscle contraction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0006941",
      "term_label": "striated muscle contraction",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0003009",
      "best_source_term_label": "skeletal muscle contraction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Primary Carnitine Deficiency",
      "disease_term_id": "MONDO:0008919",
      "source_file": "Primary_Carnitine_Deficiency.yaml",
      "term_id": "GO:0006941",
      "term_label": "striated muscle contraction",
      "score": 0.077567,
      "direct_score": 0.0,
      "propagated_score": 0.099556,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0060048",
      "best_source_term_label": "cardiac muscle contraction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006941" } }));
