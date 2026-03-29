window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000873"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000873",
  "term_label": "Diabetes insipidus",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.811349,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "HP:0000873",
      "term_label": "Diabetes insipidus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000873",
      "best_source_term_label": "Diabetes insipidus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000873"
      ],
      "supporting_source_term_labels": [
        "Diabetes insipidus"
      ],
      "supporting_source_node_names": [
        "Diabetes insipidus"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Erdheim-Chester Disease",
      "disease_term_id": "MONDO:0018153",
      "source_file": "Erdheim-Chester_Disease.yaml",
      "term_id": "HP:0000873",
      "term_label": "Diabetes insipidus",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000863",
      "best_source_term_label": "Central diabetes insipidus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000863"
      ],
      "supporting_source_term_labels": [
        "Central diabetes insipidus"
      ],
      "supporting_source_node_names": [
        "Diabetes Insipidus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000873" } }));
