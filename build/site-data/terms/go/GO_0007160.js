window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007160"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007160",
  "term_label": "cell-matrix adhesion",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.777778,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "GO:0007160",
      "term_label": "cell-matrix adhesion",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007160",
      "best_source_term_label": "cell-matrix adhesion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007160"
      ],
      "supporting_source_term_labels": [
        "cell-matrix adhesion"
      ],
      "supporting_source_node_names": [
        "Defective Anchoring Fibrils and Loss of Dermal-Epidermal Adhesion",
        "Esophageal and Mucosal Blistering"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "GO:0007160",
      "term_label": "cell-matrix adhesion",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007160",
      "best_source_term_label": "cell-matrix adhesion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007160",
        "GO:0048041"
      ],
      "supporting_source_term_labels": [
        "cell-matrix adhesion",
        "focal adhesion assembly"
      ],
      "supporting_source_node_names": [
        "Defective Focal Adhesion and Integrin Activation",
        "Mucosal Involvement"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Junctional Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0017612",
      "source_file": "Junctional_Epidermolysis_Bullosa.yaml",
      "term_id": "GO:0007160",
      "term_label": "cell-matrix adhesion",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007160",
      "best_source_term_label": "cell-matrix adhesion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007160"
      ],
      "supporting_source_term_labels": [
        "cell-matrix adhesion"
      ],
      "supporting_source_node_names": [
        "Integrin Alpha-6-Beta-4 Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007160" } }));
