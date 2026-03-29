window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003394"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003394",
  "term_label": "Muscle spasm",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.555681,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Tetanus",
      "disease_term_id": "MONDO:0005526",
      "source_file": "Tetanus.yaml",
      "term_id": "HP:0003394",
      "term_label": "Muscle spasm",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0003394",
      "best_source_term_label": "Muscle spasm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003394"
      ],
      "supporting_source_term_labels": [
        "Muscle spasm"
      ],
      "supporting_source_node_names": [
        "Reflex Spasms"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Stiff Person Syndrome",
      "disease_term_id": "MONDO:0008491",
      "source_file": "Stiff_Person_Syndrome.yaml",
      "term_id": "HP:0003394",
      "term_label": "Muscle spasm",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0011964",
      "best_source_term_label": "Intermittent painful muscle spasms",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011964"
      ],
      "supporting_source_term_labels": [
        "Intermittent painful muscle spasms"
      ],
      "supporting_source_node_names": [
        "Painful Muscle Spasms"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "HP:0003394",
      "term_label": "Muscle spasm",
      "score": 0.398089,
      "direct_score": 0.398089,
      "propagated_score": 0.398089,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0003394",
      "best_source_term_label": "Muscle spasm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003394"
      ],
      "supporting_source_term_labels": [
        "Muscle spasm"
      ],
      "supporting_source_node_names": [
        "Muscle Cramps"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Satoyoshi Syndrome",
      "disease_term_id": "MONDO:0010922",
      "source_file": "Satoyoshi_Syndrome.yaml",
      "term_id": "HP:0003394",
      "term_label": "Muscle spasm",
      "score": 0.279242,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0011964",
      "best_source_term_label": "Intermittent painful muscle spasms",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011964"
      ],
      "supporting_source_term_labels": [
        "Intermittent painful muscle spasms"
      ],
      "supporting_source_node_names": [
        "Painful Muscle Spasms"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003394" } }));
