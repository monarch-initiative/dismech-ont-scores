window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042417"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042417",
  "term_label": "dopamine metabolic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.498158,
  "mean_score": 0.448342,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "GO:0042417",
      "term_label": "dopamine metabolic process",
      "score": 0.498158,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0042416",
      "best_source_term_label": "dopamine biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042416"
      ],
      "supporting_source_term_labels": [
        "dopamine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Dopaminergic Neuron Loss"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "GO:0042417",
      "term_label": "dopamine metabolic process",
      "score": 0.398526,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0042416",
      "best_source_term_label": "dopamine biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042416"
      ],
      "supporting_source_term_labels": [
        "dopamine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Reduced Dopamine Biosynthesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042417" } }));
