window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032984"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032984",
  "term_label": "protein-containing complex disassembly",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.337693,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Alzheimer Disease",
      "disease_term_id": "MONDO:0004975",
      "source_file": "Alzheimer_Disease.yaml",
      "term_id": "GO:0032984",
      "term_label": "protein-containing complex disassembly",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0007019",
      "best_source_term_label": "microtubule depolymerization",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007019"
      ],
      "supporting_source_term_labels": [
        "microtubule depolymerization"
      ],
      "supporting_source_node_names": [
        "Neurofibrillary Tangle Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Danon disease",
      "disease_term_id": "MONDO:0010281",
      "source_file": "Danon_disease.yaml",
      "term_id": "GO:0032984",
      "term_label": "protein-containing complex disassembly",
      "score": 0.239499,
      "direct_score": 0.0,
      "propagated_score": 0.269231,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0097352",
      "best_source_term_label": "autophagosome maturation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0097352"
      ],
      "supporting_source_term_labels": [
        "autophagosome maturation"
      ],
      "supporting_source_node_names": [
        "Impaired autophagosome-lysosome fusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032984" } }));
