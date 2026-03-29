window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050863"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050863",
  "term_label": "regulation of T cell activation",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.483966,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Non-Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0005233",
      "source_file": "Non-Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0050863",
      "term_label": "regulation of T cell activation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0050863",
      "best_source_term_label": "regulation of T cell activation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050863"
      ],
      "supporting_source_term_labels": [
        "regulation of T cell activation"
      ],
      "supporting_source_node_names": [
        "Tumor Microenvironment Remodeling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hepatitis B",
      "disease_term_id": "MONDO:0005344",
      "source_file": "Hepatitis_B.yaml",
      "term_id": "GO:0050863",
      "term_label": "regulation of T cell activation",
      "score": 0.360924,
      "direct_score": 0.0,
      "propagated_score": 0.4375,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050868",
      "best_source_term_label": "negative regulation of T cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050868"
      ],
      "supporting_source_term_labels": [
        "negative regulation of T cell activation"
      ],
      "supporting_source_node_names": [
        "Immune Evasion and T Cell Exhaustion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "GO:0050863",
      "term_label": "regulation of T cell activation",
      "score": 0.090975,
      "direct_score": 0.0,
      "propagated_score": 0.110277,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045580",
      "best_source_term_label": "regulation of T cell differentiation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045580"
      ],
      "supporting_source_term_labels": [
        "regulation of T cell differentiation"
      ],
      "supporting_source_node_names": [
        "Dendritic-cell and T-cell adaptive immune phase"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050863" } }));
