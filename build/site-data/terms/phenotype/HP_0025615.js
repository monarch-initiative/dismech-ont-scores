window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025615"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025615",
  "term_label": "Abscess",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.709012,
  "mean_score": 0.422408,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Polycystic echinococcosis",
      "disease_term_id": "MONDO:0000288",
      "source_file": "Polycystic_Echinococcosis.yaml",
      "term_id": "HP:0025615",
      "term_label": "Abscess",
      "score": 0.709012,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0100523",
      "best_source_term_label": "Liver abscess",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025044",
        "HP:0100523"
      ],
      "supporting_source_term_labels": [
        "Liver abscess",
        "Lung abscess"
      ],
      "supporting_source_node_names": [
        "Hepatic abscess complication",
        "Thoracic abscess from hepatic fistula"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "X-Linked Hypophosphatemia",
      "disease_term_id": "MONDO:0010619",
      "source_file": "X-Linked_Hypophosphatemia.yaml",
      "term_id": "HP:0025615",
      "term_label": "Abscess",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0030757",
      "best_source_term_label": "Tooth abscess",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030757"
      ],
      "supporting_source_term_labels": [
        "Tooth abscess"
      ],
      "supporting_source_node_names": [
        "Dental Abscesses"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "HP:0025615",
      "term_label": "Abscess",
      "score": 0.244337,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0100838",
      "best_source_term_label": "Recurrent cutaneous abscess formation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "HP:0025615",
      "term_label": "Abscess",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0009789",
      "best_source_term_label": "Perianal abscess",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025615" } }));
