window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000944"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000944",
  "term_label": "Abnormal metaphysis morphology",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.687679,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Spondyloepimetaphyseal Dysplasia Strudwick Type",
      "disease_term_id": "MONDO:0008476",
      "source_file": "Spondyloepimetaphyseal_Dysplasia_Strudwick_Type.yaml",
      "term_id": "HP:0000944",
      "term_label": "Abnormal metaphysis morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000944",
      "best_source_term_label": "Abnormal metaphysis morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000944"
      ],
      "supporting_source_term_labels": [
        "Abnormal metaphysis morphology"
      ],
      "supporting_source_node_names": [
        "Metaphyseal Irregularity"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Metaphyseal Chondrodysplasia, Schmid Type",
      "disease_term_id": "MONDO:0007983",
      "source_file": "Metaphyseal_Chondrodysplasia_Schmid_Type.yaml",
      "term_id": "HP:0000944",
      "term_label": "Abnormal metaphysis morphology",
      "score": 0.709012,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003025",
      "best_source_term_label": "Metaphyseal irregularity",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003016",
        "HP:0003025"
      ],
      "supporting_source_term_labels": [
        "Metaphyseal irregularity",
        "Metaphyseal widening"
      ],
      "supporting_source_node_names": [
        "Metaphyseal Irregularity",
        "Metaphyseal Widening"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Metatropic Dysplasia",
      "disease_term_id": "MONDO:0007986",
      "source_file": "Metatropic_Dysplasia.yaml",
      "term_id": "HP:0000944",
      "term_label": "Abnormal metaphysis morphology",
      "score": 0.659927,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003016",
      "best_source_term_label": "Metaphyseal widening",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000947",
        "HP:0003016"
      ],
      "supporting_source_term_labels": [
        "Dumbbell-shaped long bone",
        "Metaphyseal widening"
      ],
      "supporting_source_node_names": [
        "Dumbbell-Shaped Long Bones",
        "Metaphyseal Widening"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kniest Dysplasia",
      "disease_term_id": "MONDO:0007987",
      "source_file": "Kniest_Dysplasia.yaml",
      "term_id": "HP:0000944",
      "term_label": "Abnormal metaphysis morphology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000947",
      "best_source_term_label": "Dumbbell-shaped long bone",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000947"
      ],
      "supporting_source_term_labels": [
        "Dumbbell-shaped long bone"
      ],
      "supporting_source_node_names": [
        "Dumbbell-Shaped Long Bones"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000944" } }));
