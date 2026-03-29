window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010967"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010967",
  "term_label": "Abnormal circulating carnitine concentration",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Long-chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012173",
      "source_file": "Long-Chain_3-Hydroxyacyl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0010967",
      "term_label": "Abnormal circulating carnitine concentration",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003234",
      "best_source_term_label": "Decreased circulating carnitine concentration",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003234"
      ],
      "supporting_source_term_labels": [
        "Decreased circulating carnitine concentration"
      ],
      "supporting_source_node_names": [
        "Hypocarnitinemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010967" } }));
