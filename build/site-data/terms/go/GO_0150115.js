window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0150115"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0150115",
  "term_label": "cell-substrate junction organization",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.575806,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Epidermolysis Bullosa Simplex",
      "disease_term_id": "MONDO:0017610",
      "source_file": "Epidermolysis_Bullosa_Simplex.yaml",
      "term_id": "GO:0150115",
      "term_label": "cell-substrate junction organization",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0150115",
      "best_source_term_label": "cell-substrate junction organization",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0150115"
      ],
      "supporting_source_term_labels": [
        "cell-substrate junction organization"
      ],
      "supporting_source_node_names": [
        "PLEC Mutations Disrupt Hemidesmosome-Cytoskeleton Linkage"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "GO:0150115",
      "term_label": "cell-substrate junction organization",
      "score": 0.151613,
      "direct_score": 0.0,
      "propagated_score": 0.170435,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0048041",
      "best_source_term_label": "focal adhesion assembly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048041"
      ],
      "supporting_source_term_labels": [
        "focal adhesion assembly"
      ],
      "supporting_source_node_names": [
        "Defective Focal Adhesion and Integrin Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0150115" } }));
