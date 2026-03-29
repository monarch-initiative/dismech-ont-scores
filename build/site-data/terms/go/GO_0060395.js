window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060395"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060395",
  "term_label": "SMAD protein signal transduction",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.8,
  "mean_score": 0.65,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "GO:0060395",
      "term_label": "SMAD protein signal transduction",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0060395",
      "best_source_term_label": "SMAD protein signal transduction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060395"
      ],
      "supporting_source_term_labels": [
        "SMAD protein signal transduction"
      ],
      "supporting_source_node_names": [
        "Dysregulated TGF-beta Signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Loeys-Dietz Syndrome",
      "disease_term_id": "MONDO:0018954",
      "source_file": "Loeys-Dietz_Syndrome.yaml",
      "term_id": "GO:0060395",
      "term_label": "SMAD protein signal transduction",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0060395",
      "best_source_term_label": "SMAD protein signal transduction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060395"
      ],
      "supporting_source_term_labels": [
        "SMAD protein signal transduction"
      ],
      "supporting_source_node_names": [
        "Paradoxical TGF-beta Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060395" } }));
