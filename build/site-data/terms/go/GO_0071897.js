window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071897"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071897",
  "term_label": "DNA biosynthetic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.319132,
  "mean_score": 0.227852,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0071897",
      "term_label": "DNA biosynthetic process",
      "score": 0.319132,
      "direct_score": 0.0,
      "propagated_score": 0.386842,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0019985",
      "best_source_term_label": "translesion synthesis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019985"
      ],
      "supporting_source_term_labels": [
        "translesion synthesis"
      ],
      "supporting_source_node_names": [
        "PCNA Monoubiquitination and ICL Pathway Choice",
        "Translesion Synthesis Defect"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Glioblastoma, IDH-Wildtype",
      "disease_term_id": "MONDO:0850335",
      "source_file": "Glioblastoma_IDH_Wildtype.yaml",
      "term_id": "GO:0071897",
      "term_label": "DNA biosynthetic process",
      "score": 0.229679,
      "direct_score": 0.0,
      "propagated_score": 0.278409,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0007004",
      "best_source_term_label": "telomere maintenance via telomerase",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007004"
      ],
      "supporting_source_term_labels": [
        "telomere maintenance via telomerase"
      ],
      "supporting_source_node_names": [
        "TERT Promoter Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Acquired Immunodeficiency Syndrome",
      "disease_term_id": "MONDO:0012268",
      "source_file": "Acquired_Immunodeficiency_Syndrome.yaml",
      "term_id": "GO:0071897",
      "term_label": "DNA biosynthetic process",
      "score": 0.134745,
      "direct_score": 0.0,
      "propagated_score": 0.163333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0001171",
      "best_source_term_label": "reverse transcription",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001171"
      ],
      "supporting_source_term_labels": [
        "reverse transcription"
      ],
      "supporting_source_node_names": [
        "CD4 T-cell Depletion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071897" } }));
