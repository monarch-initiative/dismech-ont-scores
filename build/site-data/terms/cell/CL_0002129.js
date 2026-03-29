window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002129"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002129",
  "term_label": "regular atrial cardiac myocyte",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Atrial Fibrillation",
      "disease_term_id": "MONDO:0004981",
      "source_file": "Atrial_Fibrillation.yaml",
      "term_id": "CL:0002129",
      "term_label": "regular atrial cardiac myocyte",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002129",
      "best_source_term_label": "regular atrial cardiac myocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "CL:0002129",
      "term_label": "regular atrial cardiac myocyte",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002129",
      "best_source_term_label": "regular atrial cardiac myocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002129" } }));
