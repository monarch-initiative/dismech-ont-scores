window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004571"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004571",
  "term_label": "systemic arterial system",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.272697,
  "mean_score": 0.231159,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "UBERON:0004571",
      "term_label": "systemic arterial system",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001621",
      "best_source_term_label": "coronary artery",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "UBERON:0004571",
      "term_label": "systemic arterial system",
      "score": 0.244475,
      "direct_score": 0.0,
      "propagated_score": 0.313777,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000947",
      "best_source_term_label": "aorta",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0004571",
      "term_label": "systemic arterial system",
      "score": 0.212679,
      "direct_score": 0.0,
      "propagated_score": 0.272969,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005440",
      "best_source_term_label": "ductus arteriosus",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001508",
        "UBERON:0005440"
      ],
      "supporting_source_term_labels": [
        "arch of aorta",
        "ductus arteriosus"
      ],
      "supporting_source_node_names": [
        "Patent ductus arteriosus and aortic arch anomalies"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Loeys-Dietz Syndrome",
      "disease_term_id": "MONDO:0018954",
      "source_file": "Loeys-Dietz_Syndrome.yaml",
      "term_id": "UBERON:0004571",
      "term_label": "systemic arterial system",
      "score": 0.194784,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000947",
      "best_source_term_label": "aorta",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0000947"
      ],
      "supporting_source_term_labels": [
        "aorta"
      ],
      "supporting_source_node_names": [
        "Extracellular Matrix Degradation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004571" } }));
