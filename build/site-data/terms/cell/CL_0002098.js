window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002098"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002098",
  "term_label": "regular cardiac myocyte",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Atrial Fibrillation",
      "disease_term_id": "MONDO:0004981",
      "source_file": "Atrial_Fibrillation.yaml",
      "term_id": "CL:0002098",
      "term_label": "regular cardiac myocyte",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002129",
      "best_source_term_label": "regular atrial cardiac myocyte",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002129"
      ],
      "supporting_source_term_labels": [
        "regular atrial cardiac myocyte"
      ],
      "supporting_source_node_names": [
        "Atrial Electrical Remodeling"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Costello Syndrome",
      "disease_term_id": "MONDO:0009026",
      "source_file": "Costello_Syndrome.yaml",
      "term_id": "CL:0002098",
      "term_label": "regular cardiac myocyte",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002129",
      "best_source_term_label": "regular atrial cardiac myocyte",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002129"
      ],
      "supporting_source_term_labels": [
        "regular atrial cardiac myocyte"
      ],
      "supporting_source_node_names": [
        "Constitutive RAS-MAPK Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002098" } }));
