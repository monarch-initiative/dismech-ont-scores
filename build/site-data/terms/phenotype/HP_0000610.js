window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000610"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000610",
  "term_label": "Abnormal choroid morphology",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.602823,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Spaceflight Associated Neuro-Ocular Syndrome",
      "disease_term_id": "",
      "source_file": "Spaceflight_Associated_Neuro-Ocular_Syndrome.yaml",
      "term_id": "HP:0000610",
      "term_label": "Abnormal choroid morphology",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0000610",
      "best_source_term_label": "Abnormal choroid morphology",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000610"
      ],
      "supporting_source_term_labels": [
        "Abnormal choroid morphology"
      ],
      "supporting_source_node_names": [
        "Choroidal and Retinal Folds"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "CHIME_syndrome",
      "disease_term_id": "MONDO:0010221",
      "source_file": "CHIME_syndrome.yaml",
      "term_id": "HP:0000610",
      "term_label": "Abnormal choroid morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000567",
      "best_source_term_label": "Chorioretinal coloboma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "HP:0000610",
      "term_label": "Abnormal choroid morphology",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001135",
      "best_source_term_label": "Chorioretinal dystrophy",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000610" } }));
