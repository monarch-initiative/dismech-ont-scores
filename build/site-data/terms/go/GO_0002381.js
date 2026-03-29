window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002381"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002381",
  "term_label": "immunoglobulin production involved in immunoglobulin-mediated immune response",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.076355,
  "mean_score": 0.045519,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "GO:0002381",
      "term_label": "immunoglobulin production involved in immunoglobulin-mediated immune response",
      "score": 0.076355,
      "direct_score": 0.0,
      "propagated_score": 0.098,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0045190",
      "best_source_term_label": "isotype switching",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "disorder_name": "Common Variable Immunodeficiency",
      "disease_term_id": "MONDO:0015517",
      "source_file": "Common_Variable_Immunodeficiency.yaml",
      "term_id": "GO:0002381",
      "term_label": "immunoglobulin production involved in immunoglobulin-mediated immune response",
      "score": 0.063629,
      "direct_score": 0.0,
      "propagated_score": 0.081667,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0045190",
      "best_source_term_label": "isotype switching",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "GO:0002381",
      "term_label": "immunoglobulin production involved in immunoglobulin-mediated immune response",
      "score": 0.023384,
      "direct_score": 0.0,
      "propagated_score": 0.030012,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0035708",
      "best_source_term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "best_source_path_score": 0.12005,
      "best_source_path": "is_a > is_a > is_a > is_a > part_of",
      "best_path_hops": 5,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "GO:0002381",
      "term_label": "immunoglobulin production involved in immunoglobulin-mediated immune response",
      "score": 0.018707,
      "direct_score": 0.0,
      "propagated_score": 0.02401,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0035708",
      "best_source_term_label": "interleukin-4-dependent isotype switching to IgE isotypes",
      "best_source_path_score": 0.12005,
      "best_source_path": "is_a > is_a > is_a > is_a > part_of",
      "best_path_hops": 5,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002381" } }));
