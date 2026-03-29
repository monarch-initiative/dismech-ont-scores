window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001637"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001637",
  "term_label": "artery",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.580455,
  "mean_score": 0.485985,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "UBERON:0001637",
      "term_label": "artery",
      "score": 0.580455,
      "direct_score": 0.0,
      "propagated_score": 0.745,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000415",
      "best_source_term_label": "artery wall",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000415",
        "UBERON:0001621"
      ],
      "supporting_source_term_labels": [
        "artery wall",
        "coronary artery"
      ],
      "supporting_source_node_names": [
        "Vascular Inflammation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "UBERON:0001637",
      "term_label": "artery",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002012",
      "best_source_term_label": "pulmonary artery",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002012"
      ],
      "supporting_source_term_labels": [
        "pulmonary artery"
      ],
      "supporting_source_node_names": [
        "Endothelial Dysfunction",
        "Increased Pulmonary Vascular Resistance",
        "Inflammation and Immune Activation",
        "Vascular Remodeling"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "UBERON:0001637",
      "term_label": "artery",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004552",
      "best_source_term_label": "digital artery",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0004552"
      ],
      "supporting_source_term_labels": [
        "digital artery"
      ],
      "supporting_source_node_names": [
        "Alpha-2C Adrenoceptor Cold-Induced Vasoconstriction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0001637",
      "term_label": "artery",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005440",
      "best_source_term_label": "ductus arteriosus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001637" } }));
