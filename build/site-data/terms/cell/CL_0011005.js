window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0011005"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0011005",
  "term_label": "GABAergic interneuron",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.53244,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Generalized Anxiety Disorder",
      "disease_term_id": "MONDO:0001942",
      "source_file": "Generalized_Anxiety_Disorder.yaml",
      "term_id": "CL:0011005",
      "term_label": "GABAergic interneuron",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0011005",
      "best_source_term_label": "GABAergic interneuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0011005"
      ],
      "supporting_source_term_labels": [
        "GABAergic interneuron"
      ],
      "supporting_source_node_names": [
        "GABA System Dysfunction"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Dystroglycanopathy",
      "disease_term_id": "MONDO:0018276",
      "source_file": "Dystroglycanopathy.yaml",
      "term_id": "CL:0011005",
      "term_label": "GABAergic interneuron",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0011005",
      "best_source_term_label": "GABAergic interneuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0011005"
      ],
      "supporting_source_term_labels": [
        "GABAergic interneuron"
      ],
      "supporting_source_node_names": [
        "Inhibitory synapse dysfunction and seizure susceptibility"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Stiff Person Syndrome",
      "disease_term_id": "MONDO:0008491",
      "source_file": "Stiff_Person_Syndrome.yaml",
      "term_id": "CL:0011005",
      "term_label": "GABAergic interneuron",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0011005",
      "best_source_term_label": "GABAergic interneuron",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0011005"
      ],
      "supporting_source_term_labels": [
        "GABAergic interneuron"
      ],
      "supporting_source_node_names": [
        "GABAergic Inhibition Impairment"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "CTCF-related Neurodevelopmental Disorder",
      "disease_term_id": "MONDO:0700294",
      "source_file": "CTCF-related_Neurodevelopmental_Disorder.yaml",
      "term_id": "CL:0011005",
      "term_label": "GABAergic interneuron",
      "score": 0.129759,
      "direct_score": 0.0,
      "propagated_score": 0.166543,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0010011",
      "best_source_term_label": "cerebral cortex GABAergic interneuron",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0010011"
      ],
      "supporting_source_term_labels": [
        "cerebral cortex GABAergic interneuron"
      ],
      "supporting_source_node_names": [
        "Abnormal Neural Progenitor Cell Development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0011005" } }));
