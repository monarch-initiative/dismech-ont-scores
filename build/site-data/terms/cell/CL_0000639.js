window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000639"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000639",
  "term_label": "basophil cell of pars distalis of adenohypophysis",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "CL:0000639",
      "term_label": "basophil cell of pars distalis of adenohypophysis",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002309",
      "best_source_term_label": "corticotroph",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002309"
      ],
      "supporting_source_term_labels": [
        "corticotroph"
      ],
      "supporting_source_node_names": [
        "Hypothalamic-Pituitary-Adrenal Axis Dysregulation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Major Depressive Disorder",
      "disease_term_id": "MONDO:0002009",
      "source_file": "Major_Depressive_Disorder.yaml",
      "term_id": "CL:0000639",
      "term_label": "basophil cell of pars distalis of adenohypophysis",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002309",
      "best_source_term_label": "corticotroph",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002309"
      ],
      "supporting_source_term_labels": [
        "corticotroph"
      ],
      "supporting_source_node_names": [
        "HPA Axis Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000639" } }));
