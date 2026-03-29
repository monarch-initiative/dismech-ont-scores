window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0150146"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0150146",
  "term_label": "cell junction disassembly",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.288739,
  "mean_score": 0.219134,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "GO:0150146",
      "term_label": "cell junction disassembly",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0098883",
      "best_source_term_label": "synapse pruning",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0098883"
      ],
      "supporting_source_term_labels": [
        "synapse pruning"
      ],
      "supporting_source_node_names": [
        "Complement-Mediated Excessive Synaptic Pruning"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Giardiasis",
      "disease_term_id": "MONDO:0001103",
      "source_file": "Giardiasis.yaml",
      "term_id": "GO:0150146",
      "term_label": "cell junction disassembly",
      "score": 0.206968,
      "direct_score": 0.0,
      "propagated_score": 0.25088,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:1905071",
      "best_source_term_label": "tight junction disassembly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1905071"
      ],
      "supporting_source_term_labels": [
        "tight junction disassembly"
      ],
      "supporting_source_node_names": [
        "Tight-junction disassembly in infected enterocytes"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Campylobacteriosis",
      "disease_term_id": "MONDO:0005688",
      "source_file": "Campylobacteriosis.yaml",
      "term_id": "GO:0150146",
      "term_label": "cell junction disassembly",
      "score": 0.161694,
      "direct_score": 0.0,
      "propagated_score": 0.196,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:1905071",
      "best_source_term_label": "tight junction disassembly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1905071"
      ],
      "supporting_source_term_labels": [
        "tight junction disassembly"
      ],
      "supporting_source_node_names": [
        "HtrA-mediated junctional protein cleavage"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0150146" } }));
