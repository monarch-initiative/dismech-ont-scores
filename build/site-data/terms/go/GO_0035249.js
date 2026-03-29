window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035249"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035249",
  "term_label": "synaptic transmission, glutamatergic",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "GO:0035249",
      "term_label": "synaptic transmission, glutamatergic",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0035249",
      "best_source_term_label": "synaptic transmission, glutamatergic",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035249"
      ],
      "supporting_source_term_labels": [
        "synaptic transmission, glutamatergic"
      ],
      "supporting_source_node_names": [
        "Abnormality of Glutamergic Signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0008433",
      "source_file": "Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0035249",
      "term_label": "synaptic transmission, glutamatergic",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0035249",
      "best_source_term_label": "synaptic transmission, glutamatergic",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035249"
      ],
      "supporting_source_term_labels": [
        "synaptic transmission, glutamatergic"
      ],
      "supporting_source_node_names": [
        "Glutamate Signaling Dependency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035249" } }));
