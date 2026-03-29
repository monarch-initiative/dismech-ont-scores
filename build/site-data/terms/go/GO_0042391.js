window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042391"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042391",
  "term_label": "regulation of membrane potential",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 0.4,
  "mean_score": 0.302084,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Angelman Syndrome",
      "disease_term_id": "MONDO:0007113",
      "source_file": "Angelman_Syndrome.yaml",
      "term_id": "GO:0042391",
      "term_label": "regulation of membrane potential",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0042391",
      "best_source_term_label": "regulation of membrane potential",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042391"
      ],
      "supporting_source_term_labels": [
        "regulation of membrane potential"
      ],
      "supporting_source_node_names": [
        "Disrupted neuronal excitability homeostasis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Atrial Fibrillation",
      "disease_term_id": "MONDO:0004981",
      "source_file": "Atrial_Fibrillation.yaml",
      "term_id": "GO:0042391",
      "term_label": "regulation of membrane potential",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0086001",
      "best_source_term_label": "cardiac muscle cell action potential",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0086001"
      ],
      "supporting_source_term_labels": [
        "cardiac muscle cell action potential"
      ],
      "supporting_source_node_names": [
        "Atrial Electrical Remodeling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dravet_syndrome",
      "disease_term_id": "MONDO:0100135",
      "source_file": "Dravet_syndrome.yaml",
      "term_id": "GO:0042391",
      "term_label": "regulation of membrane potential",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0019228",
      "best_source_term_label": "neuronal action potential",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019228"
      ],
      "supporting_source_term_labels": [
        "neuronal action potential"
      ],
      "supporting_source_node_names": [
        "SCN1A Gene Mutation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Fabry disease",
      "disease_term_id": "MONDO:0010526",
      "source_file": "Fabry_Disease.yaml",
      "term_id": "GO:0042391",
      "term_label": "regulation of membrane potential",
      "score": 0.260254,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0051881",
      "best_source_term_label": "regulation of mitochondrial membrane potential",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051881"
      ],
      "supporting_source_term_labels": [
        "regulation of mitochondrial membrane potential"
      ],
      "supporting_source_node_names": [
        "Mitochondrial dysfunction and oxidative stress"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Huntington's Disease",
      "disease_term_id": "MONDO:0007739",
      "source_file": "Huntingtons_Disease.yaml",
      "term_id": "GO:0042391",
      "term_label": "regulation of membrane potential",
      "score": 0.121452,
      "direct_score": 0.0,
      "propagated_score": 0.163333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0060079",
      "best_source_term_label": "excitatory postsynaptic potential",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0060079"
      ],
      "supporting_source_term_labels": [
        "excitatory postsynaptic potential"
      ],
      "supporting_source_node_names": [
        "Excitotoxicity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042391" } }));
