window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008065"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008065",
  "term_label": "Aplasia/Hypoplasia of the skin",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.422681,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0008065",
      "term_label": "Aplasia/Hypoplasia of the skin",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0004334",
      "best_source_term_label": "Dermal atrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004334"
      ],
      "supporting_source_term_labels": [
        "Dermal atrophy"
      ],
      "supporting_source_node_names": [
        "Progressive Skin Atrophy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Acne Vulgaris",
      "disease_term_id": "MONDO:0011438",
      "source_file": "Acne_Vulgaris.yaml",
      "term_id": "HP:0008065",
      "term_label": "Aplasia/Hypoplasia of the skin",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001075",
      "best_source_term_label": "Atrophic scars",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001075"
      ],
      "supporting_source_term_labels": [
        "Atrophic scars"
      ],
      "supporting_source_node_names": [
        "Scarring"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "HP:0008065",
      "term_label": "Aplasia/Hypoplasia of the skin",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001065",
      "best_source_term_label": "Striae distensae",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001065"
      ],
      "supporting_source_term_labels": [
        "Striae distensae"
      ],
      "supporting_source_node_names": [
        "Purple Striae"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0008065",
      "term_label": "Aplasia/Hypoplasia of the skin",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001075",
      "best_source_term_label": "Atrophic scars",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001075"
      ],
      "supporting_source_term_labels": [
        "Atrophic scars"
      ],
      "supporting_source_node_names": [
        "Atrophic Scarring"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008065" } }));
