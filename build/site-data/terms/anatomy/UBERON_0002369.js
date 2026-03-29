window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002369"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002369",
  "term_label": "adrenal gland",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.778678,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Neuroblastoma",
      "disease_term_id": "MONDO:0005072",
      "source_file": "Neuroblastoma.yaml",
      "term_id": "UBERON:0002369",
      "term_label": "adrenal gland",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002369",
      "best_source_term_label": "adrenal gland",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002369"
      ],
      "supporting_source_term_labels": [
        "adrenal gland"
      ],
      "supporting_source_node_names": [
        "Neural Crest Developmental Arrest"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pheochromocytoma and Paraganglioma",
      "disease_term_id": "MONDO:0035540",
      "source_file": "Pheochromocytoma_Paraganglioma.yaml",
      "term_id": "UBERON:0002369",
      "term_label": "adrenal gland",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002369",
      "best_source_term_label": "adrenal gland",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002369"
      ],
      "supporting_source_term_labels": [
        "adrenal gland"
      ],
      "supporting_source_node_names": [
        "Succinate Dehydrogenase Complex Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "UBERON:0002369",
      "term_label": "adrenal gland",
      "score": 0.336035,
      "direct_score": 0.0,
      "propagated_score": 0.407331,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002053",
      "best_source_term_label": "zona glomerulosa of adrenal gland",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001235",
        "UBERON:0002053",
        "UBERON:0002054"
      ],
      "supporting_source_term_labels": [
        "adrenal cortex",
        "zona fasciculata of adrenal gland",
        "zona glomerulosa of adrenal gland"
      ],
      "supporting_source_node_names": [
        "Autoimmune Adrenalitis",
        "Reduced Aldosterone Production"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002369" } }));
