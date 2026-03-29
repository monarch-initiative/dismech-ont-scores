window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0018126"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0018126",
  "term_label": "protein hydroxylation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Osteogenesis Imperfecta Type VII",
      "disease_term_id": "MONDO:0012536",
      "source_file": "Osteogenesis_Imperfecta_Type_VII.yaml",
      "term_id": "GO:0018126",
      "term_label": "protein hydroxylation",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0018126",
      "best_source_term_label": "protein hydroxylation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0018126"
      ],
      "supporting_source_term_labels": [
        "protein hydroxylation"
      ],
      "supporting_source_node_names": [
        "Collagen 3-Hydroxylation Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0018126" } }));
