window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008016"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008016",
  "term_label": "regulation of heart contraction",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.52313,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "GO:0008016",
      "term_label": "regulation of heart contraction",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0008016",
      "best_source_term_label": "regulation of heart contraction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008016",
        "GO:0055117"
      ],
      "supporting_source_term_labels": [
        "regulation of cardiac muscle contraction",
        "regulation of heart contraction"
      ],
      "supporting_source_node_names": [
        "Sarcomere Protein Mutations"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "GO:0008016",
      "term_label": "regulation of heart contraction",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0061337",
      "best_source_term_label": "cardiac conduction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061337"
      ],
      "supporting_source_term_labels": [
        "cardiac conduction"
      ],
      "supporting_source_node_names": [
        "Cofactor and Chromatin Remodeling Dysfunction",
        "TBX5 Haploinsufficiency and Enhancer Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0008016",
      "term_label": "regulation of heart contraction",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0008016",
      "best_source_term_label": "regulation of heart contraction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008016"
      ],
      "supporting_source_term_labels": [
        "regulation of heart contraction"
      ],
      "supporting_source_node_names": [
        "Cardiac Iron Deposition"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0008016",
      "term_label": "regulation of heart contraction",
      "score": 0.213794,
      "direct_score": 0.0,
      "propagated_score": 0.2744,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0003066",
      "best_source_term_label": "positive regulation of heart rate by norepinephrine",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003066"
      ],
      "supporting_source_term_labels": [
        "positive regulation of heart rate by norepinephrine"
      ],
      "supporting_source_node_names": [
        "Compensatory Reflex Tachycardia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008016" } }));
