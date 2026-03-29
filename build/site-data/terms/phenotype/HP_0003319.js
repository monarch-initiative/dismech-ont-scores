window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003319"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003319",
  "term_label": "Abnormality of the cervical spine",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.51997,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Shprintzen-Goldberg Syndrome",
      "disease_term_id": "MONDO:0008426",
      "source_file": "Shprintzen-Goldberg_Syndrome.yaml",
      "term_id": "HP:0003319",
      "term_label": "Abnormality of the cervical spine",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0003319",
      "best_source_term_label": "Abnormality of the cervical spine",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003319"
      ],
      "supporting_source_term_labels": [
        "Abnormality of the cervical spine"
      ],
      "supporting_source_node_names": [
        "Cervical Vertebral Anomalies"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Loeys-Dietz Syndrome",
      "disease_term_id": "MONDO:0018954",
      "source_file": "Loeys-Dietz_Syndrome.yaml",
      "term_id": "HP:0003319",
      "term_label": "Abnormality of the cervical spine",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010646",
      "best_source_term_label": "Cervical spine instability",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010646"
      ],
      "supporting_source_term_labels": [
        "Cervical spine instability"
      ],
      "supporting_source_node_names": [
        "Cervical Spine Instability"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Diastrophic Dysplasia",
      "disease_term_id": "MONDO:0009107",
      "source_file": "Diastrophic_Dysplasia.yaml",
      "term_id": "HP:0003319",
      "term_label": "Abnormality of the cervical spine",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002947",
      "best_source_term_label": "Cervical kyphosis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002947"
      ],
      "supporting_source_term_labels": [
        "Cervical kyphosis"
      ],
      "supporting_source_node_names": [
        "Cervical Kyphosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Larsen Syndrome",
      "disease_term_id": "MONDO:0007875",
      "source_file": "Larsen_Syndrome.yaml",
      "term_id": "HP:0003319",
      "term_label": "Abnormality of the cervical spine",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002947",
      "best_source_term_label": "Cervical kyphosis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002947"
      ],
      "supporting_source_term_labels": [
        "Cervical kyphosis"
      ],
      "supporting_source_node_names": [
        "Cervical Kyphosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003319" } }));
