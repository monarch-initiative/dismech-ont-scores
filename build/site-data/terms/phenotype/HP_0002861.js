window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002861"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002861",
  "term_label": "Melanoma",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.659927,
  "mean_score": 0.574027,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "KIT Mutant Melanoma",
      "disease_term_id": "MONDO:0003865",
      "source_file": "KIT_Mutant_Melanoma.yaml",
      "term_id": "HP:0002861",
      "term_label": "Melanoma",
      "score": 0.659927,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0012056",
      "best_source_term_label": "Cutaneous melanoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012056",
        "HP:0012060"
      ],
      "supporting_source_term_labels": [
        "Acral lentiginous melanoma",
        "Cutaneous melanoma"
      ],
      "supporting_source_node_names": [
        "Acral Lentiginous Melanoma",
        "Cutaneous Melanoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "BRAF V600 Mutant Melanoma",
      "disease_term_id": "MONDO:0005012",
      "source_file": "BRAF_V600_Mutant_Melanoma.yaml",
      "term_id": "HP:0002861",
      "term_label": "Melanoma",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0012056",
      "best_source_term_label": "Cutaneous melanoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012056"
      ],
      "supporting_source_term_labels": [
        "Cutaneous melanoma"
      ],
      "supporting_source_node_names": [
        "Cutaneous Melanoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "NRAS Mutant Melanoma",
      "disease_term_id": "MONDO:0005012",
      "source_file": "NRAS_Mutant_Melanoma.yaml",
      "term_id": "HP:0002861",
      "term_label": "Melanoma",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0012056",
      "best_source_term_label": "Cutaneous melanoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012056"
      ],
      "supporting_source_term_labels": [
        "Cutaneous melanoma"
      ],
      "supporting_source_node_names": [
        "Cutaneous Melanoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Uveal Melanoma",
      "disease_term_id": "MONDO:0006486",
      "source_file": "Uveal_Melanoma.yaml",
      "term_id": "HP:0002861",
      "term_label": "Melanoma",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0007716",
      "best_source_term_label": "Uveal melanoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007716"
      ],
      "supporting_source_term_labels": [
        "Uveal melanoma"
      ],
      "supporting_source_node_names": [
        "Uveal Melanoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002861" } }));
