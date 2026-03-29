window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000319"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000319",
  "term_label": "mucus secreting cell",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.413177,
  "mean_score": 0.239548,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Bronchiectasis",
      "disease_term_id": "MONDO:0004822",
      "source_file": "Bronchiectasis.yaml",
      "term_id": "CL:0000319",
      "term_label": "mucus secreting cell",
      "score": 0.413177,
      "direct_score": 0.0,
      "propagated_score": 0.530303,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000160",
      "best_source_term_label": "goblet cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000160"
      ],
      "supporting_source_term_labels": [
        "goblet cell"
      ],
      "supporting_source_node_names": [
        "Goblet Cell Hyperplasia and Mucus Hypersecretion"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "CL:0000319",
      "term_label": "mucus secreting cell",
      "score": 0.213794,
      "direct_score": 0.0,
      "propagated_score": 0.2744,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002480",
      "best_source_term_label": "nasal mucosa goblet cell",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002480"
      ],
      "supporting_source_term_labels": [
        "nasal mucosa goblet cell"
      ],
      "supporting_source_node_names": [
        "Impaired mucociliary clearance"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Chronic_Obstructive_Pulmonary_Disease",
      "disease_term_id": "MONDO:0005002",
      "source_file": "Chronic_Obstructive_Pulmonary_Disease.yaml",
      "term_id": "CL:0000319",
      "term_label": "mucus secreting cell",
      "score": 0.181798,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000160",
      "best_source_term_label": "goblet cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000160"
      ],
      "supporting_source_term_labels": [
        "goblet cell"
      ],
      "supporting_source_node_names": [
        "Mucus Hypersecretion"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "CL:0000319",
      "term_label": "mucus secreting cell",
      "score": 0.149423,
      "direct_score": 0.0,
      "propagated_score": 0.191781,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000160",
      "best_source_term_label": "goblet cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000160"
      ],
      "supporting_source_term_labels": [
        "goblet cell"
      ],
      "supporting_source_node_names": [
        "Mucus Overproduction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000319" } }));
