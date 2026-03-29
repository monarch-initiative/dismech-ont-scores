window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025104"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025104",
  "term_label": "Capillary malformation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0025104",
      "term_label": "Capillary malformation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025104",
      "best_source_term_label": "Capillary malformation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025104"
      ],
      "supporting_source_term_labels": [
        "Capillary malformation"
      ],
      "supporting_source_node_names": [
        "Capillary Malformation"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Proteus syndrome",
      "disease_term_id": "MONDO:0008318",
      "source_file": "Proteus_syndrome.yaml",
      "term_id": "HP:0025104",
      "term_label": "Capillary malformation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0025104",
      "best_source_term_label": "Capillary malformation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025104"
      ],
      "supporting_source_term_labels": [
        "Capillary malformation"
      ],
      "supporting_source_node_names": [
        "Capillary malformation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025104" } }));
