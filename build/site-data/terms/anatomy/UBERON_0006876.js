window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0006876"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0006876",
  "term_label": "vasculature of organ",
  "disease_count": 5,
  "direct_disease_count": 0,
  "top_score": 0.182178,
  "mean_score": 0.134465,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "IgA Nephropathy",
      "disease_term_id": "MONDO:0005342",
      "source_file": "IgA_Nephropathy.yaml",
      "term_id": "UBERON:0006876",
      "term_label": "vasculature of organ",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002320",
      "best_source_term_label": "glomerular mesangium",
      "best_source_path_score": 0.245,
      "best_source_path": "part_of > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002320"
      ],
      "supporting_source_term_labels": [
        "glomerular mesangium"
      ],
      "supporting_source_node_names": [
        "Anti-Gd-IgA1 Autoantibody Formation",
        "Mesangial Cell Activation and Proliferation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "UBERON:0006876",
      "term_label": "vasculature of organ",
      "score": 0.182178,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001621",
      "best_source_term_label": "coronary artery",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "disorder_name": "Hospital-Acquired Acute Kidney Injury",
      "disease_term_id": "MONDO:0002492",
      "source_file": "Hospital-Acquired_Acute_Kidney_Injury.yaml",
      "term_id": "UBERON:0006876",
      "term_label": "vasculature of organ",
      "score": 0.173503,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0006544",
      "best_source_term_label": "kidney vasculature",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0006544"
      ],
      "supporting_source_term_labels": [
        "kidney vasculature"
      ],
      "supporting_source_node_names": [
        "Sepsis-Associated AKI"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0006876",
      "term_label": "vasculature of organ",
      "score": 0.091089,
      "direct_score": 0.0,
      "propagated_score": 0.1225,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005440",
      "best_source_term_label": "ductus arteriosus",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0006876",
      "term_label": "vasculature of organ",
      "score": 0.043376,
      "direct_score": 0.0,
      "propagated_score": 0.058333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001281",
      "best_source_term_label": "hepatic sinusoid",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0006876" } }));
