window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000638"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000638",
  "term_label": "acidophil cell of pars distalis of adenohypophysis",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "CL:0000638",
      "term_label": "acidophil cell of pars distalis of adenohypophysis",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0002311",
      "best_source_term_label": "mammotroph",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002311"
      ],
      "supporting_source_term_labels": [
        "mammotroph"
      ],
      "supporting_source_node_names": [
        "Hyperprolactinemia-associated endocrine dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000638" } }));
