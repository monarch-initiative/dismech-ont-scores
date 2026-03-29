window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042430"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042430",
  "term_label": "indole-containing compound metabolic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.282658,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Delayed Sleep Phase Syndrome",
      "disease_term_id": "MONDO:0024377",
      "source_file": "Delayed_Sleep_Phase_Syndrome.yaml",
      "term_id": "GO:0042430",
      "term_label": "indole-containing compound metabolic process",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030187",
      "best_source_term_label": "melatonin biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030187"
      ],
      "supporting_source_term_labels": [
        "melatonin biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Altered Melatonin Secretion Timing"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "GO:0042430",
      "term_label": "indole-containing compound metabolic process",
      "score": 0.295669,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0042428",
      "best_source_term_label": "serotonin metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042428"
      ],
      "supporting_source_term_labels": [
        "serotonin metabolic process"
      ],
      "supporting_source_node_names": [
        "Reduced Serotonin Biosynthesis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0042430",
      "term_label": "indole-containing compound metabolic process",
      "score": 0.148071,
      "direct_score": 0.0,
      "propagated_score": 0.179487,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0042428",
      "best_source_term_label": "serotonin metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042428"
      ],
      "supporting_source_term_labels": [
        "serotonin metabolic process"
      ],
      "supporting_source_node_names": [
        "Serotonin Depletion Mechanisms"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042430" } }));
