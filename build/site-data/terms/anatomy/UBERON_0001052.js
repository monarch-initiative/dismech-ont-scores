window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001052"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001052",
  "term_label": "rectum",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.450379,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Classic Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021055",
      "source_file": "Classic_Familial_Adenomatous_Polyposis.yaml",
      "term_id": "UBERON:0001052",
      "term_label": "rectum",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001052",
      "best_source_term_label": "rectum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001052"
      ],
      "supporting_source_term_labels": [
        "rectum"
      ],
      "supporting_source_node_names": [
        "Adenoma initiation",
        "Germline APC loss-of-function predisposition"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021056",
      "source_file": "Familial_Adenomatous_Polyposis.yaml",
      "term_id": "UBERON:0001052",
      "term_label": "rectum",
      "score": 0.203822,
      "direct_score": 0.203822,
      "propagated_score": 0.203822,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001052",
      "best_source_term_label": "rectum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001052"
      ],
      "supporting_source_term_labels": [
        "rectum"
      ],
      "supporting_source_node_names": [
        "Adenoma Formation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0001052",
      "term_label": "rectum",
      "score": 0.147316,
      "direct_score": 0.0,
      "propagated_score": 0.178571,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003346",
      "best_source_term_label": "mucosa of rectum",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0003346"
      ],
      "supporting_source_term_labels": [
        "mucosa of rectum"
      ],
      "supporting_source_node_names": [
        "TL1A-Mediated T Cell Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001052" } }));
