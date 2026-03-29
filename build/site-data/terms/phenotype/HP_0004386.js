window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004386"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004386",
  "term_label": "Gastrointestinal inflammation",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.31665,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Clostridioides difficile Infection",
      "disease_term_id": "MONDO:0000705",
      "source_file": "Clostridioides_difficile_Infection.yaml",
      "term_id": "HP:0004386",
      "term_label": "Gastrointestinal inflammation",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002583",
      "best_source_term_label": "Colitis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002583"
      ],
      "supporting_source_term_labels": [
        "Colitis"
      ],
      "supporting_source_node_names": [
        "Pseudomembranous colitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0004386",
      "term_label": "Gastrointestinal inflammation",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002583",
      "best_source_term_label": "Colitis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002583"
      ],
      "supporting_source_term_labels": [
        "Colitis"
      ],
      "supporting_source_node_names": [
        "Colitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "HP:0004386",
      "term_label": "Gastrointestinal inflammation",
      "score": 0.141482,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0004387",
      "best_source_term_label": "Enterocolitis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004387"
      ],
      "supporting_source_term_labels": [
        "Enterocolitis"
      ],
      "supporting_source_node_names": [
        "Enterocolitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004386" } }));
