window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003367"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003367",
  "term_label": "Abnormal femoral neck morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Osteogenesis Imperfecta Type VII",
      "disease_term_id": "MONDO:0012536",
      "source_file": "Osteogenesis_Imperfecta_Type_VII.yaml",
      "term_id": "HP:0003367",
      "term_label": "Abnormal femoral neck morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002812",
      "best_source_term_label": "Coxa vara",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002812"
      ],
      "supporting_source_term_labels": [
        "Coxa vara"
      ],
      "supporting_source_node_names": [
        "Coxa Vara"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Spondyloepiphyseal Dysplasia Congenita",
      "disease_term_id": "MONDO:0008471",
      "source_file": "Spondyloepiphyseal_Dysplasia_Congenita.yaml",
      "term_id": "HP:0003367",
      "term_label": "Abnormal femoral neck morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002812",
      "best_source_term_label": "Coxa vara",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002812"
      ],
      "supporting_source_term_labels": [
        "Coxa vara"
      ],
      "supporting_source_node_names": [
        "Coxa Vara"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003367" } }));
