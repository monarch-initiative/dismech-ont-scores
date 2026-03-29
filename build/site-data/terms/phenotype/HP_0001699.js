window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001699"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001699",
  "term_label": "Sudden death",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.602823,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Mitochondrial Trifunctional Protein Deficiency",
      "disease_term_id": "MONDO:0012172",
      "source_file": "Mitochondrial_Trifunctional_Protein_Deficiency.yaml",
      "term_id": "HP:0001699",
      "term_label": "Sudden death",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0001699",
      "best_source_term_label": "Sudden death",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001699"
      ],
      "supporting_source_term_labels": [
        "Sudden death"
      ],
      "supporting_source_node_names": [
        "Sudden death"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dravet_syndrome",
      "disease_term_id": "MONDO:0100135",
      "source_file": "Dravet_syndrome.yaml",
      "term_id": "HP:0001699",
      "term_label": "Sudden death",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0033258",
      "best_source_term_label": "Sudden unexpected death in epilepsy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033258"
      ],
      "supporting_source_term_labels": [
        "Sudden unexpected death in epilepsy"
      ],
      "supporting_source_node_names": [
        "Sudden Unexpected Death in Epilepsy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "HP:0001699",
      "term_label": "Sudden death",
      "score": 0.230991,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001645",
      "best_source_term_label": "Sudden cardiac death",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001645"
      ],
      "supporting_source_term_labels": [
        "Sudden cardiac death"
      ],
      "supporting_source_node_names": [
        "Sudden Cardiac Death"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001699" } }));
