window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0015698"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0015698",
  "term_label": "inorganic anion transport",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.340654,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Atelosteogenesis Type II",
      "disease_term_id": "MONDO:0009727",
      "source_file": "Atelosteogenesis_Type_II.yaml",
      "term_id": "GO:0015698",
      "term_label": "inorganic anion transport",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:1902358",
      "best_source_term_label": "sulfate transmembrane transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1902358"
      ],
      "supporting_source_term_labels": [
        "sulfate transmembrane transport"
      ],
      "supporting_source_node_names": [
        "Sulfate Transport Deficiency in Chondrocytes"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "GO:0015698",
      "term_label": "inorganic anion transport",
      "score": 0.540406,
      "direct_score": 0.0,
      "propagated_score": 0.693598,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006821",
      "best_source_term_label": "chloride transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006821"
      ],
      "supporting_source_term_labels": [
        "chloride transport"
      ],
      "supporting_source_node_names": [
        "CFTR Dysfunction",
        "Sweat Gland Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0015698",
      "term_label": "inorganic anion transport",
      "score": 0.15271,
      "direct_score": 0.0,
      "propagated_score": 0.196,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:1902476",
      "best_source_term_label": "chloride transmembrane transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1902476"
      ],
      "supporting_source_term_labels": [
        "chloride transmembrane transport"
      ],
      "supporting_source_node_names": [
        "Increased cAMP"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0015698",
      "term_label": "inorganic anion transport",
      "score": 0.124107,
      "direct_score": 0.0,
      "propagated_score": 0.159289,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006817",
      "best_source_term_label": "phosphate ion transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006817"
      ],
      "supporting_source_term_labels": [
        "phosphate ion transport"
      ],
      "supporting_source_node_names": [
        "Renal Phosphate Wasting"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0015698" } }));
