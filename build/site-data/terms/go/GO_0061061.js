window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0061061"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0061061",
  "term_label": "muscle structure development",
  "disease_count": 5,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.223238,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Duchenne Muscular Dystrophy",
      "disease_term_id": "MONDO:0010679",
      "source_file": "Duchenne_Muscular_Dystrophy.yaml",
      "term_id": "GO:0061061",
      "term_label": "muscle structure development",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0061061",
      "best_source_term_label": "muscle structure development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061061"
      ],
      "supporting_source_term_labels": [
        "muscle structure development"
      ],
      "supporting_source_node_names": [
        "Progressive Muscle Degeneration"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Grange syndrome",
      "disease_term_id": "MONDO:0011243",
      "source_file": "Grange_syndrome.yaml",
      "term_id": "GO:0061061",
      "term_label": "muscle structure development",
      "score": 0.260254,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0051145",
      "best_source_term_label": "smooth muscle cell differentiation",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0051145"
      ],
      "supporting_source_term_labels": [
        "smooth muscle cell differentiation"
      ],
      "supporting_source_node_names": [
        "Vascular Smooth Muscle Cell Dysfunction and Arterial Stenosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Peutz-Jeghers polyp",
      "disease_term_id": "MONDO:0006365",
      "source_file": "Peutz_Jeghers_polyp.yaml",
      "term_id": "GO:0061061",
      "term_label": "muscle structure development",
      "score": 0.130127,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0051145",
      "best_source_term_label": "smooth muscle cell differentiation",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0051145"
      ],
      "supporting_source_term_labels": [
        "smooth muscle cell differentiation"
      ],
      "supporting_source_node_names": [
        "Arborizing smooth muscle core formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0061061",
      "term_label": "muscle structure development",
      "score": 0.069542,
      "direct_score": 0.0,
      "propagated_score": 0.093523,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0030239",
      "best_source_term_label": "myofibril assembly",
      "best_source_path_score": 0.0875,
      "best_source_path": "part_of > is_a > part_of > part_of",
      "best_path_hops": 4,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 3,
      "supporting_source_term_ids": [
        "GO:0030239",
        "GO:0030240",
        "GO:0045214"
      ],
      "supporting_source_term_labels": [
        "myofibril assembly",
        "sarcomere organization",
        "skeletal muscle thin filament assembly"
      ],
      "supporting_source_node_names": [
        "NRAP-Mediated Sarcomere Disorganization",
        "Nemaline Rod Formation",
        "Thin Filament Dysfunction",
        "Thin Filament Length Dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "GO:0061061",
      "term_label": "muscle structure development",
      "score": 0.016266,
      "direct_score": 0.0,
      "propagated_score": 0.021875,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0045214",
      "best_source_term_label": "sarcomere organization",
      "best_source_path_score": 0.04375,
      "best_source_path": "part_of > part_of > is_a > part_of > part_of",
      "best_path_hops": 5,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 4,
      "supporting_source_term_ids": [
        "GO:0045214"
      ],
      "supporting_source_term_labels": [
        "sarcomere organization"
      ],
      "supporting_source_node_names": [
        "Sarcomere Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0061061" } }));
