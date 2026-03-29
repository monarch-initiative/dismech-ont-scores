window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100852"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100852",
  "term_label": "Abnormal fear-induced behavior",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "FICUS syndrome",
      "disease_term_id": "",
      "source_file": "FICUS_syndrome.yaml",
      "term_id": "HP:0100852",
      "term_label": "Abnormal fear-induced behavior",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0100852",
      "best_source_term_label": "Abnormal fear-induced behavior",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0032942",
        "HP:0100852"
      ],
      "supporting_source_term_labels": [
        "Abnormal fear-induced behavior",
        "Avoidance of stimuli associated with traumatic event"
      ],
      "supporting_source_node_names": [
        "Abnormal fear-induced behavior"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100852" } }));
