window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006302"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006302",
  "term_label": "double-strand break repair",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.545394,
  "mean_score": 0.44446,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "BRCA-Mutant Prostate Cancer",
      "disease_term_id": "MONDO:0008315",
      "source_file": "BRCA_Mutant_Prostate_Cancer.yaml",
      "term_id": "GO:0006302",
      "term_label": "double-strand break repair",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0000724",
      "best_source_term_label": "double-strand break repair via homologous recombination",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000724"
      ],
      "supporting_source_term_labels": [
        "double-strand break repair via homologous recombination"
      ],
      "supporting_source_node_names": [
        "Homologous Recombination Repair Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ovarian High-Grade Serous Carcinoma",
      "disease_term_id": "MONDO:0005211",
      "source_file": "Ovarian_High-Grade_Serous_Carcinoma.yaml",
      "term_id": "GO:0006302",
      "term_label": "double-strand break repair",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0000724",
      "best_source_term_label": "double-strand break repair via homologous recombination",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000724"
      ],
      "supporting_source_term_labels": [
        "double-strand break repair via homologous recombination"
      ],
      "supporting_source_node_names": [
        "Homologous Recombination Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "GO:0006302",
      "term_label": "double-strand break repair",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0006302",
      "best_source_term_label": "double-strand break repair",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006302"
      ],
      "supporting_source_term_labels": [
        "double-strand break repair"
      ],
      "supporting_source_node_names": [
        "ATM kinase deficiency and defective DNA damage signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "GO:0006302",
      "term_label": "double-strand break repair",
      "score": 0.28705,
      "direct_score": 0.0,
      "propagated_score": 0.368421,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0000724",
      "best_source_term_label": "double-strand break repair via homologous recombination",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000724"
      ],
      "supporting_source_term_labels": [
        "double-strand break repair via homologous recombination"
      ],
      "supporting_source_node_names": [
        "Downstream Effector Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006302" } }));
