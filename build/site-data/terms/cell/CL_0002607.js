window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002607"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002607",
  "term_label": "migratory enteric neural crest cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "CL:0002607",
      "term_label": "migratory enteric neural crest cell",
      "score": 0.4,
      "direct_score": 0.0,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0007011",
      "best_source_term_label": "enteric neuron",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0007011"
      ],
      "supporting_source_term_labels": [
        "enteric neuron"
      ],
      "supporting_source_node_names": [
        "Disrupted Enteric Nervous System Development",
        "Failure of Enteric Ganglion Cell Migration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002607" } }));
