window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025779"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025779",
  "term_label": "Disorder of thought content",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.421559,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "HP:0025779",
      "term_label": "Disorder of thought content",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000746",
      "best_source_term_label": "Delusion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000746"
      ],
      "supporting_source_term_labels": [
        "Delusion"
      ],
      "supporting_source_node_names": [
        "Delusions"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "HP:0025779",
      "term_label": "Disorder of thought content",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0031589",
      "best_source_term_label": "Suicidal ideation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031589"
      ],
      "supporting_source_term_labels": [
        "Suicidal ideation"
      ],
      "supporting_source_node_names": [
        "Suicidal ideation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "FICUS syndrome",
      "disease_term_id": "",
      "source_file": "FICUS_syndrome.yaml",
      "term_id": "HP:0025779",
      "term_label": "Disorder of thought content",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:5200271",
      "best_source_term_label": "Hopelessness",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:5200271"
      ],
      "supporting_source_term_labels": [
        "Hopelessness"
      ],
      "supporting_source_node_names": [
        "Hopelessness"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025779" } }));
