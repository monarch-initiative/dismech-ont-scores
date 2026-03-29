window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001135"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001135",
  "term_label": "Chorioretinal dystrophy",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Long-chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012173",
      "source_file": "Long-Chain_3-Hydroxyacyl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0001135",
      "term_label": "Chorioretinal dystrophy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0001135",
      "best_source_term_label": "Chorioretinal dystrophy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001135"
      ],
      "supporting_source_term_labels": [
        "Chorioretinal dystrophy"
      ],
      "supporting_source_node_names": [
        "Chorioretinopathy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001135" } }));
