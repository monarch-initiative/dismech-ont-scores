window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011892"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011892",
  "term_label": "anterior uvea",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.296522,
  "mean_score": 0.259457,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Pars Planitis",
      "disease_term_id": "MONDO:0011644",
      "source_file": "Pars_Planitis.yaml",
      "term_id": "UBERON:0011892",
      "term_label": "anterior uvea",
      "score": 0.296522,
      "direct_score": 0.0,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001775",
      "best_source_term_label": "ciliary body",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001775"
      ],
      "supporting_source_term_labels": [
        "ciliary body"
      ],
      "supporting_source_node_names": [
        "Autoimmune T-Cell Predominant Inflammation",
        "Snowbank Formation at Pars Plana"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "UBERON:0011892",
      "term_label": "anterior uvea",
      "score": 0.222392,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001779",
      "best_source_term_label": "iris stroma",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001779"
      ],
      "supporting_source_term_labels": [
        "iris stroma"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011892" } }));
