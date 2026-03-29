window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019080"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019080",
  "term_label": "viral gene expression",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.412484,
  "mean_score": 0.412484,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Adult T-Cell Leukemia/Lymphoma",
      "disease_term_id": "MONDO:0019471",
      "source_file": "Adult_T_Cell_Leukemia_Lymphoma.yaml",
      "term_id": "GO:0019080",
      "term_label": "viral gene expression",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0019083",
      "best_source_term_label": "viral transcription",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0019083"
      ],
      "supporting_source_term_labels": [
        "viral transcription"
      ],
      "supporting_source_node_names": [
        "HTLV-1 Infection and Tax Oncoprotein Expression"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "EBV-Associated Gastric Cancer",
      "disease_term_id": "MONDO:0001056",
      "source_file": "EBV_Associated_Gastric_Cancer.yaml",
      "term_id": "GO:0019080",
      "term_label": "viral gene expression",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0019083",
      "best_source_term_label": "viral transcription",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0019083"
      ],
      "supporting_source_term_labels": [
        "viral transcription"
      ],
      "supporting_source_node_names": [
        "EBV Latent Infection of Gastric Epithelium"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Kaposi Sarcoma",
      "disease_term_id": "MONDO:0005055",
      "source_file": "Kaposi_Sarcoma.yaml",
      "term_id": "GO:0019080",
      "term_label": "viral gene expression",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0019083",
      "best_source_term_label": "viral transcription",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0019083"
      ],
      "supporting_source_term_labels": [
        "viral transcription"
      ],
      "supporting_source_node_names": [
        "HHV-8 Latent Infection of Endothelial Cells"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019080" } }));
