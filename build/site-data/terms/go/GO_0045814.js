window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0045814"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0045814",
  "term_label": "negative regulation of gene expression, epigenetic",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.756,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Diffuse Midline Glioma, H3 K27-Altered",
      "disease_term_id": "MONDO:1060171",
      "source_file": "H3_K27_Altered_Diffuse_Midline_Glioma.yaml",
      "term_id": "GO:0045814",
      "term_label": "negative regulation of gene expression, epigenetic",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0045814",
      "best_source_term_label": "negative regulation of gene expression, epigenetic",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0045814",
      "term_label": "negative regulation of gene expression, epigenetic",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0045814",
      "best_source_term_label": "negative regulation of gene expression, epigenetic",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0045814" } }));
