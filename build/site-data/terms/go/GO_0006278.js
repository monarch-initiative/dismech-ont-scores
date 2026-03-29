window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006278"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006278",
  "term_label": "RNA-templated DNA biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.353805,
  "mean_score": 0.280685,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glioblastoma, IDH-Wildtype",
      "disease_term_id": "MONDO:0850335",
      "source_file": "Glioblastoma_IDH_Wildtype.yaml",
      "term_id": "GO:0006278",
      "term_label": "RNA-templated DNA biosynthetic process",
      "score": 0.353805,
      "direct_score": 0.0,
      "propagated_score": 0.397727,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0007004",
      "best_source_term_label": "telomere maintenance via telomerase",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0006278",
      "term_label": "RNA-templated DNA biosynthetic process",
      "score": 0.207566,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0001171",
      "best_source_term_label": "reverse transcription",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006278" } }));
