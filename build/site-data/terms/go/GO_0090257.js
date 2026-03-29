window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0090257"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0090257",
  "term_label": "regulation of muscle system process",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.272697,
  "mean_score": 0.221866,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Retrograde Cricopharyngeus Dysfunction",
      "disease_term_id": "MONDO:0100099",
      "source_file": "Retrograde_Cricopharyngeus_Dysfunction.yaml",
      "term_id": "GO:0090257",
      "term_label": "regulation of muscle system process",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006937",
      "best_source_term_label": "regulation of muscle contraction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006937"
      ],
      "supporting_source_term_labels": [
        "regulation of muscle contraction"
      ],
      "supporting_source_node_names": [
        "Failure of Upper Esophageal Sphincter Relaxation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Satoyoshi Syndrome",
      "disease_term_id": "MONDO:0010922",
      "source_file": "Satoyoshi_Syndrome.yaml",
      "term_id": "GO:0090257",
      "term_label": "regulation of muscle system process",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006937",
      "best_source_term_label": "regulation of muscle contraction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006937"
      ],
      "supporting_source_term_labels": [
        "regulation of muscle contraction"
      ],
      "supporting_source_node_names": [
        "Neuromuscular Circuit Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "GO:0090257",
      "term_label": "regulation of muscle system process",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0055117",
      "best_source_term_label": "regulation of cardiac muscle contraction",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0055117"
      ],
      "supporting_source_term_labels": [
        "regulation of cardiac muscle contraction"
      ],
      "supporting_source_node_names": [
        "Altered Calcium Handling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "GO:0090257",
      "term_label": "regulation of muscle system process",
      "score": 0.074828,
      "direct_score": 0.0,
      "propagated_score": 0.09604,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0014722",
      "best_source_term_label": "regulation of skeletal muscle contraction by calcium ion signaling",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0014722"
      ],
      "supporting_source_term_labels": [
        "regulation of skeletal muscle contraction by calcium ion signaling"
      ],
      "supporting_source_node_names": [
        "Abnormal RyR1 calcium release channel function"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0090257" } }));
