window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006865"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006865",
  "term_label": "amino acid transport",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.364356,
  "mean_score": 0.217785,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Citrin Deficiency",
      "disease_term_id": "MONDO:0016602",
      "source_file": "Citrin_Deficiency.yaml",
      "term_id": "GO:0006865",
      "term_label": "amino acid transport",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0015810",
      "best_source_term_label": "aspartate transmembrane transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015810"
      ],
      "supporting_source_term_labels": [
        "aspartate transmembrane transport"
      ],
      "supporting_source_node_names": [
        "Aspartate and glutamate transmembrane transport disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "GO:0006865",
      "term_label": "amino acid transport",
      "score": 0.333125,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0015804",
      "best_source_term_label": "neutral amino acid transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015804"
      ],
      "supporting_source_term_labels": [
        "neutral amino acid transport"
      ],
      "supporting_source_node_names": [
        "Competitive Large Neutral Amino Acid Transport at the Blood-Brain Barrier"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Maple Syrup Urine Disease",
      "disease_term_id": "MONDO:0009563",
      "source_file": "Maple_Syrup_Urine_Disease.yaml",
      "term_id": "GO:0006865",
      "term_label": "amino acid transport",
      "score": 0.136527,
      "direct_score": 0.0,
      "propagated_score": 0.183607,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0015804",
      "best_source_term_label": "neutral amino acid transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015804"
      ],
      "supporting_source_term_labels": [
        "neutral amino acid transport"
      ],
      "supporting_source_node_names": [
        "Blood-Brain Barrier Transport Competition"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0006865",
      "term_label": "amino acid transport",
      "score": 0.133464,
      "direct_score": 0.0,
      "propagated_score": 0.179487,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0015827",
      "best_source_term_label": "tryptophan transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015827"
      ],
      "supporting_source_term_labels": [
        "tryptophan transport"
      ],
      "supporting_source_node_names": [
        "Serotonin Depletion Mechanisms"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CACNA1A-Related Disorder",
      "disease_term_id": "MONDO:0100254",
      "source_file": "CACNA1A_Related_Disorder.yaml",
      "term_id": "GO:0006865",
      "term_label": "amino acid transport",
      "score": 0.121452,
      "direct_score": 0.0,
      "propagated_score": 0.163333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0014047",
      "best_source_term_label": "glutamate secretion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0014047"
      ],
      "supporting_source_term_labels": [
        "glutamate secretion"
      ],
      "supporting_source_node_names": [
        "Cortical Spreading Depression in FHM1"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006865" } }));
