window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0031214"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0031214",
  "term_label": "biomineral tissue development",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.357181,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Osteogenesis Imperfecta Type V",
      "disease_term_id": "MONDO:0012591",
      "source_file": "Osteogenesis_Imperfecta_Type_V.yaml",
      "term_id": "GO:0031214",
      "term_label": "biomineral tissue development",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030282",
      "best_source_term_label": "bone mineralization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030282"
      ],
      "supporting_source_term_labels": [
        "bone mineralization"
      ],
      "supporting_source_node_names": [
        "IFITM5 Gain-of-Function"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "GO:0031214",
      "term_label": "biomineral tissue development",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030282",
      "best_source_term_label": "bone mineralization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030282"
      ],
      "supporting_source_term_labels": [
        "bone mineralization"
      ],
      "supporting_source_node_names": [
        "Endocrine-mediated calvarial bone overgrowth"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0031214",
      "term_label": "biomineral tissue development",
      "score": 0.205325,
      "direct_score": 0.0,
      "propagated_score": 0.248889,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030282",
      "best_source_term_label": "bone mineralization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030282"
      ],
      "supporting_source_term_labels": [
        "bone mineralization"
      ],
      "supporting_source_node_names": [
        "Defective Bone Mineralization"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0031214" } }));
