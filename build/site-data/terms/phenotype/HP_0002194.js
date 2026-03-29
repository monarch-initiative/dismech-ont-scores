window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002194"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002194",
  "term_label": "Delayed gross motor development",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "HP:0002194",
      "term_label": "Delayed gross motor development",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002194",
      "best_source_term_label": "Delayed gross motor development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002194"
      ],
      "supporting_source_term_labels": [
        "Delayed gross motor development"
      ],
      "supporting_source_node_names": [
        "Delayed gross motor development"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "HP:0002194",
      "term_label": "Delayed gross motor development",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002194",
      "best_source_term_label": "Delayed gross motor development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002194"
      ],
      "supporting_source_term_labels": [
        "Delayed gross motor development"
      ],
      "supporting_source_node_names": [
        "Delayed Motor Development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002194" } }));
