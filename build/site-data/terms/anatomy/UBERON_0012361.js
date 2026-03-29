window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0012361"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0012361",
  "term_label": "internal anal region",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.412484,
  "mean_score": 0.190072,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Classic Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021055",
      "source_file": "Classic_Familial_Adenomatous_Polyposis.yaml",
      "term_id": "UBERON:0012361",
      "term_label": "internal anal region",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001052",
      "best_source_term_label": "rectum",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0012361",
      "term_label": "internal anal region",
      "score": 0.084073,
      "direct_score": 0.0,
      "propagated_score": 0.101911,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001052",
      "best_source_term_label": "rectum",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0012361",
      "term_label": "internal anal region",
      "score": 0.073658,
      "direct_score": 0.0,
      "propagated_score": 0.089286,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003346",
      "best_source_term_label": "mucosa of rectum",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0012361" } }));
