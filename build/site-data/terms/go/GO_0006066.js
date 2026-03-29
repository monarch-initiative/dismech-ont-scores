window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006066"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006066",
  "term_label": "alcohol metabolic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.195657,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Auto-Brewery Syndrome",
      "disease_term_id": "MONDO:0971031",
      "source_file": "Auto-Brewery_Syndrome.yaml",
      "term_id": "GO:0006066",
      "term_label": "alcohol metabolic process",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006067",
      "best_source_term_label": "ethanol metabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006067"
      ],
      "supporting_source_term_labels": [
        "ethanol metabolic process"
      ],
      "supporting_source_node_names": [
        "Fungal Gut Fermentation",
        "Impaired Hepatic Ethanol Clearance"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "GO:0006066",
      "term_label": "alcohol metabolic process",
      "score": 0.101059,
      "direct_score": 0.0,
      "propagated_score": 0.1225,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0008203",
      "best_source_term_label": "cholesterol metabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008203"
      ],
      "supporting_source_term_labels": [
        "cholesterol metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired LDL Receptor Function"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "GO:0006066",
      "term_label": "alcohol metabolic process",
      "score": 0.081677,
      "direct_score": 0.0,
      "propagated_score": 0.099006,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0008203",
      "best_source_term_label": "cholesterol metabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008203"
      ],
      "supporting_source_term_labels": [
        "cholesterol metabolic process"
      ],
      "supporting_source_node_names": [
        "LDL Receptor-Mediated Cholesterol Clearance Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006066" } }));
