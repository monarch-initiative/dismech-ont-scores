window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0010191"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0010191",
  "term_label": "aortic system",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.481397,
  "mean_score": 0.314803,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "UBERON:0010191",
      "term_label": "aortic system",
      "score": 0.481397,
      "direct_score": 0.0,
      "propagated_score": 0.583534,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000947",
      "best_source_term_label": "aorta",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000947",
        "UBERON:0003618",
        "UBERON:0003619"
      ],
      "supporting_source_term_labels": [
        "aorta",
        "aorta tunica intima",
        "aorta tunica media"
      ],
      "supporting_source_node_names": [
        "Dysregulated TGF-beta Signaling",
        "Extracellular Matrix Remodeling",
        "Impaired Mechanotransduction",
        "Mitochondrial Dysfunction",
        "Vascular Inflammation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Loeys-Dietz Syndrome",
      "disease_term_id": "MONDO:0018954",
      "source_file": "Loeys-Dietz_Syndrome.yaml",
      "term_id": "UBERON:0010191",
      "term_label": "aortic system",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000947",
      "best_source_term_label": "aorta",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0000947"
      ],
      "supporting_source_term_labels": [
        "aorta"
      ],
      "supporting_source_node_names": [
        "Extracellular Matrix Degradation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0010191",
      "term_label": "aortic system",
      "score": 0.050529,
      "direct_score": 0.0,
      "propagated_score": 0.06125,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001508",
      "best_source_term_label": "arch of aorta",
      "best_source_path_score": 0.1225,
      "best_source_path": "is_a > is_a > part_of > part_of",
      "best_path_hops": 4,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001508"
      ],
      "supporting_source_term_labels": [
        "arch of aorta"
      ],
      "supporting_source_node_names": [
        "Patent ductus arteriosus and aortic arch anomalies"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0010191" } }));
