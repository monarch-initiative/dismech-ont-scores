window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009636"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009636",
  "term_label": "response to toxic substance",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.230991,
  "mean_score": 0.155705,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0009636",
      "term_label": "response to toxic substance",
      "score": 0.230991,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0071722",
      "best_source_term_label": "detoxification of arsenic-containing substance",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0071722"
      ],
      "supporting_source_term_labels": [
        "detoxification of arsenic-containing substance"
      ],
      "supporting_source_node_names": [
        "Hepatic Methylation and Biotransformation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0009636",
      "term_label": "response to toxic substance",
      "score": 0.128328,
      "direct_score": 0.0,
      "propagated_score": 0.155556,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0061687",
      "best_source_term_label": "detoxification of inorganic compound",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0061687"
      ],
      "supporting_source_term_labels": [
        "detoxification of inorganic compound"
      ],
      "supporting_source_node_names": [
        "Hepatic Metallothionein Binding"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "GO:0009636",
      "term_label": "response to toxic substance",
      "score": 0.107796,
      "direct_score": 0.0,
      "propagated_score": 0.130667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0061691",
      "best_source_term_label": "detoxification of hydrogen peroxide",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > is_a > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0061691"
      ],
      "supporting_source_term_labels": [
        "detoxification of hydrogen peroxide"
      ],
      "supporting_source_node_names": [
        "Impaired Redox Homeostasis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009636" } }));
