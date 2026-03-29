window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0040071"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0040071",
  "term_label": "Abnormal morphology of ulna",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.51973,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0040071",
      "term_label": "Abnormal morphology of ulna",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0006495",
      "best_source_term_label": "Aplasia/Hypoplasia of the ulna",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006495"
      ],
      "supporting_source_term_labels": [
        "Aplasia/Hypoplasia of the ulna"
      ],
      "supporting_source_node_names": [
        "Ulnar Aplasia or Hypoplasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Osteogenesis Imperfecta Type V",
      "disease_term_id": "MONDO:0012591",
      "source_file": "Osteogenesis_Imperfecta_Type_V.yaml",
      "term_id": "HP:0040071",
      "term_label": "Abnormal morphology of ulna",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002974",
      "best_source_term_label": "Radioulnar synostosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002974"
      ],
      "supporting_source_term_labels": [
        "Radioulnar synostosis"
      ],
      "supporting_source_node_names": [
        "Radioulnar Synostosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ulnar-Mammary Syndrome",
      "disease_term_id": "MONDO:0008411",
      "source_file": "Ulnar-Mammary_Syndrome.yaml",
      "term_id": "HP:0040071",
      "term_label": "Abnormal morphology of ulna",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0003022",
      "best_source_term_label": "Hypoplasia of the ulna",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0040071" } }));
