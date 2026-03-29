window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1905071"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1905071",
  "term_label": "tight junction disassembly",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.512,
  "mean_score": 0.456,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Giardiasis",
      "disease_term_id": "MONDO:0001103",
      "source_file": "Giardiasis.yaml",
      "term_id": "GO:1905071",
      "term_label": "tight junction disassembly",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:1905071",
      "best_source_term_label": "tight junction disassembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:1905071",
      "term_label": "tight junction disassembly",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:1905071",
      "best_source_term_label": "tight junction disassembly",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1905071" } }));
