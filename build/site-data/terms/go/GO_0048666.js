window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048666"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048666",
  "term_label": "neuron development",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.574213,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0048666",
      "term_label": "neuron development",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0048666",
      "best_source_term_label": "neuron development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048666"
      ],
      "supporting_source_term_labels": [
        "neuron development"
      ],
      "supporting_source_node_names": [
        "Postnatal neurogenesis deficit"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Spinal Muscular Atrophy",
      "disease_term_id": "MONDO:0001516",
      "source_file": "Spinal_Muscular_Atrophy.yaml",
      "term_id": "GO:0048666",
      "term_label": "neuron development",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0048666",
      "best_source_term_label": "neuron development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048666"
      ],
      "supporting_source_term_labels": [
        "neuron development"
      ],
      "supporting_source_node_names": [
        "SMN Protein Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0048666",
      "term_label": "neuron development",
      "score": 0.199458,
      "direct_score": 0.0,
      "propagated_score": 0.256,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0031175",
      "best_source_term_label": "neuron projection development",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0031175"
      ],
      "supporting_source_term_labels": [
        "neuron projection development"
      ],
      "supporting_source_node_names": [
        "Peripheral Nerve Axonopathy"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "ATTR_Amyloidosis",
      "disease_term_id": "MONDO:0007100",
      "source_file": "ATTR_Amyloidosis.yaml",
      "term_id": "GO:0048666",
      "term_label": "neuron development",
      "score": 0.097392,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007409",
      "best_source_term_label": "axonogenesis",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0007409"
      ],
      "supporting_source_term_labels": [
        "axonogenesis"
      ],
      "supporting_source_node_names": [
        "Peripheral Nerve Degeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048666" } }));
