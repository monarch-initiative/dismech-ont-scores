window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004785"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004785",
  "term_label": "respiratory system mucosa",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.545394,
  "mean_score": 0.310574,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Chickenpox",
      "disease_term_id": "MONDO:0005700",
      "source_file": "Chickenpox.yaml",
      "term_id": "UBERON:0004785",
      "term_label": "respiratory system mucosa",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000355",
      "best_source_term_label": "pharyngeal mucosa",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000355"
      ],
      "supporting_source_term_labels": [
        "pharyngeal mucosa"
      ],
      "supporting_source_node_names": [
        "Primary VZV infection via respiratory mucosa"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0004785",
      "term_label": "respiratory system mucosa",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001826",
      "best_source_term_label": "nasal cavity mucosa",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001826"
      ],
      "supporting_source_term_labels": [
        "nasal cavity mucosa"
      ],
      "supporting_source_node_names": [
        "Impaired mucociliary clearance",
        "Impaired nasal air conditioning",
        "Trigeminal neurosensory dysfunction",
        "Turbinate tissue loss from surgical resection"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Rheumatoid Arthritis",
      "disease_term_id": "MONDO:0008383",
      "source_file": "Rheumatoid_Arthritis.yaml",
      "term_id": "UBERON:0004785",
      "term_label": "respiratory system mucosa",
      "score": 0.083333,
      "direct_score": 0.083333,
      "propagated_score": 0.083333,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0004785",
      "best_source_term_label": "respiratory system mucosa",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0004785"
      ],
      "supporting_source_term_labels": [
        "respiratory system mucosa"
      ],
      "supporting_source_node_names": [
        "Mucosal Origins and Dysbiosis"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "UBERON:0004785",
      "term_label": "respiratory system mucosa",
      "score": 0.068174,
      "direct_score": 0.0,
      "propagated_score": 0.0875,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005384",
      "best_source_term_label": "nasal cavity epithelium",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0005384"
      ],
      "supporting_source_term_labels": [
        "nasal cavity epithelium"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004785" } }));
