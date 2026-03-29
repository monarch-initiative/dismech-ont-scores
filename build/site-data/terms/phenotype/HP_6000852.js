window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:6000852"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:6000852",
  "term_label": "Megacolon",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Clostridioides difficile Infection",
      "disease_term_id": "MONDO:0000705",
      "source_file": "Clostridioides_difficile_Infection.yaml",
      "term_id": "HP:6000852",
      "term_label": "Megacolon",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:6000852",
      "best_source_term_label": "Megacolon",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6000852"
      ],
      "supporting_source_term_labels": [
        "Megacolon"
      ],
      "supporting_source_node_names": [
        "Toxic megacolon"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "HP:6000852",
      "term_label": "Megacolon",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:6000852",
      "best_source_term_label": "Megacolon",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6000852"
      ],
      "supporting_source_term_labels": [
        "Megacolon"
      ],
      "supporting_source_node_names": [
        "Megacolon"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:6000852" } }));
