window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002860"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002860",
  "term_label": "Squamous cell carcinoma",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.682697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0002860",
      "term_label": "Squamous cell carcinoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0002860",
      "best_source_term_label": "Squamous cell carcinoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002860"
      ],
      "supporting_source_term_labels": [
        "Squamous cell carcinoma"
      ],
      "supporting_source_node_names": [
        "Squamous Cell Carcinoma Risk"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0002860",
      "term_label": "Squamous cell carcinoma",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0002860",
      "best_source_term_label": "Squamous cell carcinoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002860"
      ],
      "supporting_source_term_labels": [
        "Squamous cell carcinoma"
      ],
      "supporting_source_node_names": [
        "Squamous Cell Carcinoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cutaneous Squamous Cell Carcinoma",
      "disease_term_id": "MONDO:0002529",
      "source_file": "Cutaneous_Squamous_Cell_Carcinoma.yaml",
      "term_id": "HP:0002860",
      "term_label": "Squamous cell carcinoma",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0006739",
      "best_source_term_label": "Squamous cell carcinoma of the skin",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006739"
      ],
      "supporting_source_term_labels": [
        "Squamous cell carcinoma of the skin"
      ],
      "supporting_source_node_names": [
        "Squamous Cell Carcinoma of the Skin"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0002860",
      "term_label": "Squamous cell carcinoma",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0006739",
      "best_source_term_label": "Squamous cell carcinoma of the skin",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006739"
      ],
      "supporting_source_term_labels": [
        "Squamous cell carcinoma of the skin"
      ],
      "supporting_source_node_names": [
        "Cutaneous Squamous Cell Carcinoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002860" } }));
