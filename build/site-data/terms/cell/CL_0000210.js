window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000210"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000210",
  "term_label": "photoreceptor cell",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 0.581303,
  "mean_score": 0.489162,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "RPGR-Related Retinopathy",
      "disease_term_id": "MONDO:0100437",
      "source_file": "RPGR-Related_Retinopathy.yaml",
      "term_id": "CL:0000210",
      "term_label": "photoreceptor cell",
      "score": 0.581303,
      "direct_score": 0.411765,
      "propagated_score": 0.746089,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0000210",
      "best_source_term_label": "photoreceptor cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000210",
        "CL:0000573",
        "CL:0000604"
      ],
      "supporting_source_term_labels": [
        "photoreceptor cell",
        "retinal cone cell",
        "retinal rod cell"
      ],
      "supporting_source_node_names": [
        "Progressive photoreceptor loss and retinal remodeling",
        "RPGR dysfunction at the photoreceptor connecting cilium"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "CL:0000210",
      "term_label": "photoreceptor cell",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0000210",
      "best_source_term_label": "photoreceptor cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000210"
      ],
      "supporting_source_term_labels": [
        "photoreceptor cell"
      ],
      "supporting_source_node_names": [
        "Retinal Pigment Epithelium Dysfunction"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "PRPH2-Related Retinopathy",
      "disease_term_id": "MONDO:1040055",
      "source_file": "PRPH2-Related_Retinopathy.yaml",
      "term_id": "CL:0000210",
      "term_label": "photoreceptor cell",
      "score": 0.442822,
      "direct_score": 0.0,
      "propagated_score": 0.568351,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000604",
      "best_source_term_label": "retinal rod cell",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "CL:0000210",
      "term_label": "photoreceptor cell",
      "score": 0.432522,
      "direct_score": 0.360577,
      "propagated_score": 0.555132,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0000210",
      "best_source_term_label": "photoreceptor cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000210",
        "CL:0000573",
        "CL:0000604"
      ],
      "supporting_source_term_labels": [
        "photoreceptor cell",
        "retinal cone cell",
        "retinal rod cell"
      ],
      "supporting_source_node_names": [
        "ABCA4 transporter dysfunction",
        "Retinoid-adduct retention and bisretinoid precursor formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000210" } }));
