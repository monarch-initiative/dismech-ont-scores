window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008050"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008050",
  "term_label": "Abnormality of the palpebral fissures",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.381776,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Down_syndrome",
      "disease_term_id": "MONDO:0008608",
      "source_file": "Down_syndrome.yaml",
      "term_id": "HP:0008050",
      "term_label": "Abnormality of the palpebral fissures",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000582",
      "best_source_term_label": "Upslanted palpebral fissure",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000582"
      ],
      "supporting_source_term_labels": [
        "Upslanted palpebral fissure"
      ],
      "supporting_source_node_names": [
        "Dysmorphic Facial Features"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0008050",
      "term_label": "Abnormality of the palpebral fissures",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0007874",
      "best_source_term_label": "Almond-shaped palpebral fissure",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007874"
      ],
      "supporting_source_term_labels": [
        "Almond-shaped palpebral fissure"
      ],
      "supporting_source_node_names": [
        "Almond-Shaped Palpebral Fissures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "HP:0008050",
      "term_label": "Abnormality of the palpebral fissures",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000637",
      "best_source_term_label": "Long palpebral fissure",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000637"
      ],
      "supporting_source_term_labels": [
        "Long palpebral fissure"
      ],
      "supporting_source_node_names": [
        "Long Palpebral Fissures"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "HP:0008050",
      "term_label": "Abnormality of the palpebral fissures",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000494",
      "best_source_term_label": "Downslanted palpebral fissures",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000494"
      ],
      "supporting_source_term_labels": [
        "Downslanted palpebral fissures"
      ],
      "supporting_source_node_names": [
        "Downslanted Palpebral Fissures"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008050" } }));
