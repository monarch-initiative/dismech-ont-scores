window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0016525"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0016525",
  "term_label": "frontal lobe",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.666667,
  "mean_score": 0.361451,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Pick Disease",
      "disease_term_id": "MONDO:0008243",
      "source_file": "Pick_Disease.yaml",
      "term_id": "UBERON:0016525",
      "term_label": "frontal lobe",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.722222,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0016525",
      "best_source_term_label": "frontal lobe",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001870",
        "UBERON:0016525"
      ],
      "supporting_source_term_labels": [
        "frontal cortex",
        "frontal lobe"
      ],
      "supporting_source_node_names": [
        "Neuronal Loss"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "UBERON:0016525",
      "term_label": "frontal lobe",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001870",
      "best_source_term_label": "frontal cortex",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001870"
      ],
      "supporting_source_term_labels": [
        "frontal cortex"
      ],
      "supporting_source_node_names": [
        "Neurological compression from calvarial thickening"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Amyotrophic Lateral Sclerosis",
      "disease_term_id": "MONDO:0004976",
      "source_file": "Amyotrophic_Lateral_Sclerosis.yaml",
      "term_id": "UBERON:0016525",
      "term_label": "frontal lobe",
      "score": 0.194784,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001384",
      "best_source_term_label": "primary motor cortex",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001384"
      ],
      "supporting_source_term_labels": [
        "primary motor cortex"
      ],
      "supporting_source_node_names": [
        "Motor Neuron Degeneration"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "UBERON:0016525",
      "term_label": "frontal lobe",
      "score": 0.194784,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000451",
      "best_source_term_label": "prefrontal cortex",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0000451"
      ],
      "supporting_source_term_labels": [
        "prefrontal cortex"
      ],
      "supporting_source_node_names": [
        "Abnormality of GABAergic Signaling",
        "Abnormality of Glutamergic Signaling",
        "Complement-Mediated Excessive Synaptic Pruning",
        "Mitochondrial Dysfunction and Oxidative Stress",
        "Oligodendrocyte and Myelin Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0016525" } }));
