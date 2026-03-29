window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031653"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031653",
  "term_label": "Abnormal heart valve physiology",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.335199,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cardiofaciocutaneous Syndrome",
      "disease_term_id": "MONDO:0015280",
      "source_file": "Cardiofaciocutaneous_Syndrome.yaml",
      "term_id": "HP:0031653",
      "term_label": "Abnormal heart valve physiology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001642",
      "best_source_term_label": "Pulmonic stenosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001642"
      ],
      "supporting_source_term_labels": [
        "Pulmonic stenosis"
      ],
      "supporting_source_node_names": [
        "Pulmonary Valve Stenosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cogan Syndrome",
      "disease_term_id": "MONDO:0015453",
      "source_file": "Cogan_Syndrome.yaml",
      "term_id": "HP:0031653",
      "term_label": "Abnormal heart valve physiology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001659",
      "best_source_term_label": "Aortic regurgitation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001659"
      ],
      "supporting_source_term_labels": [
        "Aortic regurgitation"
      ],
      "supporting_source_node_names": [
        "Aortic regurgitation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0031653",
      "term_label": "Abnormal heart valve physiology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001650",
      "best_source_term_label": "Aortic valve stenosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001650"
      ],
      "supporting_source_term_labels": [
        "Aortic valve stenosis"
      ],
      "supporting_source_node_names": [
        "Aortic Valve Stenosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "HP:0031653",
      "term_label": "Abnormal heart valve physiology",
      "score": 0.195469,
      "direct_score": 0.0,
      "propagated_score": 0.25088,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001642",
      "best_source_term_label": "Pulmonic stenosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001642"
      ],
      "supporting_source_term_labels": [
        "Pulmonic stenosis"
      ],
      "supporting_source_node_names": [
        "Pulmonary Valve Stenosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031653" } }));
