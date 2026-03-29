window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006292"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006292",
  "term_label": "Abnormality of dental eruption",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.529292,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0006292",
      "term_label": "Abnormality of dental eruption",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000684",
      "best_source_term_label": "Delayed eruption of teeth",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000684"
      ],
      "supporting_source_term_labels": [
        "Delayed eruption of teeth"
      ],
      "supporting_source_node_names": [
        "Delayed Eruption of Teeth"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cleidocranial Dysplasia",
      "disease_term_id": "MONDO:0007340",
      "source_file": "Cleidocranial_Dysplasia.yaml",
      "term_id": "HP:0006292",
      "term_label": "Abnormality of dental eruption",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000696",
      "best_source_term_label": "Delayed eruption of permanent teeth",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000696"
      ],
      "supporting_source_term_labels": [
        "Delayed eruption of permanent teeth"
      ],
      "supporting_source_node_names": [
        "Delayed Eruption of Permanent Teeth"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006292" } }));
