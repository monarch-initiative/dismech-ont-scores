window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:6001034"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:6001034",
  "term_label": "Desmoid tumor",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Classic Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021055",
      "source_file": "Classic_Familial_Adenomatous_Polyposis.yaml",
      "term_id": "HP:6001034",
      "term_label": "Desmoid tumor",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:6001034",
      "best_source_term_label": "Desmoid tumor",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6001034"
      ],
      "supporting_source_term_labels": [
        "Desmoid tumor"
      ],
      "supporting_source_node_names": [
        "Desmoid tumor susceptibility"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021056",
      "source_file": "Familial_Adenomatous_Polyposis.yaml",
      "term_id": "HP:6001034",
      "term_label": "Desmoid tumor",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:6001034",
      "best_source_term_label": "Desmoid tumor",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:6001034"
      ],
      "supporting_source_term_labels": [
        "Desmoid tumor"
      ],
      "supporting_source_node_names": [
        "Desmoid Tumors"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:6001034" } }));
