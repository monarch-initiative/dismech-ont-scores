window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000974"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000974",
  "term_label": "neck",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 0.206242,
  "mean_score": 0.103879,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0000974",
      "term_label": "neck",
      "score": 0.206242,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0035775",
      "best_source_term_label": "submandibular region",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0035775"
      ],
      "supporting_source_term_labels": [
        "submandibular region"
      ],
      "supporting_source_node_names": [
        "Polymicrobial Cellulitis of Mouth Floor"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Transient Neonatal Pustular Melanosis",
      "disease_term_id": "",
      "source_file": "Transient_Neonatal_Pustular_Melanosis.yaml",
      "term_id": "UBERON:0000974",
      "term_label": "neck",
      "score": 0.088889,
      "direct_score": 0.088889,
      "propagated_score": 0.088889,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000974",
      "best_source_term_label": "neck",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000974"
      ],
      "supporting_source_term_labels": [
        "neck"
      ],
      "supporting_source_node_names": [
        "Hyper pigmentation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Retrograde Cricopharyngeus Dysfunction",
      "disease_term_id": "MONDO:0100099",
      "source_file": "Retrograde_Cricopharyngeus_Dysfunction.yaml",
      "term_id": "UBERON:0000974",
      "term_label": "neck",
      "score": 0.016506,
      "direct_score": 0.0,
      "propagated_score": 0.020008,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0010928",
      "best_source_term_label": "cricopharyngeus muscle",
      "best_source_path_score": 0.060025,
      "best_source_path": "part_of > is_a > is_a > is_a > is_a > part_of",
      "best_path_hops": 6,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0010928"
      ],
      "supporting_source_term_labels": [
        "cricopharyngeus muscle"
      ],
      "supporting_source_node_names": [
        "Failure of Upper Esophageal Sphincter Relaxation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000974" } }));
