window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003016"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003016",
  "term_label": "Metaphyseal widening",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.859159,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Metaphyseal Chondrodysplasia, Schmid Type",
      "disease_term_id": "MONDO:0007983",
      "source_file": "Metaphyseal_Chondrodysplasia_Schmid_Type.yaml",
      "term_id": "HP:0003016",
      "term_label": "Metaphyseal widening",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0003016",
      "best_source_term_label": "Metaphyseal widening",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003016"
      ],
      "supporting_source_term_labels": [
        "Metaphyseal widening"
      ],
      "supporting_source_node_names": [
        "Metaphyseal Widening"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Metatropic Dysplasia",
      "disease_term_id": "MONDO:0007986",
      "source_file": "Metatropic_Dysplasia.yaml",
      "term_id": "HP:0003016",
      "term_label": "Metaphyseal widening",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0003016",
      "best_source_term_label": "Metaphyseal widening",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
        "Metaphyseal Widening"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kniest Dysplasia",
      "disease_term_id": "MONDO:0007987",
      "source_file": "Kniest_Dysplasia.yaml",
      "term_id": "HP:0003016",
      "term_label": "Metaphyseal widening",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000947",
      "best_source_term_label": "Dumbbell-shaped long bone",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003016" } }));
