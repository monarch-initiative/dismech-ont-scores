window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002282"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002282",
  "term_label": "stria vascularis of cochlear duct",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.37092,
  "mean_score": 0.37092,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0002282",
      "term_label": "stria vascularis of cochlear duct",
      "score": 0.37092,
      "direct_score": 0.37092,
      "propagated_score": 0.37092,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002282",
      "best_source_term_label": "stria vascularis of cochlear duct",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002282"
      ],
      "supporting_source_term_labels": [
        "stria vascularis of cochlear duct"
      ],
      "supporting_source_node_names": [
        "Blood-labyrinth barrier disruption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002282" } }));
