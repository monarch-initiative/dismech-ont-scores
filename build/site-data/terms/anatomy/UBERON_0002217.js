window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002217"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002217",
  "term_label": "synovial joint",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.583021,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "CINCA Syndrome",
      "disease_term_id": "MONDO:0011776",
      "source_file": "CINCA_Syndrome.yaml",
      "term_id": "UBERON:0002217",
      "term_label": "synovial joint",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002217",
      "best_source_term_label": "synovial joint",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002217"
      ],
      "supporting_source_term_labels": [
        "synovial joint"
      ],
      "supporting_source_node_names": [
        "Cartilage damage and destructive arthropathy"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "UBERON:0002217",
      "term_label": "synovial joint",
      "score": 0.496464,
      "direct_score": 0.0,
      "propagated_score": 0.6372,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002018",
      "best_source_term_label": "synovial membrane of synovial joint",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002018",
        "UBERON:0007722"
      ],
      "supporting_source_term_labels": [
        "interphalangeal joint of manus",
        "synovial membrane of synovial joint"
      ],
      "supporting_source_node_names": [
        "Joint Contracture",
        "PRG4/Lubricin Deficiency"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0002217",
      "term_label": "synovial joint",
      "score": 0.446054,
      "direct_score": 0.1,
      "propagated_score": 0.5725,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002018",
      "best_source_term_label": "synovial membrane of synovial joint",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002018",
        "UBERON:0002217",
        "UBERON:0010996"
      ],
      "supporting_source_term_labels": [
        "articular cartilage of joint",
        "synovial joint",
        "synovial membrane of synovial joint"
      ],
      "supporting_source_node_names": [
        "Cartilage and Bone Destruction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Familial Mediterranean Fever",
      "disease_term_id": "MONDO:0018088",
      "source_file": "Familial_Mediterranean_Fever.yaml",
      "term_id": "UBERON:0002217",
      "term_label": "synovial joint",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002018",
      "best_source_term_label": "synovial membrane of synovial joint",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002018"
      ],
      "supporting_source_term_labels": [
        "synovial membrane of synovial joint"
      ],
      "supporting_source_node_names": [
        "Autoinflammatory Pathway Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002217" } }));
