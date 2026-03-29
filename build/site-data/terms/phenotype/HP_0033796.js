window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033796"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033796",
  "term_label": "Abnormal leukocyte physiology",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.369362,
  "mean_score": 0.190552,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Common Variable Immunodeficiency",
      "disease_term_id": "MONDO:0015517",
      "source_file": "Common_Variable_Immunodeficiency.yaml",
      "term_id": "HP:0033796",
      "term_label": "Abnormal leukocyte physiology",
      "score": 0.369362,
      "direct_score": 0.0,
      "propagated_score": 0.474067,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0004313",
      "best_source_term_label": "Decreased circulating immunoglobulin concentration",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002720",
        "HP:0004313",
        "HP:0004315"
      ],
      "supporting_source_term_labels": [
        "Decreased circulating IgA concentration",
        "Decreased circulating IgG concentration",
        "Decreased circulating immunoglobulin concentration"
      ],
      "supporting_source_node_names": [
        "Decreased Circulating IgA",
        "Decreased Circulating IgG",
        "Hypogammaglobulinemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "HP:0033796",
      "term_label": "Abnormal leukocyte physiology",
      "score": 0.130949,
      "direct_score": 0.0,
      "propagated_score": 0.16807,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002720",
      "best_source_term_label": "Decreased circulating IgA concentration",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002720"
      ],
      "supporting_source_term_labels": [
        "Decreased circulating IgA concentration"
      ],
      "supporting_source_node_names": [
        "Decreased circulating IgA concentration"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "HP:0033796",
      "term_label": "Abnormal leukocyte physiology",
      "score": 0.130949,
      "direct_score": 0.0,
      "propagated_score": 0.16807,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003212",
      "best_source_term_label": "Increased circulating IgE concentration",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003212"
      ],
      "supporting_source_term_labels": [
        "Increased circulating IgE concentration"
      ],
      "supporting_source_node_names": [
        "Elevated Serum IgE"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "HP:0033796",
      "term_label": "Abnormal leukocyte physiology",
      "score": 0.130949,
      "direct_score": 0.0,
      "propagated_score": 0.16807,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002720",
      "best_source_term_label": "Decreased circulating IgA concentration",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002720"
      ],
      "supporting_source_term_labels": [
        "Decreased circulating IgA concentration"
      ],
      "supporting_source_node_names": [
        "Decreased Serum IgA"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033796" } }));
