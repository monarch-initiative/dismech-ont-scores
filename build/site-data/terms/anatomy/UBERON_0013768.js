window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0013768"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0013768",
  "term_label": "great vessel of heart",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.599278,
  "mean_score": 0.529907,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "UBERON:0013768",
      "term_label": "great vessel of heart",
      "score": 0.599278,
      "direct_score": 0.0,
      "propagated_score": 0.769159,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000947",
      "best_source_term_label": "aorta",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "term_id": "UBERON:0013768",
      "term_label": "great vessel of heart",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000947",
      "best_source_term_label": "aorta",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "UBERON:0013768",
      "term_label": "great vessel of heart",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002012",
      "best_source_term_label": "pulmonary artery",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002012"
      ],
      "supporting_source_term_labels": [
        "pulmonary artery"
      ],
      "supporting_source_node_names": [
        "Endothelial Dysfunction",
        "Increased Pulmonary Vascular Resistance",
        "Inflammation and Immune Activation",
        "Vascular Remodeling"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0013768",
      "term_label": "great vessel of heart",
      "score": 0.429562,
      "direct_score": 0.0,
      "propagated_score": 0.551332,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002016",
      "best_source_term_label": "pulmonary vein",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001072",
        "UBERON:0001508",
        "UBERON:0002016"
      ],
      "supporting_source_term_labels": [
        "arch of aorta",
        "inferior vena cava",
        "pulmonary vein"
      ],
      "supporting_source_node_names": [
        "Anomalous pulmonary venous drainage",
        "Patent ductus arteriosus and aortic arch anomalies"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0013768" } }));
