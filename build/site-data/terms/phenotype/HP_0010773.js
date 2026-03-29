window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010773"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010773",
  "term_label": "Partial anomalous pulmonary venous return",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "HP:0010773",
      "term_label": "Partial anomalous pulmonary venous return",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0010773",
      "best_source_term_label": "Partial anomalous pulmonary venous return",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010773"
      ],
      "supporting_source_term_labels": [
        "Partial anomalous pulmonary venous return"
      ],
      "supporting_source_node_names": [
        "Partial anomalous pulmonary venous return"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010773" } }));
