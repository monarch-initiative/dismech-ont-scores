window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030029"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030029",
  "term_label": "actin filament-based process",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.407691,
  "mean_score": 0.210661,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0030029",
      "term_label": "actin filament-based process",
      "score": 0.407691,
      "direct_score": 0.0,
      "propagated_score": 0.523262,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0045214",
      "best_source_term_label": "sarcomere organization",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007015",
        "GO:0030239",
        "GO:0030240",
        "GO:0045214"
      ],
      "supporting_source_term_labels": [
        "actin filament organization",
        "myofibril assembly",
        "sarcomere organization",
        "skeletal muscle thin filament assembly"
      ],
      "supporting_source_node_names": [
        "NRAP-Mediated Sarcomere Disorganization",
        "Nemaline Rod Formation",
        "Thin Filament Dysfunction",
        "Thin Filament Length Dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Larsen Syndrome",
      "disease_term_id": "MONDO:0007875",
      "source_file": "Larsen_Syndrome.yaml",
      "term_id": "GO:0030029",
      "term_label": "actin filament-based process",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007015",
      "best_source_term_label": "actin filament organization",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0007015"
      ],
      "supporting_source_term_labels": [
        "actin filament organization"
      ],
      "supporting_source_node_names": [
        "FLNB Variant Clustering in Functional Protein Domains",
        "Gain-of-Function Actin-Binding Dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "GO:0030029",
      "term_label": "actin filament-based process",
      "score": 0.133622,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0045214",
      "best_source_term_label": "sarcomere organization",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045214"
      ],
      "supporting_source_term_labels": [
        "sarcomere organization"
      ],
      "supporting_source_node_names": [
        "Sarcomere Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0030029",
      "term_label": "actin filament-based process",
      "score": 0.028633,
      "direct_score": 0.0,
      "propagated_score": 0.03675,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030041",
      "best_source_term_label": "actin filament polymerization",
      "best_source_path_score": 0.1715,
      "best_source_path": "is_a > is_a > part_of > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0030041"
      ],
      "supporting_source_term_labels": [
        "actin filament polymerization"
      ],
      "supporting_source_node_names": [
        "Actin-based motility and cell-to-cell spread"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030029" } }));
