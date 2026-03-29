window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002062"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002062",
  "term_label": "chondrocyte differentiation",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.672686,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Brachydactyly Type A1",
      "disease_term_id": "MONDO:0007215",
      "source_file": "Brachydactyly_Type_A1.yaml",
      "term_id": "GO:0002062",
      "term_label": "chondrocyte differentiation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0002062",
      "best_source_term_label": "chondrocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002062"
      ],
      "supporting_source_term_labels": [
        "chondrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "IHH Protein Instability and Trafficking Defects"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Achondroplasia",
      "disease_term_id": "MONDO:0007037",
      "source_file": "Achondroplasia.yaml",
      "term_id": "GO:0002062",
      "term_label": "chondrocyte differentiation",
      "score": 0.684724,
      "direct_score": 0.666667,
      "propagated_score": 0.83,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0002062",
      "best_source_term_label": "chondrocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002062",
        "GO:0003418"
      ],
      "supporting_source_term_labels": [
        "chondrocyte differentiation",
        "growth plate cartilage chondrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "FGFR3 gain-of-function signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Multiple Synostoses Syndrome",
      "disease_term_id": "MONDO:0017923",
      "source_file": "Multiple_Synostoses_Syndrome.yaml",
      "term_id": "GO:0002062",
      "term_label": "chondrocyte differentiation",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0002062",
      "best_source_term_label": "chondrocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002062"
      ],
      "supporting_source_term_labels": [
        "chondrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "BMP Signaling Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002062" } }));
