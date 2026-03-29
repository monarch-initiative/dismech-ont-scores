window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033678"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033678",
  "term_label": "Acute coronary syndrome",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.718319,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cogan Syndrome",
      "disease_term_id": "MONDO:0015453",
      "source_file": "Cogan_Syndrome.yaml",
      "term_id": "HP:0033678",
      "term_label": "Acute coronary syndrome",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0033678",
      "best_source_term_label": "Acute coronary syndrome",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033678"
      ],
      "supporting_source_term_labels": [
        "Acute coronary syndrome"
      ],
      "supporting_source_node_names": [
        "Acute coronary syndrome"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Coronary Artery Disease",
      "disease_term_id": "MONDO:1060134",
      "source_file": "Coronary_Artery_Disease.yaml",
      "term_id": "HP:0033678",
      "term_label": "Acute coronary syndrome",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001658",
      "best_source_term_label": "Myocardial infarction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001658"
      ],
      "supporting_source_term_labels": [
        "Myocardial infarction"
      ],
      "supporting_source_node_names": [
        "Myocardial Infarction"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0033678",
      "term_label": "Acute coronary syndrome",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001658",
      "best_source_term_label": "Myocardial infarction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001658"
      ],
      "supporting_source_term_labels": [
        "Myocardial infarction"
      ],
      "supporting_source_node_names": [
        "Myocardial Infarction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033678" } }));
