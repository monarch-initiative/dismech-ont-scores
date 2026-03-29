window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003937"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003937",
  "term_label": "reproductive gland",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.288739,
  "mean_score": 0.225434,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "UBERON:0003937",
      "term_label": "reproductive gland",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002196",
      "best_source_term_label": "adenohypophysis",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002196"
      ],
      "supporting_source_term_labels": [
        "adenohypophysis"
      ],
      "supporting_source_node_names": [
        "Hyperprolactinemia-associated endocrine dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "BRCA-Mutant Prostate Cancer",
      "disease_term_id": "MONDO:0008315",
      "source_file": "BRCA_Mutant_Prostate_Cancer.yaml",
      "term_id": "UBERON:0003937",
      "term_label": "reproductive gland",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002367",
      "best_source_term_label": "prostate gland",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002367"
      ],
      "supporting_source_term_labels": [
        "prostate gland"
      ],
      "supporting_source_node_names": [
        "Homologous Recombination Repair Deficiency"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "UBERON:0003937",
      "term_label": "reproductive gland",
      "score": 0.1046,
      "direct_score": 0.0,
      "propagated_score": 0.126792,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0000007",
      "best_source_term_label": "pituitary gland",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000007"
      ],
      "supporting_source_term_labels": [
        "pituitary gland"
      ],
      "supporting_source_node_names": [
        "CNS Developmental Anomalies",
        "Endocrine Gland Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003937" } }));
