window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000738"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000738",
  "term_label": "Hallucinations",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.618141,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "HP:0000738",
      "term_label": "Hallucinations",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000738",
      "best_source_term_label": "Hallucinations",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000738"
      ],
      "supporting_source_term_labels": [
        "Hallucinations"
      ],
      "supporting_source_node_names": [
        "Hallucinations"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dementia with Lewy Bodies",
      "disease_term_id": "MONDO:0007488",
      "source_file": "Dementia_with_Lewy_Bodies.yaml",
      "term_id": "HP:0000738",
      "term_label": "Hallucinations",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002367",
      "best_source_term_label": "Visual hallucination",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002367"
      ],
      "supporting_source_term_labels": [
        "Visual hallucination"
      ],
      "supporting_source_node_names": [
        "Visual Hallucinations"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lafora_Disease",
      "disease_term_id": "MONDO:0009697",
      "source_file": "Lafora_Disease.yaml",
      "term_id": "HP:0000738",
      "term_label": "Hallucinations",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002367",
      "best_source_term_label": "Visual hallucination",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002367"
      ],
      "supporting_source_term_labels": [
        "Visual hallucination"
      ],
      "supporting_source_node_names": [
        "Visual hallucinations"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Narcolepsy",
      "disease_term_id": "MONDO:0021107",
      "source_file": "Narcolepsy.yaml",
      "term_id": "HP:0000738",
      "term_label": "Hallucinations",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002519",
      "best_source_term_label": "Hypnagogic hallucination",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002519"
      ],
      "supporting_source_term_labels": [
        "Hypnagogic hallucination"
      ],
      "supporting_source_node_names": [
        "Hypnagogic Hallucinations"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000738" } }));
