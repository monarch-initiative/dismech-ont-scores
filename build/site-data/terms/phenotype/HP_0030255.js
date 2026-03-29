window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030255"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030255",
  "term_label": "Large intestinal polyposis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.7048,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021056",
      "source_file": "Familial_Adenomatous_Polyposis.yaml",
      "term_id": "HP:0030255",
      "term_label": "Large intestinal polyposis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0030255",
      "best_source_term_label": "Large intestinal polyposis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030255"
      ],
      "supporting_source_term_labels": [
        "Large intestinal polyposis"
      ],
      "supporting_source_node_names": [
        "Colorectal Polyposis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Classic Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021055",
      "source_file": "Classic_Familial_Adenomatous_Polyposis.yaml",
      "term_id": "HP:0030255",
      "term_label": "Large intestinal polyposis",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0030255",
      "best_source_term_label": "Large intestinal polyposis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030255"
      ],
      "supporting_source_term_labels": [
        "Large intestinal polyposis"
      ],
      "supporting_source_node_names": [
        "Colorectal polyposis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030255" } }));
