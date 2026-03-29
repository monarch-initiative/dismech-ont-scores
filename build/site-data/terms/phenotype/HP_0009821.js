window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009821"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009821",
  "term_label": "Forearm undergrowth",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.367584,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Ulnar-Mammary Syndrome",
      "disease_term_id": "MONDO:0008411",
      "source_file": "Ulnar-Mammary_Syndrome.yaml",
      "term_id": "HP:0009821",
      "term_label": "Forearm undergrowth",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0003022",
      "best_source_term_label": "Hypoplasia of the ulna",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003022"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the ulna"
      ],
      "supporting_source_node_names": [
        "Ulnar Ray Deficiency"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Holt-Oram Syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt-Oram_Syndrome.yaml",
      "term_id": "HP:0009821",
      "term_label": "Forearm undergrowth",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002984",
      "best_source_term_label": "Hypoplasia of the radius",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002984"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the radius"
      ],
      "supporting_source_node_names": [
        "Radial Hypoplasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0009821",
      "term_label": "Forearm undergrowth",
      "score": 0.236535,
      "direct_score": 0.0,
      "propagated_score": 0.28672,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002984",
      "best_source_term_label": "Hypoplasia of the radius",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002984"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the radius"
      ],
      "supporting_source_node_names": [
        "Radial Ray Defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009821" } }));
