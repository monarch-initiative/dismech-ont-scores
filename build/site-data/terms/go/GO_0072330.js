window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0072330"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0072330",
  "term_label": "monocarboxylic acid biosynthetic process",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.363369,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "GO:0072330",
      "term_label": "monocarboxylic acid biosynthetic process",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006699",
      "best_source_term_label": "bile acid biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006699"
      ],
      "supporting_source_term_labels": [
        "bile acid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Deficiency of Essential Compounds"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Biotinidase Deficiency",
      "disease_term_id": "MONDO:0009665",
      "source_file": "Biotinidase_Deficiency.yaml",
      "term_id": "GO:0072330",
      "term_label": "monocarboxylic acid biosynthetic process",
      "score": 0.349052,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006633",
      "best_source_term_label": "fatty acid biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006633"
      ],
      "supporting_source_term_labels": [
        "fatty acid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Dermatologic manifestations from systemic biotin depletion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Guanidinoacetate Methyltransferase Deficiency",
      "disease_term_id": "MONDO:0012999",
      "source_file": "Guanidinoacetate_Methyltransferase_Deficiency.yaml",
      "term_id": "GO:0072330",
      "term_label": "monocarboxylic acid biosynthetic process",
      "score": 0.340871,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006601",
      "best_source_term_label": "creatine biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006601"
      ],
      "supporting_source_term_labels": [
        "creatine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Deficient creatine biosynthesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Citrin Deficiency",
      "disease_term_id": "MONDO:0016602",
      "source_file": "Citrin_Deficiency.yaml",
      "term_id": "GO:0072330",
      "term_label": "monocarboxylic acid biosynthetic process",
      "score": 0.218158,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006633",
      "best_source_term_label": "fatty acid biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006633"
      ],
      "supporting_source_term_labels": [
        "fatty acid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "De novo lipogenesis defects and PPARalpha-mediated beta-oxidation impairment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0072330" } }));
