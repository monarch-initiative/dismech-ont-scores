window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0099643"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0099643",
  "term_label": "signal release from synapse",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.368944,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Alzheimer Disease",
      "disease_term_id": "MONDO:0004975",
      "source_file": "Alzheimer_Disease.yaml",
      "term_id": "GO:0099643",
      "term_label": "signal release from synapse",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0007269",
      "best_source_term_label": "neurotransmitter secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007269"
      ],
      "supporting_source_term_labels": [
        "neurotransmitter secretion"
      ],
      "supporting_source_node_names": [
        "Synaptic Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "HIDEA_Syndrome",
      "disease_term_id": "MONDO:0032780",
      "source_file": "HIDEA_Syndrome.yaml",
      "term_id": "GO:0099643",
      "term_label": "signal release from synapse",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0007269",
      "best_source_term_label": "neurotransmitter secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007269"
      ],
      "supporting_source_term_labels": [
        "neurotransmitter secretion"
      ],
      "supporting_source_node_names": [
        "Dysregulated Astrocyte Calcium Signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CACNA1A-Related Disorder",
      "disease_term_id": "MONDO:0100254",
      "source_file": "CACNA1A_Related_Disorder.yaml",
      "term_id": "GO:0099643",
      "term_label": "signal release from synapse",
      "score": 0.240616,
      "direct_score": 0.0,
      "propagated_score": 0.291667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0007269",
      "best_source_term_label": "neurotransmitter secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007269"
      ],
      "supporting_source_term_labels": [
        "neurotransmitter secretion"
      ],
      "supporting_source_node_names": [
        "P/Q-type Calcium Channel Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0099643" } }));
