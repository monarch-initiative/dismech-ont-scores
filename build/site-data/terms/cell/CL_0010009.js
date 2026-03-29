window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0010009"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0010009",
  "term_label": "camera-type eye photoreceptor cell",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.750721,
  "mean_score": 0.655161,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "PRPH2-Related Retinopathy",
      "disease_term_id": "MONDO:1040055",
      "source_file": "PRPH2-Related_Retinopathy.yaml",
      "term_id": "CL:0010009",
      "term_label": "camera-type eye photoreceptor cell",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000604",
      "best_source_term_label": "retinal rod cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
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
      "term_id": "CL:0010009",
      "term_label": "camera-type eye photoreceptor cell",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000604",
      "best_source_term_label": "retinal rod cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
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
      "term_id": "CL:0010009",
      "term_label": "camera-type eye photoreceptor cell",
      "score": 0.46404,
      "direct_score": 0.0,
      "propagated_score": 0.562494,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0000604",
      "best_source_term_label": "retinal rod cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0010009" } }));
