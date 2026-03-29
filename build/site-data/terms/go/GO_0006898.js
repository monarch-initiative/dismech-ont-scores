window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006898"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006898",
  "term_label": "receptor-mediated endocytosis",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.54723,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "GO:0006898",
      "term_label": "receptor-mediated endocytosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0006898",
      "best_source_term_label": "receptor-mediated endocytosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006898"
      ],
      "supporting_source_term_labels": [
        "receptor-mediated endocytosis"
      ],
      "supporting_source_node_names": [
        "Impaired LDL Receptor Function",
        "PCSK9-Mediated LDLR Degradation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "GO:0006898",
      "term_label": "receptor-mediated endocytosis",
      "score": 0.454619,
      "direct_score": 0.454619,
      "propagated_score": 0.454619,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0006898",
      "best_source_term_label": "receptor-mediated endocytosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006898"
      ],
      "supporting_source_term_labels": [
        "receptor-mediated endocytosis"
      ],
      "supporting_source_node_names": [
        "LDL Receptor-Mediated Cholesterol Clearance Deficiency",
        "PCSK9-Mediated LDL Receptor Degradation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "GO:0006898",
      "term_label": "receptor-mediated endocytosis",
      "score": 0.378746,
      "direct_score": 0.0,
      "propagated_score": 0.486111,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0019065",
      "best_source_term_label": "receptor-mediated endocytosis of virus by host cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019065"
      ],
      "supporting_source_term_labels": [
        "receptor-mediated endocytosis of virus by host cell"
      ],
      "supporting_source_node_names": [
        "Receptor-mediated viral entry and endosomal uncoating"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0006898",
      "term_label": "receptor-mediated endocytosis",
      "score": 0.355556,
      "direct_score": 0.355556,
      "propagated_score": 0.355556,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0006898",
      "best_source_term_label": "receptor-mediated endocytosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006898"
      ],
      "supporting_source_term_labels": [
        "receptor-mediated endocytosis"
      ],
      "supporting_source_node_names": [
        "Renal Proximal Tubular Cadmium Uptake"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006898" } }));
