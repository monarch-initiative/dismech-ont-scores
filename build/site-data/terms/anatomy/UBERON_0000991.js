window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000991"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000991",
  "term_label": "gonad",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.716102,
  "mean_score": 0.614914,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "UBERON:0000991",
      "term_label": "gonad",
      "score": 0.716102,
      "direct_score": 0.0,
      "propagated_score": 0.805,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000473",
      "best_source_term_label": "testis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000473",
        "UBERON:0001343"
      ],
      "supporting_source_term_labels": [
        "seminiferous tubule of testis",
        "testis"
      ],
      "supporting_source_node_names": [
        "Hypergonadotropic Hypogonadism",
        "Progressive Germ Cell Loss",
        "Testicular Microenvironment Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "UBERON:0000991",
      "term_label": "gonad",
      "score": 0.513725,
      "direct_score": 0.0,
      "propagated_score": 0.5775,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000992",
      "best_source_term_label": "ovary",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000473",
        "UBERON:0000992"
      ],
      "supporting_source_term_labels": [
        "ovary",
        "testis"
      ],
      "supporting_source_node_names": [
        "CYP19A1 Gene Mutation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000991" } }));
