window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000532"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000532",
  "term_label": "Abnormal chorioretinal morphology",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CHIME_syndrome",
      "disease_term_id": "MONDO:0010221",
      "source_file": "CHIME_syndrome.yaml",
      "term_id": "HP:0000532",
      "term_label": "Abnormal chorioretinal morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000567",
      "best_source_term_label": "Chorioretinal coloboma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000567"
      ],
      "supporting_source_term_labels": [
        "Chorioretinal coloboma"
      ],
      "supporting_source_node_names": [
        "Chorioretinal Coloboma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Long-chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012173",
      "source_file": "Long-Chain_3-Hydroxyacyl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0000532",
      "term_label": "Abnormal chorioretinal morphology",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0001135",
      "best_source_term_label": "Chorioretinal dystrophy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000532" } }));
