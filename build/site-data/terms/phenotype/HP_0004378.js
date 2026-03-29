window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004378"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004378",
  "term_label": "Abnormality of the anus",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.336862,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0004378",
      "term_label": "Abnormality of the anus",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002023",
      "best_source_term_label": "Anal atresia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002023"
      ],
      "supporting_source_term_labels": [
        "Anal atresia"
      ],
      "supporting_source_node_names": [
        "Anal Atresia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pallister-Hall Syndrome",
      "disease_term_id": "MONDO:0007804",
      "source_file": "Pallister-Hall_Syndrome.yaml",
      "term_id": "HP:0004378",
      "term_label": "Abnormality of the anus",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002023",
      "best_source_term_label": "Anal atresia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002023"
      ],
      "supporting_source_term_labels": [
        "Anal atresia"
      ],
      "supporting_source_node_names": [
        "Anal Atresia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "HP:0004378",
      "term_label": "Abnormality of the anus",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0009789",
      "best_source_term_label": "Perianal abscess",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009789"
      ],
      "supporting_source_term_labels": [
        "Perianal abscess"
      ],
      "supporting_source_node_names": [
        "Perianal Fistula"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004378" } }));
