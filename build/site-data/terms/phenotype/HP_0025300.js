window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025300"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025300",
  "term_label": "Malar rash",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.9,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "HP:0025300",
      "term_label": "Malar rash",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025300",
      "best_source_term_label": "Malar rash",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025300"
      ],
      "supporting_source_term_labels": [
        "Malar rash"
      ],
      "supporting_source_node_names": [
        "Malar Rash"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Parvovirus B19 Infection",
      "disease_term_id": "MONDO:0006544",
      "source_file": "Parvovirus_B19_Infection.yaml",
      "term_id": "HP:0025300",
      "term_label": "Malar rash",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025300",
      "best_source_term_label": "Malar rash",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025300"
      ],
      "supporting_source_term_labels": [
        "Malar rash"
      ],
      "supporting_source_node_names": [
        "Slapped Cheek Rash"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025300" } }));
