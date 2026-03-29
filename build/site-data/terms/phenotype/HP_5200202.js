window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:5200202"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:5200202",
  "term_label": "Abnormal interpretation of external stimuli",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.305122,
  "mean_score": 0.305122,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Akinetopsia",
      "disease_term_id": "MONDO:0000660",
      "source_file": "Akinetopsia.yaml",
      "term_id": "HP:5200202",
      "term_label": "Abnormal interpretation of external stimuli",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0030222",
      "best_source_term_label": "Visual agnosia",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030222"
      ],
      "supporting_source_term_labels": [
        "Visual agnosia"
      ],
      "supporting_source_node_names": [
        "Visual motion blindness with freeze-frame perception"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Semantic Dementia",
      "disease_term_id": "MONDO:0010857",
      "source_file": "Semantic_Dementia.yaml",
      "term_id": "HP:5200202",
      "term_label": "Abnormal interpretation of external stimuli",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0010528",
      "best_source_term_label": "Prosopagnosia",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010528"
      ],
      "supporting_source_term_labels": [
        "Prosopagnosia"
      ],
      "supporting_source_node_names": [
        "Prosopagnosia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:5200202" } }));
