window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031432"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031432",
  "term_label": "Restricted or repetitive behaviors or interests",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.2401,
  "mean_score": 0.2401,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Rett Syndrome",
      "disease_term_id": "MONDO:0010726",
      "source_file": "Rett_Syndrome.yaml",
      "term_id": "HP:0031432",
      "term_label": "Restricted or repetitive behaviors or interests",
      "score": 0.2401,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0012171",
      "best_source_term_label": "Stereotypical hand wringing",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012171"
      ],
      "supporting_source_term_labels": [
        "Stereotypical hand wringing"
      ],
      "supporting_source_node_names": [
        "Stereotypical Hand Movements"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031432" } }));
