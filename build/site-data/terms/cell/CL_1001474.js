window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1001474"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1001474",
  "term_label": "medium spiny neuron",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Huntington's Disease",
      "disease_term_id": "MONDO:0007739",
      "source_file": "Huntingtons_Disease.yaml",
      "term_id": "CL:1001474",
      "term_label": "medium spiny neuron",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:1001474",
      "best_source_term_label": "medium spiny neuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1001474"
      ],
      "supporting_source_term_labels": [
        "medium spiny neuron"
      ],
      "supporting_source_node_names": [
        "D2 Receptor Medium Spiny Neuron Selective Vulnerability",
        "Excitotoxicity",
        "Mitochondrial Dysfunction",
        "Mutant Huntingtin Protein Aggregation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1001474" } }));
