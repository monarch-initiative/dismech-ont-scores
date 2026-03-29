window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002418"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002418",
  "term_label": "cartilage tissue",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 0.288739,
  "mean_score": 0.193054,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0002418",
      "term_label": "cartilage tissue",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004129",
      "best_source_term_label": "growth plate cartilage",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0004129"
      ],
      "supporting_source_term_labels": [
        "growth plate cartilage"
      ],
      "supporting_source_node_names": [
        "Epiphyseal skeletal overgrowth"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "UBERON:0002418",
      "term_label": "cartilage tissue",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002418",
      "best_source_term_label": "cartilage tissue",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002418"
      ],
      "supporting_source_term_labels": [
        "cartilage tissue"
      ],
      "supporting_source_node_names": [
        "Skeletal Abnormalities"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0002418",
      "term_label": "cartilage tissue",
      "score": 0.040423,
      "direct_score": 0.0,
      "propagated_score": 0.049,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0010996",
      "best_source_term_label": "articular cartilage of joint",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0010996"
      ],
      "supporting_source_term_labels": [
        "articular cartilage of joint"
      ],
      "supporting_source_node_names": [
        "Cartilage and Bone Destruction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002418" } }));
