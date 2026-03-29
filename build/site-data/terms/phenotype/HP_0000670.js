window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000670"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000670",
  "term_label": "Carious teeth",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0000670",
      "term_label": "Carious teeth",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000670",
      "best_source_term_label": "Carious teeth",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000670"
      ],
      "supporting_source_term_labels": [
        "Carious teeth"
      ],
      "supporting_source_node_names": [
        "Dental Caries"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Junctional Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0017612",
      "source_file": "Junctional_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0000670",
      "term_label": "Carious teeth",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000670",
      "best_source_term_label": "Carious teeth",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000670"
      ],
      "supporting_source_term_labels": [
        "Carious teeth"
      ],
      "supporting_source_node_names": [
        "Dental Caries"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000670" } }));
