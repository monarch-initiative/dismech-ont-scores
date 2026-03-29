window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000349"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000349",
  "term_label": "limbic system",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.389567,
  "mean_score": 0.333915,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "UBERON:0000349",
      "term_label": "limbic system",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001898",
      "best_source_term_label": "hypothalamus",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001898"
      ],
      "supporting_source_term_labels": [
        "hypothalamus"
      ],
      "supporting_source_node_names": [
        "Hypothalamic Leptin Resistance"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Down_syndrome",
      "disease_term_id": "MONDO:0008608",
      "source_file": "Down_syndrome.yaml",
      "term_id": "UBERON:0000349",
      "term_label": "limbic system",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001954",
      "best_source_term_label": "Ammon's horn",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001954"
      ],
      "supporting_source_term_labels": [
        "Ammon's horn"
      ],
      "supporting_source_node_names": [
        "Neurodevelopmental Alterations"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Dravet_syndrome",
      "disease_term_id": "MONDO:0100135",
      "source_file": "Dravet_syndrome.yaml",
      "term_id": "UBERON:0000349",
      "term_label": "limbic system",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001954",
      "best_source_term_label": "Ammon's horn",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001954"
      ],
      "supporting_source_term_labels": [
        "Ammon's horn"
      ],
      "supporting_source_node_names": [
        "Astrocyte Dysregulation",
        "Neuronal Hyperexcitability",
        "SCN1A Gene Mutation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "UBERON:0000349",
      "term_label": "limbic system",
      "score": 0.166957,
      "direct_score": 0.0,
      "propagated_score": 0.214286,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001954",
      "best_source_term_label": "Ammon's horn",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001954"
      ],
      "supporting_source_term_labels": [
        "Ammon's horn"
      ],
      "supporting_source_node_names": [
        "Abnormality of Glutamergic Signaling",
        "Complement-Mediated Excessive Synaptic Pruning",
        "Oligodendrocyte and Myelin Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000349" } }));
