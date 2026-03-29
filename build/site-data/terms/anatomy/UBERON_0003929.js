window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003929"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003929",
  "term_label": "digestive tract epithelium",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.364745,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Gastroesophageal Reflux Disease",
      "disease_term_id": "MONDO:0007186",
      "source_file": "Gastroesophageal_Reflux_Disease.yaml",
      "term_id": "UBERON:0003929",
      "term_label": "digestive tract epithelium",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001976",
      "best_source_term_label": "epithelium of esophagus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001976"
      ],
      "supporting_source_term_labels": [
        "epithelium of esophagus"
      ],
      "supporting_source_node_names": [
        "Barrett's Esophagus Metaplastic Adaptation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "UBERON:0003929",
      "term_label": "digestive tract epithelium",
      "score": 0.106793,
      "direct_score": 0.0,
      "propagated_score": 0.12005,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007124",
      "best_source_term_label": "pharyngeal pouch 3",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0007124"
      ],
      "supporting_source_term_labels": [
        "pharyngeal pouch 3"
      ],
      "supporting_source_node_names": [
        "TBX1 haploinsufficiency and pharyngeal arch development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003929" } }));
