window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004784"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004784",
  "term_label": "Juvenile gastrointestinal polyposis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.512,
  "mean_score": 0.512,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Juvenile Polyposis Syndrome",
      "disease_term_id": "MONDO:0017380",
      "source_file": "Juvenile_Polyposis_Syndrome.yaml",
      "term_id": "HP:0004784",
      "term_label": "Juvenile gastrointestinal polyposis",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0004784",
      "best_source_term_label": "Juvenile gastrointestinal polyposis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004784"
      ],
      "supporting_source_term_labels": [
        "Juvenile gastrointestinal polyposis"
      ],
      "supporting_source_node_names": [
        "Juvenile gastrointestinal polyposis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004784" } }));
