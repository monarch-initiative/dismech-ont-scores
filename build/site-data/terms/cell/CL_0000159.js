window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000159"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000159",
  "term_label": "seromucus secreting cell",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.396412,
  "mean_score": 0.229373,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "CL:0000159",
      "term_label": "seromucus secreting cell",
      "score": 0.396412,
      "direct_score": 0.0,
      "propagated_score": 0.508785,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:4042016",
      "best_source_term_label": "nasal serous secreting cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002480",
        "CL:4042016"
      ],
      "supporting_source_term_labels": [
        "nasal mucosa goblet cell",
        "nasal serous secreting cell"
      ],
      "supporting_source_node_names": [
        "Impaired mucociliary clearance",
        "Impaired nasal air conditioning"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Bronchiectasis",
      "disease_term_id": "MONDO:0004822",
      "source_file": "Bronchiectasis.yaml",
      "term_id": "CL:0000159",
      "term_label": "seromucus secreting cell",
      "score": 0.289224,
      "direct_score": 0.0,
      "propagated_score": 0.371212,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000160",
      "best_source_term_label": "goblet cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "disorder_name": "Chronic_Obstructive_Pulmonary_Disease",
      "disease_term_id": "MONDO:0005002",
      "source_file": "Chronic_Obstructive_Pulmonary_Disease.yaml",
      "term_id": "CL:0000159",
      "term_label": "seromucus secreting cell",
      "score": 0.127259,
      "direct_score": 0.0,
      "propagated_score": 0.163333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000160",
      "best_source_term_label": "goblet cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "CL:0000159",
      "term_label": "seromucus secreting cell",
      "score": 0.104596,
      "direct_score": 0.0,
      "propagated_score": 0.134247,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000160",
      "best_source_term_label": "goblet cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000159" } }));
