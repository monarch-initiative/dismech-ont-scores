window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007186"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007186",
  "term_label": "G protein-coupled receptor signaling pathway",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.300769,
  "mean_score": 0.272625,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "GO:0007186",
      "term_label": "G protein-coupled receptor signaling pathway",
      "score": 0.300769,
      "direct_score": 0.0,
      "propagated_score": 0.386029,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007188",
      "best_source_term_label": "adenylate cyclase-modulating G protein-coupled receptor signaling pathway",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007188"
      ],
      "supporting_source_term_labels": [
        "adenylate cyclase-modulating G protein-coupled receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "GNAS Imprinting-Dependent Signaling Defect"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Bird Fancier's Lung",
      "disease_term_id": "MONDO:0005668",
      "source_file": "Bird_Fanciers_Lung.yaml",
      "term_id": "GO:0007186",
      "term_label": "G protein-coupled receptor signaling pathway",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0070098",
      "best_source_term_label": "chemokine-mediated signaling pathway",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070098"
      ],
      "supporting_source_term_labels": [
        "chemokine-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "Classical Monocyte Enrichment"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Major Depressive Disorder",
      "disease_term_id": "MONDO:0002009",
      "source_file": "Major_Depressive_Disorder.yaml",
      "term_id": "GO:0007186",
      "term_label": "G protein-coupled receptor signaling pathway",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007212",
      "best_source_term_label": "G protein-coupled dopamine receptor signaling pathway",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007212"
      ],
      "supporting_source_term_labels": [
        "G protein-coupled dopamine receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Monoamine Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0007186",
      "term_label": "G protein-coupled receptor signaling pathway",
      "score": 0.244337,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007189",
      "best_source_term_label": "adenylate cyclase-activating G protein-coupled receptor signaling pathway",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007189"
      ],
      "supporting_source_term_labels": [
        "adenylate cyclase-activating G protein-coupled receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Gs\u03b1 ADP-Ribosylation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007186" } }));
