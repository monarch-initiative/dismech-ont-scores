window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001677"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001677",
  "term_label": "Coronary artery atherosclerosis",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.736572,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0001677",
      "term_label": "Coronary artery atherosclerosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0001677",
      "best_source_term_label": "Coronary artery atherosclerosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
        "Coronary Artery Atherosclerosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "HP:0001677",
      "term_label": "Coronary artery atherosclerosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0001677",
      "best_source_term_label": "Coronary artery atherosclerosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "HP:0001677",
      "term_label": "Coronary artery atherosclerosis",
      "score": 0.209715,
      "direct_score": 0.209715,
      "propagated_score": 0.209715,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0001677",
      "best_source_term_label": "Coronary artery atherosclerosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001677" } }));
