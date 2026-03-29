window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002562"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002562",
  "term_label": "somatic diversification of immune receptors via germline recombination within a single locus",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.295124,
  "mean_score": 0.110783,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "GO:0002562",
      "term_label": "somatic diversification of immune receptors via germline recombination within a single locus",
      "score": 0.295124,
      "direct_score": 0.0,
      "propagated_score": 0.378784,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0033151",
      "best_source_term_label": "V(D)J recombination",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0033151",
        "GO:0045190"
      ],
      "supporting_source_term_labels": [
        "V(D)J recombination",
        "isotype switching"
      ],
      "supporting_source_node_names": [
        "Combined immunodeficiency with lymphocyte depletion and dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Common Variable Immunodeficiency",
      "disease_term_id": "MONDO:0015517",
      "source_file": "Common_Variable_Immunodeficiency.yaml",
      "term_id": "GO:0002562",
      "term_label": "somatic diversification of immune receptors via germline recombination within a single locus",
      "score": 0.089081,
      "direct_score": 0.0,
      "propagated_score": 0.114333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0045190",
      "best_source_term_label": "isotype switching",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "term_id": "GO:0002562",
      "term_label": "somatic diversification of immune receptors via germline recombination within a single locus",
      "score": 0.032737,
      "direct_score": 0.0,
      "propagated_score": 0.042018,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0035708",
      "best_source_term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
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
      "term_id": "GO:0002562",
      "term_label": "somatic diversification of immune receptors via germline recombination within a single locus",
      "score": 0.02619,
      "direct_score": 0.0,
      "propagated_score": 0.033614,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0035708",
      "best_source_term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002562" } }));
