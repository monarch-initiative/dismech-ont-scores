window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0005200"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0005200",
  "term_label": "Retroperitoneal fibrosis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Erdheim-Chester Disease",
      "disease_term_id": "MONDO:0018153",
      "source_file": "Erdheim-Chester_Disease.yaml",
      "term_id": "HP:0005200",
      "term_label": "Retroperitoneal fibrosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0005200",
      "best_source_term_label": "Retroperitoneal fibrosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005200"
      ],
      "supporting_source_term_labels": [
        "Retroperitoneal fibrosis"
      ],
      "supporting_source_node_names": [
        "Retroperitoneal Fibrosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "IgG4-Related Disease",
      "disease_term_id": "MONDO:0017287",
      "source_file": "IgG4-Related_Disease.yaml",
      "term_id": "HP:0005200",
      "term_label": "Retroperitoneal fibrosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0005200",
      "best_source_term_label": "Retroperitoneal fibrosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005200"
      ],
      "supporting_source_term_labels": [
        "Retroperitoneal fibrosis"
      ],
      "supporting_source_node_names": [
        "Retroperitoneal Fibrosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0005200" } }));
