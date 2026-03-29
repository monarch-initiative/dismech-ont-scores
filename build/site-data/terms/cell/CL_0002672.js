window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002672"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002672",
  "term_label": "retinal progenitor cell",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.567399,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Retinoblastoma",
      "disease_term_id": "MONDO:0008380",
      "source_file": "Retinoblastoma.yaml",
      "term_id": "CL:0002672",
      "term_label": "retinal progenitor cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0002672",
      "best_source_term_label": "retinal progenitor cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002672"
      ],
      "supporting_source_term_labels": [
        "retinal progenitor cell"
      ],
      "supporting_source_node_names": [
        "RB1 Tumor Suppressor Inactivation",
        "Uncontrolled Retinal Cell Proliferation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "PRPH2-Related Retinopathy",
      "disease_term_id": "MONDO:1040055",
      "source_file": "PRPH2-Related_Retinopathy.yaml",
      "term_id": "CL:0002672",
      "term_label": "retinal progenitor cell",
      "score": 0.498646,
      "direct_score": 0.0,
      "propagated_score": 0.64,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000604",
      "best_source_term_label": "retinal rod cell",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000573",
        "CL:0000604"
      ],
      "supporting_source_term_labels": [
        "retinal cone cell",
        "retinal rod cell"
      ],
      "supporting_source_node_names": [
        "PRPH2 complex assembly defect",
        "Photoreceptor outer segment morphogenesis and maintenance failure"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "RPGR-Related Retinopathy",
      "disease_term_id": "MONDO:0100437",
      "source_file": "RPGR-Related_Retinopathy.yaml",
      "term_id": "CL:0002672",
      "term_label": "retinal progenitor cell",
      "score": 0.498646,
      "direct_score": 0.0,
      "propagated_score": 0.64,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000604",
      "best_source_term_label": "retinal rod cell",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000573",
        "CL:0000604"
      ],
      "supporting_source_term_labels": [
        "retinal cone cell",
        "retinal rod cell"
      ],
      "supporting_source_node_names": [
        "Outer-segment cargo trafficking failure",
        "Progressive photoreceptor loss and retinal remodeling",
        "RPGR dysfunction at the photoreceptor connecting cilium",
        "Variant-position-dependent rod versus cone bias"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "CL:0002672",
      "term_label": "retinal progenitor cell",
      "score": 0.272304,
      "direct_score": 0.0,
      "propagated_score": 0.349496,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000604",
      "best_source_term_label": "retinal rod cell",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000573",
        "CL:0000604"
      ],
      "supporting_source_term_labels": [
        "retinal cone cell",
        "retinal rod cell"
      ],
      "supporting_source_node_names": [
        "ABCA4 transporter dysfunction",
        "Retinoid-adduct retention and bisretinoid precursor formation",
        "Secondary macular photoreceptor degeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002672" } }));
