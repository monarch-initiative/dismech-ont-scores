window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0090596"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0090596",
  "term_label": "sensory organ morphogenesis",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.415131,
  "mean_score": 0.316537,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "GO:0090596",
      "term_label": "sensory organ morphogenesis",
      "score": 0.415131,
      "direct_score": 0.0,
      "propagated_score": 0.466667,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0048592",
      "best_source_term_label": "eye morphogenesis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048592"
      ],
      "supporting_source_term_labels": [
        "eye morphogenesis"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dystroglycanopathy",
      "disease_term_id": "MONDO:0018276",
      "source_file": "Dystroglycanopathy.yaml",
      "term_id": "GO:0090596",
      "term_label": "sensory organ morphogenesis",
      "score": 0.217944,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0060042",
      "best_source_term_label": "retina morphogenesis in camera-type eye",
      "best_source_path_score": 0.245,
      "best_source_path": "part_of > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0060042"
      ],
      "supporting_source_term_labels": [
        "retina morphogenesis in camera-type eye"
      ],
      "supporting_source_node_names": [
        "Retinal basement membrane disruption and eye malformations"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0090596" } }));
