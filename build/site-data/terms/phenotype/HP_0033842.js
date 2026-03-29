window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033842"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033842",
  "term_label": "Early satiety",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Gastric Cancer H. pylori Associated",
      "disease_term_id": "MONDO:0004950",
      "source_file": "Gastric_Cancer_H_pylori_Associated.yaml",
      "term_id": "HP:0033842",
      "term_label": "Early satiety",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0033842",
      "best_source_term_label": "Early satiety",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033842"
      ],
      "supporting_source_term_labels": [
        "Early satiety"
      ],
      "supporting_source_node_names": [
        "Early Satiety"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Congestive Splenomegaly",
      "disease_term_id": "MONDO:0037251",
      "source_file": "Congestive_Splenomegaly.yaml",
      "term_id": "HP:0033842",
      "term_label": "Early satiety",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0033842",
      "best_source_term_label": "Early satiety",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033842"
      ],
      "supporting_source_term_labels": [
        "Early satiety"
      ],
      "supporting_source_node_names": [
        "Early Satiety"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033842" } }));
