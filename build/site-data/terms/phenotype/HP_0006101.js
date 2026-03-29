window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006101"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006101",
  "term_label": "Finger syndactyly",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.662359,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Pfeiffer Syndrome",
      "disease_term_id": "MONDO:0007043",
      "source_file": "Pfeiffer_Syndrome.yaml",
      "term_id": "HP:0006101",
      "term_label": "Finger syndactyly",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0006101",
      "best_source_term_label": "Finger syndactyly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006101"
      ],
      "supporting_source_term_labels": [
        "Finger syndactyly"
      ],
      "supporting_source_node_names": [
        "Partial Syndactyly"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0006101",
      "term_label": "Finger syndactyly",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0010554",
      "best_source_term_label": "Cutaneous finger syndactyly",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010554"
      ],
      "supporting_source_term_labels": [
        "Cutaneous finger syndactyly"
      ],
      "supporting_source_node_names": [
        "Pseudosyndactyly"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Apert Syndrome",
      "disease_term_id": "MONDO:0007041",
      "source_file": "Apert_Syndrome.yaml",
      "term_id": "HP:0006101",
      "term_label": "Finger syndactyly",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0006101",
      "best_source_term_label": "Finger syndactyly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006101"
      ],
      "supporting_source_term_labels": [
        "Finger syndactyly"
      ],
      "supporting_source_node_names": [
        "Syndactyly of Hands"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006101" } }));
