window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002577"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002577",
  "term_label": "Abnormal stomach morphology",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.325426,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Gastric Ulcer",
      "disease_term_id": "MONDO:0001126",
      "source_file": "Gastric_Ulcer.yaml",
      "term_id": "HP:0002577",
      "term_label": "Abnormal stomach morphology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002592",
      "best_source_term_label": "Gastric ulcer",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002592"
      ],
      "supporting_source_term_labels": [
        "Gastric ulcer"
      ],
      "supporting_source_node_names": [
        "Gastric ulcer"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Junctional Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0017612",
      "source_file": "Junctional_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0002577",
      "term_label": "Abnormal stomach morphology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0004399",
      "best_source_term_label": "Congenital pyloric atresia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004399"
      ],
      "supporting_source_term_labels": [
        "Congenital pyloric atresia"
      ],
      "supporting_source_node_names": [
        "Congenital Pyloric Atresia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "HP:0002577",
      "term_label": "Abnormal stomach morphology",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0012126",
      "best_source_term_label": "Stomach cancer",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012126"
      ],
      "supporting_source_term_labels": [
        "Stomach cancer"
      ],
      "supporting_source_node_names": [
        "Stomach Cancer"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Juvenile Polyposis Syndrome",
      "disease_term_id": "MONDO:0017380",
      "source_file": "Juvenile_Polyposis_Syndrome.yaml",
      "term_id": "HP:0002577",
      "term_label": "Abnormal stomach morphology",
      "score": 0.156375,
      "direct_score": 0.0,
      "propagated_score": 0.200704,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0012126",
      "best_source_term_label": "Stomach cancer",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012126"
      ],
      "supporting_source_term_labels": [
        "Stomach cancer"
      ],
      "supporting_source_node_names": [
        "Stomach cancer"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002577" } }));
