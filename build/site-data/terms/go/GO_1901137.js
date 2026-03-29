window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1901137"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1901137",
  "term_label": "carbohydrate derivative biosynthetic process",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.188593,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CHIME_syndrome",
      "disease_term_id": "MONDO:0010221",
      "source_file": "CHIME_syndrome.yaml",
      "term_id": "GO:1901137",
      "term_label": "carbohydrate derivative biosynthetic process",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006506",
      "best_source_term_label": "GPI anchor biosynthetic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006506"
      ],
      "supporting_source_term_labels": [
        "GPI anchor biosynthetic process"
      ],
      "supporting_source_node_names": [
        "PIGL Gene Mutations"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dystroglycanopathy",
      "disease_term_id": "MONDO:0018276",
      "source_file": "Dystroglycanopathy.yaml",
      "term_id": "GO:1901137",
      "term_label": "carbohydrate derivative biosynthetic process",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0035269",
      "best_source_term_label": "protein O-linked glycosylation via mannose",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035269"
      ],
      "supporting_source_term_labels": [
        "protein O-linked glycosylation via mannose"
      ],
      "supporting_source_node_names": [
        "Defective alpha-dystroglycan O-mannosyl glycosylation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:1901137",
      "term_label": "carbohydrate derivative biosynthetic process",
      "score": 0.07195,
      "direct_score": 0.0,
      "propagated_score": 0.092346,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0006754",
      "best_source_term_label": "ATP biosynthetic process",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006754"
      ],
      "supporting_source_term_labels": [
        "ATP biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Impaired Mitochondrial Energy Production"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "GO:1901137",
      "term_label": "carbohydrate derivative biosynthetic process",
      "score": 0.033405,
      "direct_score": 0.0,
      "propagated_score": 0.042875,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0030213",
      "best_source_term_label": "hyaluronan biosynthetic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030213"
      ],
      "supporting_source_term_labels": [
        "hyaluronan biosynthetic process"
      ],
      "supporting_source_node_names": [
        "TSHR-IGF1R Receptor Crosstalk in Orbital Fibroblasts"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1901137" } }));
