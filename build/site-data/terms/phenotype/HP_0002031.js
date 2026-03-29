window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002031"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002031",
  "term_label": "Abnormal esophagus morphology",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.709012,
  "mean_score": 0.504489,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0002031",
      "term_label": "Abnormal esophagus morphology",
      "score": 0.709012,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002575",
      "best_source_term_label": "Tracheoesophageal fistula",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002032",
        "HP:0002575"
      ],
      "supporting_source_term_labels": [
        "Esophageal atresia",
        "Tracheoesophageal fistula"
      ],
      "supporting_source_node_names": [
        "Esophageal Atresia",
        "Tracheoesophageal Fistula"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Joubert syndrome",
      "disease_term_id": "MONDO:0018772",
      "source_file": "Joubert_syndrome.yaml",
      "term_id": "HP:0002031",
      "term_label": "Abnormal esophagus morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002040",
      "best_source_term_label": "Esophageal varix",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002040"
      ],
      "supporting_source_term_labels": [
        "Esophageal varix"
      ],
      "supporting_source_node_names": [
        "Esophageal varix"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0002031",
      "term_label": "Abnormal esophagus morphology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002043",
      "best_source_term_label": "Esophageal stricture",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002043"
      ],
      "supporting_source_term_labels": [
        "Esophageal stricture"
      ],
      "supporting_source_node_names": [
        "Esophageal Stricture"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0002031",
      "term_label": "Abnormal esophagus morphology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002043",
      "best_source_term_label": "Esophageal stricture",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002043"
      ],
      "supporting_source_term_labels": [
        "Esophageal stricture"
      ],
      "supporting_source_node_names": [
        "Esophageal Stenosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002031" } }));
