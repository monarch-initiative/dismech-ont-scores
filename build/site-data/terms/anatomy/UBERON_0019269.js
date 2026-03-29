window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0019269"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0019269",
  "term_label": "gray matter of diencephalon",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.272697,
  "mean_score": 0.221566,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "UBERON:0019269",
      "term_label": "gray matter of diencephalon",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001898",
      "best_source_term_label": "hypothalamus",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Diffuse Midline Glioma, H3 K27-Altered",
      "disease_term_id": "MONDO:1060171",
      "source_file": "H3_K27_Altered_Diffuse_Midline_Glioma.yaml",
      "term_id": "UBERON:0019269",
      "term_label": "gray matter of diencephalon",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001897",
      "best_source_term_label": "dorsal plus ventral thalamus",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001897"
      ],
      "supporting_source_term_labels": [
        "dorsal plus ventral thalamus"
      ],
      "supporting_source_node_names": [
        "H3 K27M Oncohistone Mutation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Jeavons Syndrome",
      "disease_term_id": "MONDO:0015346",
      "source_file": "Jeavons_Syndrome.yaml",
      "term_id": "UBERON:0019269",
      "term_label": "gray matter of diencephalon",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001897",
      "best_source_term_label": "dorsal plus ventral thalamus",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001897"
      ],
      "supporting_source_term_labels": [
        "dorsal plus ventral thalamus"
      ],
      "supporting_source_node_names": [
        "Disrupted Cortical Function"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Dravet_syndrome",
      "disease_term_id": "MONDO:0100135",
      "source_file": "Dravet_syndrome.yaml",
      "term_id": "UBERON:0019269",
      "term_label": "gray matter of diencephalon",
      "score": 0.068174,
      "direct_score": 0.0,
      "propagated_score": 0.0875,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001897",
      "best_source_term_label": "dorsal plus ventral thalamus",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001897"
      ],
      "supporting_source_term_labels": [
        "dorsal plus ventral thalamus"
      ],
      "supporting_source_node_names": [
        "Neuronal Hyperexcitability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0019269" } }));
