window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002621"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002621",
  "term_label": "Atherosclerosis",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.623942,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0002621",
      "term_label": "Atherosclerosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0002621",
      "best_source_term_label": "Atherosclerosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001677",
        "HP:0002621",
        "HP:0005181"
      ],
      "supporting_source_term_labels": [
        "Atherosclerosis",
        "Coronary artery atherosclerosis",
        "Premature coronary artery atherosclerosis"
      ],
      "supporting_source_node_names": [
        "Atherosclerosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "HP:0002621",
      "term_label": "Atherosclerosis",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0004416",
      "best_source_term_label": "Precocious atherosclerosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001677",
        "HP:0004416"
      ],
      "supporting_source_term_labels": [
        "Coronary artery atherosclerosis",
        "Precocious atherosclerosis"
      ],
      "supporting_source_node_names": [
        "Coronary Artery Disease",
        "Premature Atherosclerosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "HP:0002621",
      "term_label": "Atherosclerosis",
      "score": 0.121106,
      "direct_score": 0.0,
      "propagated_score": 0.146801,
      "specificity": 0.824968,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002621" } }));
