window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002101"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002101",
  "term_label": "limb",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.44995,
  "mean_score": 0.232474,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "UBERON:0002101",
      "term_label": "limb",
      "score": 0.44995,
      "direct_score": 0.0,
      "propagated_score": 0.5775,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004552",
      "best_source_term_label": "digital artery",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002389",
        "UBERON:0004552"
      ],
      "supporting_source_term_labels": [
        "digital artery",
        "manual digit"
      ],
      "supporting_source_node_names": [
        "Alpha-2C Adrenoceptor Cold-Induced Vasoconstriction",
        "Sympathetic Nervous System Dysregulation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "UBERON:0002101",
      "term_label": "limb",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0013776",
      "best_source_term_label": "skin of palmar/plantar part of autopod",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0013776"
      ],
      "supporting_source_term_labels": [
        "skin of palmar/plantar part of autopod"
      ],
      "supporting_source_node_names": [
        "Gap Junction Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "UBERON:0002101",
      "term_label": "limb",
      "score": 0.15271,
      "direct_score": 0.0,
      "propagated_score": 0.196,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007722",
      "best_source_term_label": "interphalangeal joint of manus",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0007722"
      ],
      "supporting_source_term_labels": [
        "interphalangeal joint of manus"
      ],
      "supporting_source_node_names": [
        "Joint Contracture"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ainhum",
      "disease_term_id": "MONDO:0007074",
      "source_file": "Ainhum.yaml",
      "term_id": "UBERON:0002101",
      "term_label": "limb",
      "score": 0.136349,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003635",
      "best_source_term_label": "pedal digit 5",
      "best_source_path_score": 0.175,
      "best_source_path": "part_of > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0003635"
      ],
      "supporting_source_term_labels": [
        "pedal digit 5"
      ],
      "supporting_source_node_names": [
        "Constricting groove forms around proximal toe"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002101" } }));
