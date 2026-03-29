window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006260"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006260",
  "term_label": "DNA replication",
  "disease_count": 5,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.441724,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "TARP syndrome",
      "disease_term_id": "MONDO:0010711",
      "source_file": "TARP_syndrome.yaml",
      "term_id": "GO:0006260",
      "term_label": "DNA replication",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0006260",
      "best_source_term_label": "DNA replication",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006260"
      ],
      "supporting_source_term_labels": [
        "DNA replication"
      ],
      "supporting_source_node_names": [
        "RBM10 splicing-independent replication fork dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Parvovirus B19 Infection",
      "disease_term_id": "MONDO:0006544",
      "source_file": "Parvovirus_B19_Infection.yaml",
      "term_id": "GO:0006260",
      "term_label": "DNA replication",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0006260",
      "best_source_term_label": "DNA replication",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006260"
      ],
      "supporting_source_term_labels": [
        "DNA replication"
      ],
      "supporting_source_node_names": [
        "Viral Replication"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "GO:0006260",
      "term_label": "DNA replication",
      "score": 0.260254,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0045005",
      "best_source_term_label": "DNA-templated DNA replication maintenance of fidelity",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0045005"
      ],
      "supporting_source_term_labels": [
        "DNA-templated DNA replication maintenance of fidelity"
      ],
      "supporting_source_node_names": [
        "DNA Mismatch Repair Deficiency",
        "Microsatellite Instability"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "GO:0006260",
      "term_label": "DNA replication",
      "score": 0.242904,
      "direct_score": 0.0,
      "propagated_score": 0.326667,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0006264",
      "best_source_term_label": "mitochondrial DNA replication",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006264"
      ],
      "supporting_source_term_labels": [
        "mitochondrial DNA replication"
      ],
      "supporting_source_node_names": [
        "Mitochondrial DNA Maintenance Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0006260",
      "term_label": "DNA replication",
      "score": 0.205464,
      "direct_score": 0.0,
      "propagated_score": 0.276316,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0019985",
      "best_source_term_label": "translesion synthesis",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0019985"
      ],
      "supporting_source_term_labels": [
        "translesion synthesis"
      ],
      "supporting_source_node_names": [
        "PCNA Monoubiquitination and ICL Pathway Choice",
        "Translesion Synthesis Defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006260" } }));
