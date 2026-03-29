window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009892"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009892",
  "term_label": "negative regulation of metabolic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.198075,
  "mean_score": 0.132182,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Diffuse Midline Glioma, H3 K27-Altered",
      "disease_term_id": "MONDO:1060171",
      "source_file": "H3_K27_Altered_Diffuse_Midline_Glioma.yaml",
      "term_id": "GO:0009892",
      "term_label": "negative regulation of metabolic process",
      "score": 0.198075,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045814",
      "best_source_term_label": "negative regulation of gene expression, epigenetic",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045814"
      ],
      "supporting_source_term_labels": [
        "negative regulation of gene expression, epigenetic"
      ],
      "supporting_source_node_names": [
        "PRC2 Complex Inhibition and H3K27me3 Loss"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0009892",
      "term_label": "negative regulation of metabolic process",
      "score": 0.101414,
      "direct_score": 0.0,
      "propagated_score": 0.122931,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045814",
      "best_source_term_label": "negative regulation of gene expression, epigenetic",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045814"
      ],
      "supporting_source_term_labels": [
        "negative regulation of gene expression, epigenetic"
      ],
      "supporting_source_node_names": [
        "Tumor Suppressor Gene Silencing"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "You-Hoover-Fong Syndrome",
      "disease_term_id": "MONDO:0014848",
      "source_file": "You-Hoover-Fong_Syndrome.yaml",
      "term_id": "GO:0009892",
      "term_label": "negative regulation of metabolic process",
      "score": 0.097057,
      "direct_score": 0.0,
      "propagated_score": 0.117649,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0000184",
      "best_source_term_label": "nuclear-transcribed mRNA catabolic process, nonsense-mediated decay",
      "best_source_path_score": 0.117649,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 6,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000184"
      ],
      "supporting_source_term_labels": [
        "nuclear-transcribed mRNA catabolic process, nonsense-mediated decay"
      ],
      "supporting_source_node_names": [
        "TTT complex dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009892" } }));
