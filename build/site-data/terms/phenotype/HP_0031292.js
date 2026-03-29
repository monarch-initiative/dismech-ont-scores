window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031292"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031292",
  "term_label": "Cutaneous abscess",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.398526,
  "mean_score": 0.354938,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "HP:0031292",
      "term_label": "Cutaneous abscess",
      "score": 0.398526,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100838",
      "best_source_term_label": "Recurrent cutaneous abscess formation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100838"
      ],
      "supporting_source_term_labels": [
        "Recurrent cutaneous abscess formation"
      ],
      "supporting_source_node_names": [
        "Recurrent cutaneous abscess formation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "HP:0031292",
      "term_label": "Cutaneous abscess",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0009789",
      "best_source_term_label": "Perianal abscess",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009789"
      ],
      "supporting_source_term_labels": [
        "Perianal abscess"
      ],
      "supporting_source_node_names": [
        "Perianal Fistula"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031292" } }));
