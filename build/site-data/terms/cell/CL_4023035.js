window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:4023035"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:4023035",
  "term_label": "lateral ganglionic eminence derived neuron",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Huntington's Disease",
      "disease_term_id": "MONDO:0007739",
      "source_file": "Huntingtons_Disease.yaml",
      "term_id": "CL:4023035",
      "term_label": "lateral ganglionic eminence derived neuron",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:1001474",
      "best_source_term_label": "medium spiny neuron",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:4023035" } }));
