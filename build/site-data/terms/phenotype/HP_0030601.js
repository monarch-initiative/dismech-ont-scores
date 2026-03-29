window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030601"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030601",
  "term_label": "Abnormal posterior segment imaging",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.774373,
  "mean_score": 0.698535,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "HP:0030601",
      "term_label": "Abnormal posterior segment imaging",
      "score": 0.774373,
      "direct_score": 0.0,
      "propagated_score": 0.870505,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0030602",
      "best_source_term_label": "Abnormal fundus autofluorescence imaging",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030329",
        "HP:0030602",
        "HP:0030610"
      ],
      "supporting_source_term_labels": [
        "Abnormal fundus autofluorescence imaging",
        "Photoreceptor outer segment loss on macular OCT",
        "Retinal thinning on OCT"
      ],
      "supporting_source_node_names": [
        "Abnormal fundus autofluorescence",
        "Photoreceptor outer segment loss on macular OCT",
        "Retinal thinning on OCT"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "PRPH2-Related Retinopathy",
      "disease_term_id": "MONDO:1040055",
      "source_file": "PRPH2-Related_Retinopathy.yaml",
      "term_id": "HP:0030601",
      "term_label": "Abnormal posterior segment imaging",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0030602",
      "best_source_term_label": "Abnormal fundus autofluorescence imaging",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030602"
      ],
      "supporting_source_term_labels": [
        "Abnormal fundus autofluorescence imaging"
      ],
      "supporting_source_node_names": [
        "Abnormal fundus autofluorescence imaging"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030601" } }));
