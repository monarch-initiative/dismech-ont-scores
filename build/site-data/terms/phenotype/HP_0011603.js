window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011603"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011603",
  "term_label": "Congenital malformation of the great arteries",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.809506,
  "mean_score": 0.716101,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0011603",
      "term_label": "Congenital malformation of the great arteries",
      "score": 0.809506,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0001660",
      "best_source_term_label": "Truncus arteriosus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001643",
        "HP:0001660"
      ],
      "supporting_source_term_labels": [
        "Patent ductus arteriosus",
        "Truncus arteriosus"
      ],
      "supporting_source_node_names": [
        "Patent Ductus Arteriosus",
        "Truncus Arteriosus"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "HP:0011603",
      "term_label": "Congenital malformation of the great arteries",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0001710",
      "best_source_term_label": "Conotruncal defect",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001710"
      ],
      "supporting_source_term_labels": [
        "Conotruncal defect"
      ],
      "supporting_source_node_names": [
        "Conotruncal heart defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011603" } }));
