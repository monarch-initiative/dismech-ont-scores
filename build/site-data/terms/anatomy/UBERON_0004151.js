window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004151"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004151",
  "term_label": "cardiac chamber",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.362196,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "UBERON:0004151",
      "term_label": "cardiac chamber",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002081",
      "best_source_term_label": "cardiac atrium",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002081"
      ],
      "supporting_source_term_labels": [
        "cardiac atrium"
      ],
      "supporting_source_node_names": [
        "TBX5 Haploinsufficiency and Enhancer Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "UBERON:0004151",
      "term_label": "cardiac chamber",
      "score": 0.408052,
      "direct_score": 0.0,
      "propagated_score": 0.494628,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002084",
      "best_source_term_label": "heart left ventricle",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002084",
        "UBERON:0002135"
      ],
      "supporting_source_term_labels": [
        "heart left ventricle",
        "mitral valve"
      ],
      "supporting_source_node_names": [
        "Altered Calcium Handling",
        "Left Ventricular Outflow Tract Obstruction",
        "Mitochondrial Dysfunction",
        "Myocardial Fibrosis",
        "Myocyte Disarray",
        "Sarcomere Protein Mutations"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "UBERON:0004151",
      "term_label": "cardiac chamber",
      "score": 0.101059,
      "direct_score": 0.0,
      "propagated_score": 0.1225,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002080",
      "best_source_term_label": "heart right ventricle",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002080"
      ],
      "supporting_source_term_labels": [
        "heart right ventricle"
      ],
      "supporting_source_node_names": [
        "Right Ventricular Hypertrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004151" } }));
