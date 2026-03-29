window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042593"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042593",
  "term_label": "glucose homeostasis",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.448455,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glycogen Storage Disease Type I",
      "disease_term_id": "MONDO:0002413",
      "source_file": "Glycogen_Storage_Disease_Type_I.yaml",
      "term_id": "GO:0042593",
      "term_label": "glucose homeostasis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0042593",
      "best_source_term_label": "glucose homeostasis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042593"
      ],
      "supporting_source_term_labels": [
        "glucose homeostasis"
      ],
      "supporting_source_node_names": [
        "Impaired glucose-6-phosphate hydrolysis and fasting hypoglycemia",
        "Neutropenia and neutrophil dysfunction in GSD Ib"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:0042593",
      "term_label": "glucose homeostasis",
      "score": 0.197531,
      "direct_score": 0.197531,
      "propagated_score": 0.197531,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0042593",
      "best_source_term_label": "glucose homeostasis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042593"
      ],
      "supporting_source_term_labels": [
        "glucose homeostasis"
      ],
      "supporting_source_node_names": [
        "Chronic hyperglycemia"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "GO:0042593",
      "term_label": "glucose homeostasis",
      "score": 0.147834,
      "direct_score": 0.0,
      "propagated_score": 0.1792,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0001678",
      "best_source_term_label": "intracellular glucose homeostasis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001678"
      ],
      "supporting_source_term_labels": [
        "intracellular glucose homeostasis"
      ],
      "supporting_source_node_names": [
        "Growth Factor and Metabolic Reprogramming"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042593" } }));
