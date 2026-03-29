window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0004590"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0004590",
  "term_label": "sphincter muscle",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.472938,
  "mean_score": 0.454413,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Retrograde Cricopharyngeus Dysfunction",
      "disease_term_id": "MONDO:0100099",
      "source_file": "Retrograde_Cricopharyngeus_Dysfunction.yaml",
      "term_id": "UBERON:0004590",
      "term_label": "sphincter muscle",
      "score": 0.472938,
      "direct_score": 0.0,
      "propagated_score": 0.53165,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007268",
      "best_source_term_label": "upper esophageal sphincter",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0007268",
        "UBERON:0010928"
      ],
      "supporting_source_term_labels": [
        "cricopharyngeus muscle",
        "upper esophageal sphincter"
      ],
      "supporting_source_node_names": [
        "Elevated Upper Esophageal Sphincter Basal Pressure",
        "Failure of Upper Esophageal Sphincter Relaxation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Gastroesophageal Reflux Disease",
      "disease_term_id": "MONDO:0007186",
      "source_file": "Gastroesophageal_Reflux_Disease.yaml",
      "term_id": "UBERON:0004590",
      "term_label": "sphincter muscle",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004550",
      "best_source_term_label": "gastroesophageal sphincter",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0004550"
      ],
      "supporting_source_term_labels": [
        "gastroesophageal sphincter"
      ],
      "supporting_source_node_names": [
        "Lower Esophageal Sphincter Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0004590" } }));
