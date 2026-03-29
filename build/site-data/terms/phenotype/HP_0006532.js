window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006532"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006532",
  "term_label": "Recurrent pneumonia",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "HP:0006532",
      "term_label": "Recurrent pneumonia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0006532",
      "best_source_term_label": "Recurrent pneumonia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006532"
      ],
      "supporting_source_term_labels": [
        "Recurrent pneumonia"
      ],
      "supporting_source_node_names": [
        "Recurrent respiratory infections"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Non-Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0005233",
      "source_file": "Non-Small_Cell_Lung_Cancer.yaml",
      "term_id": "HP:0006532",
      "term_label": "Recurrent pneumonia",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0006532",
      "best_source_term_label": "Recurrent pneumonia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006532"
      ],
      "supporting_source_term_labels": [
        "Recurrent pneumonia"
      ],
      "supporting_source_node_names": [
        "Recurrent Pneumonia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006532" } }));
