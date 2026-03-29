window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043067"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043067",
  "term_label": "regulation of programmed cell death",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.202117,
  "mean_score": 0.11638,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Coffin-Siris syndrome",
      "disease_term_id": "MONDO:0015452",
      "source_file": "Coffin_Siris_Syndrome.yaml",
      "term_id": "GO:0043067",
      "term_label": "regulation of programmed cell death",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0043523",
      "best_source_term_label": "regulation of neuron apoptotic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043523"
      ],
      "supporting_source_term_labels": [
        "regulation of neuron apoptotic process"
      ],
      "supporting_source_node_names": [
        "Cortical interneuron deficiency from ARID1B haploinsufficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "PIK3CA-Mutant Breast Cancer",
      "disease_term_id": "MONDO:0004989",
      "source_file": "PIK3CA_Mutant_Breast_Cancer.yaml",
      "term_id": "GO:0043067",
      "term_label": "regulation of programmed cell death",
      "score": 0.092396,
      "direct_score": 0.0,
      "propagated_score": 0.112,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0043066",
      "best_source_term_label": "negative regulation of apoptotic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043066"
      ],
      "supporting_source_term_labels": [
        "negative regulation of apoptotic process"
      ],
      "supporting_source_node_names": [
        "Cell Survival and Proliferation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cowden Syndrome",
      "disease_term_id": "MONDO:0016063",
      "source_file": "Cowden_Syndrome.yaml",
      "term_id": "GO:0043067",
      "term_label": "regulation of programmed cell death",
      "score": 0.054626,
      "direct_score": 0.0,
      "propagated_score": 0.066216,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0043066",
      "best_source_term_label": "negative regulation of apoptotic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043066"
      ],
      "supporting_source_term_labels": [
        "negative regulation of apoptotic process"
      ],
      "supporting_source_node_names": [
        "PTEN Loss and PI3K/AKT/mTOR Pathway Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043067" } }));
