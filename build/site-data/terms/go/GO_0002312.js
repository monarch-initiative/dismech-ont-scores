window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002312"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002312",
  "term_label": "B cell activation involved in immune response",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.208203,
  "mean_score": 0.135731,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "GO:0002312",
      "term_label": "B cell activation involved in immune response",
      "score": 0.208203,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0045190",
      "best_source_term_label": "isotype switching",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045190"
      ],
      "supporting_source_term_labels": [
        "isotype switching"
      ],
      "supporting_source_node_names": [
        "Combined immunodeficiency with lymphocyte depletion and dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cronkhite-Canada syndrome",
      "disease_term_id": "MONDO:0008283",
      "source_file": "Cronkhite-Canada_syndrome.yaml",
      "term_id": "GO:0002312",
      "term_label": "B cell activation involved in immune response",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0002317",
      "best_source_term_label": "plasma cell differentiation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002317"
      ],
      "supporting_source_term_labels": [
        "plasma cell differentiation"
      ],
      "supporting_source_node_names": [
        "Autoimmune and IgG4-mediated inflammation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Common Variable Immunodeficiency",
      "disease_term_id": "MONDO:0015517",
      "source_file": "Common_Variable_Immunodeficiency.yaml",
      "term_id": "GO:0002312",
      "term_label": "B cell activation involved in immune response",
      "score": 0.173503,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0045190",
      "best_source_term_label": "isotype switching",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045190"
      ],
      "supporting_source_term_labels": [
        "isotype switching"
      ],
      "supporting_source_node_names": [
        "Defective B Cell Differentiation and Class-Switch Recombination"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "GO:0002312",
      "term_label": "B cell activation involved in immune response",
      "score": 0.063762,
      "direct_score": 0.0,
      "propagated_score": 0.08575,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0035708",
      "best_source_term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035708"
      ],
      "supporting_source_term_labels": [
        "interleukin-4-dependent isotype switching to IgE isotypes"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "GO:0002312",
      "term_label": "B cell activation involved in immune response",
      "score": 0.05101,
      "direct_score": 0.0,
      "propagated_score": 0.0686,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0035708",
      "best_source_term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035708"
      ],
      "supporting_source_term_labels": [
        "interleukin-4-dependent isotype switching to IgE isotypes"
      ],
      "supporting_source_node_names": [
        "Type 2 Immune Response / Th2 Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002312" } }));
