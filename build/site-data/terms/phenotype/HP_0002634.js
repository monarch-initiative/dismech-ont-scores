window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002634"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002634",
  "term_label": "Arteriosclerosis",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.742042,
  "mean_score": 0.47907,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0002634",
      "term_label": "Arteriosclerosis",
      "score": 0.742042,
      "direct_score": 0.0,
      "propagated_score": 0.899479,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002621",
      "best_source_term_label": "Atherosclerosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
        "Atherosclerosis",
        "Coronary Artery Atherosclerosis",
        "Premature Coronary Artery Disease"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "HP:0002634",
      "term_label": "Arteriosclerosis",
      "score": 0.610394,
      "direct_score": 0.0,
      "propagated_score": 0.7399,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0004416",
      "best_source_term_label": "Precocious atherosclerosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "HP:0002634",
      "term_label": "Arteriosclerosis",
      "score": 0.084774,
      "direct_score": 0.0,
      "propagated_score": 0.10276,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001677",
      "best_source_term_label": "Coronary artery atherosclerosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002634" } }));
