window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002585"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002585",
  "term_label": "Abnormal peritoneum morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.577478,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Erdheim-Chester Disease",
      "disease_term_id": "MONDO:0018153",
      "source_file": "Erdheim-Chester_Disease.yaml",
      "term_id": "HP:0002585",
      "term_label": "Abnormal peritoneum morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005200",
      "best_source_term_label": "Retroperitoneal fibrosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005200"
      ],
      "supporting_source_term_labels": [
        "Retroperitoneal fibrosis"
      ],
      "supporting_source_node_names": [
        "Retroperitoneal Fibrosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Mediterranean Fever",
      "disease_term_id": "MONDO:0018088",
      "source_file": "Familial_Mediterranean_Fever.yaml",
      "term_id": "HP:0002585",
      "term_label": "Abnormal peritoneum morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002586",
      "best_source_term_label": "Peritonitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002586"
      ],
      "supporting_source_term_labels": [
        "Peritonitis"
      ],
      "supporting_source_node_names": [
        "Peritonitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "IgG4-Related Disease",
      "disease_term_id": "MONDO:0017287",
      "source_file": "IgG4-Related_Disease.yaml",
      "term_id": "HP:0002585",
      "term_label": "Abnormal peritoneum morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005200",
      "best_source_term_label": "Retroperitoneal fibrosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005200"
      ],
      "supporting_source_term_labels": [
        "Retroperitoneal fibrosis"
      ],
      "supporting_source_node_names": [
        "Retroperitoneal Fibrosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002585" } }));
