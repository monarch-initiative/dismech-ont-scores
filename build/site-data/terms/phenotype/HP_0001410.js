window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001410"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001410",
  "term_label": "Decreased liver function",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 0.520508,
  "mean_score": 0.411604,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Ornithine Carbamoyltransferase Deficiency",
      "disease_term_id": "MONDO:0010703",
      "source_file": "Ornithine_Carbamoyltransferase_Deficiency.yaml",
      "term_id": "HP:0001410",
      "term_label": "Decreased liver function",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0001399",
      "best_source_term_label": "Hepatic failure",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001399"
      ],
      "supporting_source_term_labels": [
        "Hepatic failure"
      ],
      "supporting_source_node_names": [
        "Hepatic failure"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ebola Virus Disease (EVD)",
      "disease_term_id": "MONDO:0005737",
      "source_file": "Ebola_Virus_Disease_EVD.yaml",
      "term_id": "HP:0001410",
      "term_label": "Decreased liver function",
      "score": 0.444444,
      "direct_score": 0.444444,
      "propagated_score": 0.444444,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0001410",
      "best_source_term_label": "Decreased liver function",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001410"
      ],
      "supporting_source_term_labels": [
        "Decreased liver function"
      ],
      "supporting_source_node_names": [
        "Impaired Liver Function"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "3-Hydroxy-3-Methylglutaric Aciduria",
      "disease_term_id": "MONDO:0009520",
      "source_file": "3-Hydroxy-3-Methylglutaric_Aciduria.yaml",
      "term_id": "HP:0001410",
      "term_label": "Decreased liver function",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0006554",
      "best_source_term_label": "Acute hepatic failure",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006554"
      ],
      "supporting_source_term_labels": [
        "Acute hepatic failure"
      ],
      "supporting_source_node_names": [
        "Acute liver failure"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "HP:0001410",
      "term_label": "Decreased liver function",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0006554",
      "best_source_term_label": "Acute hepatic failure",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006554"
      ],
      "supporting_source_term_labels": [
        "Acute hepatic failure"
      ],
      "supporting_source_node_names": [
        "Acute liver failure"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "HP:0001410",
      "term_label": "Decreased liver function",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0006554",
      "best_source_term_label": "Acute hepatic failure",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006554"
      ],
      "supporting_source_term_labels": [
        "Acute hepatic failure"
      ],
      "supporting_source_node_names": [
        "Acute Hepatic Failure"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001410" } }));
