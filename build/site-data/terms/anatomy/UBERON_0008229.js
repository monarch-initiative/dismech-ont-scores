window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0008229"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0008229",
  "term_label": "craniocervical region musculature",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.051891,
  "mean_score": 0.032175,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "UBERON:0008229",
      "term_label": "craniocervical region musculature",
      "score": 0.051891,
      "direct_score": 0.0,
      "propagated_score": 0.058333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001601",
      "best_source_term_label": "extra-ocular muscle",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001601"
      ],
      "supporting_source_term_labels": [
        "extra-ocular muscle"
      ],
      "supporting_source_node_names": [
        "TSHR-IGF1R Receptor Crosstalk in Orbital Fibroblasts"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Retrograde Cricopharyngeus Dysfunction",
      "disease_term_id": "MONDO:0100099",
      "source_file": "Retrograde_Cricopharyngeus_Dysfunction.yaml",
      "term_id": "UBERON:0008229",
      "term_label": "craniocervical region musculature",
      "score": 0.012459,
      "direct_score": 0.0,
      "propagated_score": 0.014006,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0010928",
      "best_source_term_label": "cricopharyngeus muscle",
      "best_source_path_score": 0.042017,
      "best_source_path": "part_of > is_a > is_a > is_a > is_a > is_a > part_of",
      "best_path_hops": 7,
      "best_path_is_a_hops": 5,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0008229" } }));
