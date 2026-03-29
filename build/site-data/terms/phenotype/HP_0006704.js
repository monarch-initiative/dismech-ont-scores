window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006704"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006704",
  "term_label": "Abnormal coronary artery morphology",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.659927,
  "mean_score": 0.466273,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0006704",
      "term_label": "Abnormal coronary artery morphology",
      "score": 0.659927,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001677",
      "best_source_term_label": "Coronary artery atherosclerosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001677",
        "HP:0005181"
      ],
      "supporting_source_term_labels": [
        "Coronary artery atherosclerosis",
        "Premature coronary artery atherosclerosis"
      ],
      "supporting_source_node_names": [
        "Coronary Artery Atherosclerosis",
        "Premature Coronary Artery Disease"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cogan Syndrome",
      "disease_term_id": "MONDO:0015453",
      "source_file": "Cogan_Syndrome.yaml",
      "term_id": "HP:0006704",
      "term_label": "Abnormal coronary artery morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0005145",
      "best_source_term_label": "Coronary artery stenosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005145"
      ],
      "supporting_source_term_labels": [
        "Coronary artery stenosis"
      ],
      "supporting_source_node_names": [
        "Coronary artery stenosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "HP:0006704",
      "term_label": "Abnormal coronary artery morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001677",
      "best_source_term_label": "Coronary artery atherosclerosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001677"
      ],
      "supporting_source_term_labels": [
        "Coronary artery atherosclerosis"
      ],
      "supporting_source_node_names": [
        "Coronary Artery Disease"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "HP:0006704",
      "term_label": "Abnormal coronary artery morphology",
      "score": 0.114377,
      "direct_score": 0.0,
      "propagated_score": 0.146801,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001677",
      "best_source_term_label": "Coronary artery atherosclerosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001677"
      ],
      "supporting_source_term_labels": [
        "Coronary artery atherosclerosis"
      ],
      "supporting_source_node_names": [
        "Coronary artery disease"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006704" } }));
