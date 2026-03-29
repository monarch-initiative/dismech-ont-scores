window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002367"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002367",
  "term_label": "Visual hallucination",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dementia with Lewy Bodies",
      "disease_term_id": "MONDO:0007488",
      "source_file": "Dementia_with_Lewy_Bodies.yaml",
      "term_id": "HP:0002367",
      "term_label": "Visual hallucination",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002367",
      "best_source_term_label": "Visual hallucination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002367"
      ],
      "supporting_source_term_labels": [
        "Visual hallucination"
      ],
      "supporting_source_node_names": [
        "Visual Hallucinations"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lafora_Disease",
      "disease_term_id": "MONDO:0009697",
      "source_file": "Lafora_Disease.yaml",
      "term_id": "HP:0002367",
      "term_label": "Visual hallucination",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002367",
      "best_source_term_label": "Visual hallucination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002367"
      ],
      "supporting_source_term_labels": [
        "Visual hallucination"
      ],
      "supporting_source_node_names": [
        "Visual hallucinations"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002367" } }));
