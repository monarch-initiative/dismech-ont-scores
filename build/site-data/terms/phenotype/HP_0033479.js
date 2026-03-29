window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033479"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033479",
  "term_label": "Abnormal circulating bilirubin concentration",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.435888,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Gilbert's Syndrome",
      "disease_term_id": "MONDO:0007745",
      "source_file": "Gilberts_Syndrome.yaml",
      "term_id": "HP:0033479",
      "term_label": "Abnormal circulating bilirubin concentration",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0008282",
      "best_source_term_label": "Unconjugated hyperbilirubinemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008282"
      ],
      "supporting_source_term_labels": [
        "Unconjugated hyperbilirubinemia"
      ],
      "supporting_source_node_names": [
        "Mild Unconjugated Hyperbilirubinemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "HP:0033479",
      "term_label": "Abnormal circulating bilirubin concentration",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0003265",
      "best_source_term_label": "Neonatal hyperbilirubinemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003265"
      ],
      "supporting_source_term_labels": [
        "Neonatal hyperbilirubinemia"
      ],
      "supporting_source_node_names": [
        "Neonatal Jaundice"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033479" } }));
