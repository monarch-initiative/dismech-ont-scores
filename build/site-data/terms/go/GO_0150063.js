window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0150063"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0150063",
  "term_label": "visual system development",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.389567,
  "mean_score": 0.244291,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Spondyloepiphyseal Dysplasia Congenita",
      "disease_term_id": "MONDO:0008471",
      "source_file": "Spondyloepiphyseal_Dysplasia_Congenita.yaml",
      "term_id": "GO:0150063",
      "term_label": "visual system development",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0001654",
      "best_source_term_label": "eye development",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0001654"
      ],
      "supporting_source_term_labels": [
        "eye development"
      ],
      "supporting_source_node_names": [
        "Vitreous Collagen Abnormality"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Stickler Syndrome Type 1",
      "disease_term_id": "MONDO:0007160",
      "source_file": "Stickler_Syndrome_Type_1.yaml",
      "term_id": "GO:0150063",
      "term_label": "visual system development",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0001654",
      "best_source_term_label": "eye development",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0001654"
      ],
      "supporting_source_term_labels": [
        "eye development"
      ],
      "supporting_source_node_names": [
        "Type II Collagen Haploinsufficiency",
        "Vitreous Collagen Abnormality"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "GO:0150063",
      "term_label": "visual system development",
      "score": 0.129856,
      "direct_score": 0.0,
      "propagated_score": 0.166667,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0048592",
      "best_source_term_label": "eye morphogenesis",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
      "term_id": "GO:0150063",
      "term_label": "visual system development",
      "score": 0.068174,
      "direct_score": 0.0,
      "propagated_score": 0.0875,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0060042",
      "best_source_term_label": "retina morphogenesis in camera-type eye",
      "best_source_path_score": 0.0875,
      "best_source_path": "part_of > is_a > part_of > part_of",
      "best_path_hops": 4,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0150063" } }));
