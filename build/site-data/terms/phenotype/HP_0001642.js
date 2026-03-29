window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001642"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001642",
  "term_label": "Pulmonic stenosis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.756,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cardiofaciocutaneous Syndrome",
      "disease_term_id": "MONDO:0015280",
      "source_file": "Cardiofaciocutaneous_Syndrome.yaml",
      "term_id": "HP:0001642",
      "term_label": "Pulmonic stenosis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001642",
      "best_source_term_label": "Pulmonic stenosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001642"
      ],
      "supporting_source_term_labels": [
        "Pulmonic stenosis"
      ],
      "supporting_source_node_names": [
        "Pulmonary Valve Stenosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "HP:0001642",
      "term_label": "Pulmonic stenosis",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001642",
      "best_source_term_label": "Pulmonic stenosis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001642"
      ],
      "supporting_source_term_labels": [
        "Pulmonic stenosis"
      ],
      "supporting_source_node_names": [
        "Pulmonary Valve Stenosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001642" } }));
