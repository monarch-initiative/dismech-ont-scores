window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002149"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002149",
  "term_label": "epithelial cell of uterus",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.660571,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "MSI-High Endometrial Cancer",
      "disease_term_id": "MONDO:0011962",
      "source_file": "MSI_High_Endometrial_Cancer.yaml",
      "term_id": "CL:0002149",
      "term_label": "epithelial cell of uterus",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:0002149",
      "best_source_term_label": "epithelial cell of uterus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002149"
      ],
      "supporting_source_term_labels": [
        "epithelial cell of uterus"
      ],
      "supporting_source_node_names": [
        "Mismatch Repair Deficiency"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Cervical Cancer",
      "disease_term_id": "MONDO:0002974",
      "source_file": "Cervical_Cancer.yaml",
      "term_id": "CL:0002149",
      "term_label": "epithelial cell of uterus",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002535",
      "best_source_term_label": "epithelial cell of cervix",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002535"
      ],
      "supporting_source_term_labels": [
        "epithelial cell of cervix"
      ],
      "supporting_source_node_names": [
        "E6 Oncoprotein-Mediated p53 Degradation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "CL:0002149",
      "term_label": "epithelial cell of uterus",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002656",
      "best_source_term_label": "glandular endometrial unciliated epithelial cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002656"
      ],
      "supporting_source_term_labels": [
        "glandular endometrial unciliated epithelial cell"
      ],
      "supporting_source_node_names": [
        "Accelerated Tumor Development",
        "DNA Mismatch Repair Deficiency",
        "Microsatellite Instability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002149" } }));
