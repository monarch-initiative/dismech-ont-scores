window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001707"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001707",
  "term_label": "nasal cavity",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.8,
  "mean_score": 0.688,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0001707",
      "term_label": "nasal cavity",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001707",
      "best_source_term_label": "nasal cavity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001707"
      ],
      "supporting_source_term_labels": [
        "nasal cavity"
      ],
      "supporting_source_node_names": [
        "Parasympathetic Generalization"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0001707",
      "term_label": "nasal cavity",
      "score": 0.576,
      "direct_score": 0.576,
      "propagated_score": 0.576,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001707",
      "best_source_term_label": "nasal cavity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001707"
      ],
      "supporting_source_term_labels": [
        "nasal cavity"
      ],
      "supporting_source_node_names": [
        "Disrupted nasal airflow dynamics",
        "Paradoxical nasal obstruction and dyspnea"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001707" } }));
