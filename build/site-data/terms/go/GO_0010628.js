window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0010628"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0010628",
  "term_label": "positive regulation of gene expression",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 0.8,
  "mean_score": 0.508452,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Medulloblastoma, SHH-Activated",
      "disease_term_id": "MONDO:0850197",
      "source_file": "Medulloblastoma_SHH_Activated.yaml",
      "term_id": "GO:0010628",
      "term_label": "positive regulation of gene expression",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0010628",
      "best_source_term_label": "positive regulation of gene expression",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0010628"
      ],
      "supporting_source_term_labels": [
        "positive regulation of gene expression"
      ],
      "supporting_source_node_names": [
        "GLI Transcription Factor Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Medulloblastoma, WNT-Activated",
      "disease_term_id": "MONDO:0850196",
      "source_file": "Medulloblastoma_WNT_Activated.yaml",
      "term_id": "GO:0010628",
      "term_label": "positive regulation of gene expression",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0010628",
      "best_source_term_label": "positive regulation of gene expression",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0010628"
      ],
      "supporting_source_term_labels": [
        "positive regulation of gene expression"
      ],
      "supporting_source_node_names": [
        "WNT Target Gene Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "GO:0010628",
      "term_label": "positive regulation of gene expression",
      "score": 0.370414,
      "direct_score": 0.0,
      "propagated_score": 0.475418,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0032741",
      "best_source_term_label": "positive regulation of interleukin-18 production",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032731",
        "GO:0032741"
      ],
      "supporting_source_term_labels": [
        "positive regulation of interleukin-1 beta production",
        "positive regulation of interleukin-18 production"
      ],
      "supporting_source_node_names": [
        "Excessive IL-18 production",
        "Excessive IL-1beta production"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Leptospirosis",
      "disease_term_id": "MONDO:0005825",
      "source_file": "Leptospirosis.yaml",
      "term_id": "GO:0010628",
      "term_label": "positive regulation of gene expression",
      "score": 0.223393,
      "direct_score": 0.0,
      "propagated_score": 0.28672,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0001819",
      "best_source_term_label": "positive regulation of cytokine production",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001819"
      ],
      "supporting_source_term_labels": [
        "positive regulation of cytokine production"
      ],
      "supporting_source_node_names": [
        "Cytokine and chemokine upregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0010628" } }));
