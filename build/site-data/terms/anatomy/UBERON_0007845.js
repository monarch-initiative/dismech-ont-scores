window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0007845"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0007845",
  "term_label": "regular connective tissue",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.404234,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "UBERON:0007845",
      "term_label": "regular connective tissue",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000043",
      "best_source_term_label": "tendon",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000043"
      ],
      "supporting_source_term_labels": [
        "tendon"
      ],
      "supporting_source_node_names": [
        "Flexor Tendon Abnormalities"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Clear Cell Sarcoma",
      "disease_term_id": "MONDO:0002926",
      "source_file": "Clear_Cell_Sarcoma.yaml",
      "term_id": "UBERON:0007845",
      "term_label": "regular connective tissue",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000043",
      "best_source_term_label": "tendon",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000043"
      ],
      "supporting_source_term_labels": [
        "tendon"
      ],
      "supporting_source_node_names": [
        "EWSR1-ATF1 Fusion Oncogene"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ehlers-Danlos Syndrome, COL5A1-related",
      "disease_term_id": "MONDO:0007522",
      "source_file": "Ehlers-Danlos_Syndrome_COL5A1-related.yaml",
      "term_id": "UBERON:0007845",
      "term_label": "regular connective tissue",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000043",
      "best_source_term_label": "tendon",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000043"
      ],
      "supporting_source_term_labels": [
        "tendon"
      ],
      "supporting_source_node_names": [
        "Tissue Injury and Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0007845" } }));
