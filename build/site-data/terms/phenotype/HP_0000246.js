window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000246"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000246",
  "term_label": "Sinusitis",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.704708,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Granulomatosis with Polyangiitis",
      "disease_term_id": "MONDO:0012105",
      "source_file": "Granulomatosis_with_Polyangiitis.yaml",
      "term_id": "HP:0000246",
      "term_label": "Sinusitis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0000246",
      "best_source_term_label": "Sinusitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000246"
      ],
      "supporting_source_term_labels": [
        "Sinusitis"
      ],
      "supporting_source_node_names": [
        "Sinusitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0000246",
      "term_label": "Sinusitis",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0011109",
      "best_source_term_label": "Chronic sinusitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011109"
      ],
      "supporting_source_term_labels": [
        "Chronic sinusitis"
      ],
      "supporting_source_node_names": [
        "Chronic Sinusitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "HP:0000246",
      "term_label": "Sinusitis",
      "score": 0.536646,
      "direct_score": 0.390244,
      "propagated_score": 0.650506,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0011109",
      "best_source_term_label": "Chronic sinusitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000246",
        "HP:0011109"
      ],
      "supporting_source_term_labels": [
        "Chronic sinusitis",
        "Sinusitis"
      ],
      "supporting_source_node_names": [
        "Sinusitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000246" } }));
