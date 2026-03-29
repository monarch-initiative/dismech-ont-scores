window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000834"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000834",
  "term_label": "Abnormality of the adrenal glands",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.324736,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "HP:0000834",
      "term_label": "Abnormality of the adrenal glands",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000846",
      "best_source_term_label": "Adrenal insufficiency",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000846"
      ],
      "supporting_source_term_labels": [
        "Adrenal insufficiency"
      ],
      "supporting_source_node_names": [
        "Adrenal Insufficiency"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Li-Fraumeni Syndrome",
      "disease_term_id": "MONDO:0018875",
      "source_file": "Li-Fraumeni_Syndrome.yaml",
      "term_id": "HP:0000834",
      "term_label": "Abnormality of the adrenal glands",
      "score": 0.213585,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0006744",
      "best_source_term_label": "Adrenocortical carcinoma",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0006744"
      ],
      "supporting_source_term_labels": [
        "Adrenocortical carcinoma"
      ],
      "supporting_source_node_names": [
        "Adrenocortical Carcinoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000834" } }));
