window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002035"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002035",
  "term_label": "Rectal prolapse",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.756,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0002035",
      "term_label": "Rectal prolapse",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002035",
      "best_source_term_label": "Rectal prolapse",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002035"
      ],
      "supporting_source_term_labels": [
        "Rectal prolapse"
      ],
      "supporting_source_node_names": [
        "Rectal Prolapse"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Juvenile Polyposis Syndrome",
      "disease_term_id": "MONDO:0017380",
      "source_file": "Juvenile_Polyposis_Syndrome.yaml",
      "term_id": "HP:0002035",
      "term_label": "Rectal prolapse",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002035",
      "best_source_term_label": "Rectal prolapse",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002035"
      ],
      "supporting_source_term_labels": [
        "Rectal prolapse"
      ],
      "supporting_source_node_names": [
        "Rectal prolapse"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002035" } }));
