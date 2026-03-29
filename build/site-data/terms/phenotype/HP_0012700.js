window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012700"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012700",
  "term_label": "Abnormal large intestine physiology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.750721,
  "mean_score": 0.635226,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Ulcerative Colitis",
      "disease_term_id": "MONDO:0005101",
      "source_file": "Ulcerative_Colitis.yaml",
      "term_id": "HP:0012700",
      "term_label": "Abnormal large intestine physiology",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0012702",
      "best_source_term_label": "Tenesmus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012701",
        "HP:0012702"
      ],
      "supporting_source_term_labels": [
        "Bowel urgency",
        "Tenesmus"
      ],
      "supporting_source_node_names": [
        "Tenesmus",
        "Urgency"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pouchitis",
      "disease_term_id": "MONDO:0005312",
      "source_file": "Pouchitis.yaml",
      "term_id": "HP:0012700",
      "term_label": "Abnormal large intestine physiology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0012701",
      "best_source_term_label": "Bowel urgency",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012701"
      ],
      "supporting_source_term_labels": [
        "Bowel urgency"
      ],
      "supporting_source_node_names": [
        "Urgency"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Transverse Myelitis",
      "disease_term_id": "MONDO:0021553",
      "source_file": "Transverse_Myelitis.yaml",
      "term_id": "HP:0012700",
      "term_label": "Abnormal large intestine physiology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002607",
      "best_source_term_label": "Bowel incontinence",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002607"
      ],
      "supporting_source_term_labels": [
        "Bowel incontinence"
      ],
      "supporting_source_node_names": [
        "Bowel Incontinence"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012700" } }));
