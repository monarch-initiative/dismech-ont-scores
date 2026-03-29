window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001269"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001269",
  "term_label": "Hemiparesis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Diffuse Midline Glioma, H3 K27-Altered",
      "disease_term_id": "MONDO:1060171",
      "source_file": "H3_K27_Altered_Diffuse_Midline_Glioma.yaml",
      "term_id": "HP:0001269",
      "term_label": "Hemiparesis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001269",
      "best_source_term_label": "Hemiparesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001269"
      ],
      "supporting_source_term_labels": [
        "Hemiparesis"
      ],
      "supporting_source_node_names": [
        "Long Tract Signs"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Glioblastoma, IDH-Wildtype",
      "disease_term_id": "MONDO:0850335",
      "source_file": "Glioblastoma_IDH_Wildtype.yaml",
      "term_id": "HP:0001269",
      "term_label": "Hemiparesis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001269",
      "best_source_term_label": "Hemiparesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001269"
      ],
      "supporting_source_term_labels": [
        "Hemiparesis"
      ],
      "supporting_source_node_names": [
        "Focal Neurological Deficit"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001269" } }));
