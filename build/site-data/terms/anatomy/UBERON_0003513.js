window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003513"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003513",
  "term_label": "trunk blood vessel",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.282964,
  "mean_score": 0.152486,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "UBERON:0003513",
      "term_label": "trunk blood vessel",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001621",
      "best_source_term_label": "coronary artery",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001621"
      ],
      "supporting_source_term_labels": [
        "coronary artery"
      ],
      "supporting_source_node_names": [
        "Vascular Inflammation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0003513",
      "term_label": "trunk blood vessel",
      "score": 0.141482,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005440",
      "best_source_term_label": "ductus arteriosus",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005440"
      ],
      "supporting_source_term_labels": [
        "ductus arteriosus"
      ],
      "supporting_source_node_names": [
        "Patent ductus arteriosus and aortic arch anomalies"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "UBERON:0003513",
      "term_label": "trunk blood vessel",
      "score": 0.033012,
      "direct_score": 0.0,
      "propagated_score": 0.040017,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001281",
      "best_source_term_label": "hepatic sinusoid",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001281"
      ],
      "supporting_source_term_labels": [
        "hepatic sinusoid"
      ],
      "supporting_source_node_names": [
        "Portal Hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003513" } }));
