window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010972"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010972",
  "term_label": "Anemia of inadequate production",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.422681,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Diamond-Blackfan Anemia",
      "disease_term_id": "MONDO:0015253",
      "source_file": "Diamond-Blackfan_Anemia.yaml",
      "term_id": "HP:0010972",
      "term_label": "Anemia of inadequate production",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001972",
      "best_source_term_label": "Macrocytic anemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001972"
      ],
      "supporting_source_term_labels": [
        "Macrocytic anemia"
      ],
      "supporting_source_node_names": [
        "Macrocytic Anemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Alpha Thalassemia",
      "disease_term_id": "MONDO:0011399",
      "source_file": "Alpha_Thalassemia.yaml",
      "term_id": "HP:0010972",
      "term_label": "Anemia of inadequate production",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0004840",
      "best_source_term_label": "Hypochromic microcytic anemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004840"
      ],
      "supporting_source_term_labels": [
        "Hypochromic microcytic anemia"
      ],
      "supporting_source_node_names": [
        "Hypochromic Microcytic Anemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Beta Thalassemia",
      "disease_term_id": "MONDO:0019402",
      "source_file": "Beta_Thalassemia.yaml",
      "term_id": "HP:0010972",
      "term_label": "Anemia of inadequate production",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0004840",
      "best_source_term_label": "Hypochromic microcytic anemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004840"
      ],
      "supporting_source_term_labels": [
        "Hypochromic microcytic anemia"
      ],
      "supporting_source_node_names": [
        "Microcytic Hypochromic Anemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lane Hamilton Syndrome",
      "disease_term_id": "MONDO:0800124",
      "source_file": "Lane_Hamilton_Syndrome.yaml",
      "term_id": "HP:0010972",
      "term_label": "Anemia of inadequate production",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001891",
      "best_source_term_label": "Iron deficiency anemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001891"
      ],
      "supporting_source_term_labels": [
        "Iron deficiency anemia"
      ],
      "supporting_source_node_names": [
        "Iron-deficiency anemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010972" } }));
