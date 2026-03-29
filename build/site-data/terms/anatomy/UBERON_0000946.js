window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000946"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000946",
  "term_label": "cardiac valve",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.124539,
  "mean_score": 0.078413,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "UBERON:0000946",
      "term_label": "cardiac valve",
      "score": 0.124539,
      "direct_score": 0.0,
      "propagated_score": 0.14,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002146",
      "best_source_term_label": "pulmonary valve",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002146"
      ],
      "supporting_source_term_labels": [
        "pulmonary valve"
      ],
      "supporting_source_node_names": [
        "Cardiac Valve Morphogenesis Defects"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "UBERON:0000946",
      "term_label": "cardiac valve",
      "score": 0.032288,
      "direct_score": 0.0,
      "propagated_score": 0.036296,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002135",
      "best_source_term_label": "mitral valve",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002135"
      ],
      "supporting_source_term_labels": [
        "mitral valve"
      ],
      "supporting_source_node_names": [
        "Left Ventricular Outflow Tract Obstruction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000946" } }));
