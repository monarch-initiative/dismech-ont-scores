window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004796"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004796",
  "term_label": "Gastrointestinal obstruction",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 0.574068,
  "mean_score": 0.475068,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0004796",
      "term_label": "Gastrointestinal obstruction",
      "score": 0.574068,
      "direct_score": 0.0,
      "propagated_score": 0.77203,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0005214",
      "best_source_term_label": "Intestinal obstruction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004401",
        "HP:0005214"
      ],
      "supporting_source_term_labels": [
        "Intestinal obstruction",
        "Meconium ileus"
      ],
      "supporting_source_node_names": [
        "Distal Intestinal Obstruction Syndrome",
        "Meconium Ileus"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Gastrointestinal Stromal Tumor",
      "disease_term_id": "MONDO:0011719",
      "source_file": "Gastrointestinal_Stromal_Tumor.yaml",
      "term_id": "HP:0004796",
      "term_label": "Gastrointestinal obstruction",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0005214",
      "best_source_term_label": "Intestinal obstruction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005214"
      ],
      "supporting_source_term_labels": [
        "Intestinal obstruction"
      ],
      "supporting_source_node_names": [
        "Bowel Obstruction"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Meckel Diverticulum",
      "disease_term_id": "MONDO:0007955",
      "source_file": "Meckel_Diverticulum.yaml",
      "term_id": "HP:0004796",
      "term_label": "Gastrointestinal obstruction",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0005214",
      "best_source_term_label": "Intestinal obstruction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005214"
      ],
      "supporting_source_term_labels": [
        "Intestinal obstruction"
      ],
      "supporting_source_node_names": [
        "Intestinal Obstruction"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "HP:0004796",
      "term_label": "Gastrointestinal obstruction",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0004796",
      "best_source_term_label": "Gastrointestinal obstruction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004796"
      ],
      "supporting_source_term_labels": [
        "Gastrointestinal obstruction"
      ],
      "supporting_source_node_names": [
        "Intestinal Obstruction"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "HP:0004796",
      "term_label": "Gastrointestinal obstruction",
      "score": 0.260254,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0005214",
      "best_source_term_label": "Intestinal obstruction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005214"
      ],
      "supporting_source_term_labels": [
        "Intestinal obstruction"
      ],
      "supporting_source_node_names": [
        "Intestinal Obstruction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004796" } }));
