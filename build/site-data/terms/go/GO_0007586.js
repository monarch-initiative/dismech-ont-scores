window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007586"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007586",
  "term_label": "digestion",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.396329,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Gastroesophageal Reflux Disease",
      "disease_term_id": "MONDO:0007186",
      "source_file": "Gastroesophageal_Reflux_Disease.yaml",
      "term_id": "GO:0007586",
      "term_label": "digestion",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0007586",
      "best_source_term_label": "digestion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007586"
      ],
      "supporting_source_term_labels": [
        "digestion"
      ],
      "supporting_source_node_names": [
        "Impaired Esophageal Clearance"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Satoyoshi Syndrome",
      "disease_term_id": "MONDO:0010922",
      "source_file": "Satoyoshi_Syndrome.yaml",
      "term_id": "GO:0007586",
      "term_label": "digestion",
      "score": 0.218158,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0050892",
      "best_source_term_label": "intestinal absorption",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0050892"
      ],
      "supporting_source_term_labels": [
        "intestinal absorption"
      ],
      "supporting_source_node_names": [
        "Intestinal Absorptive Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "GO:0007586",
      "term_label": "digestion",
      "score": 0.212837,
      "direct_score": 0.0,
      "propagated_score": 0.273171,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0044241",
      "best_source_term_label": "lipid digestion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044241"
      ],
      "supporting_source_term_labels": [
        "lipid digestion"
      ],
      "supporting_source_node_names": [
        "Fat Malabsorption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:0007586",
      "term_label": "digestion",
      "score": 0.154321,
      "direct_score": 0.154321,
      "propagated_score": 0.154321,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0007586",
      "best_source_term_label": "digestion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007586"
      ],
      "supporting_source_term_labels": [
        "digestion"
      ],
      "supporting_source_node_names": [
        "Pancreatogenic exocrine pancreatic insufficiency (T5DM/fibro-inflammatory overlap)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007586" } }));
