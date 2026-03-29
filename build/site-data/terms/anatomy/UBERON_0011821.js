window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011821"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011821",
  "term_label": "irregular connective tissue",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.202117,
  "mean_score": 0.146535,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "UBERON:0011821",
      "term_label": "irregular connective tissue",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001013",
      "best_source_term_label": "adipose tissue",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001013"
      ],
      "supporting_source_term_labels": [
        "adipose tissue"
      ],
      "supporting_source_node_names": [
        "Estrogen Deficiency"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pars Planitis",
      "disease_term_id": "MONDO:0011644",
      "source_file": "Pars_Planitis.yaml",
      "term_id": "UBERON:0011821",
      "term_label": "irregular connective tissue",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001797",
      "best_source_term_label": "vitreous humor",
      "best_source_path_score": 0.245,
      "best_source_path": "part_of > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001797"
      ],
      "supporting_source_term_labels": [
        "vitreous humor"
      ],
      "supporting_source_node_names": [
        "Autoimmune T-Cell Predominant Inflammation",
        "Vitreous Cell Infiltration"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Crohn Disease",
      "disease_term_id": "MONDO:0005011",
      "source_file": "Crohn_Disease.yaml",
      "term_id": "UBERON:0011821",
      "term_label": "irregular connective tissue",
      "score": 0.035371,
      "direct_score": 0.0,
      "propagated_score": 0.042875,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0015143",
      "best_source_term_label": "mesenteric fat pad",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0015143"
      ],
      "supporting_source_term_labels": [
        "mesenteric fat pad"
      ],
      "supporting_source_node_names": [
        "Fibrosis and Stricture Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011821" } }));
