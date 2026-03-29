window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0001849"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0001849",
  "term_label": "membranous labyrinth",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.511862,
  "mean_score": 0.411606,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Labyrinthitis",
      "disease_term_id": "MONDO:0002008",
      "source_file": "Labyrinthitis.yaml",
      "term_id": "UBERON:0001849",
      "term_label": "membranous labyrinth",
      "score": 0.511862,
      "direct_score": 0.384737,
      "propagated_score": 0.575405,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0001849",
      "best_source_term_label": "membranous labyrinth",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001849",
        "UBERON:0001862",
        "UBERON:0002227",
        "UBERON:0002282"
      ],
      "supporting_source_term_labels": [
        "membranous labyrinth",
        "spiral organ of cochlea",
        "stria vascularis of cochlear duct",
        "vestibular labyrinth"
      ],
      "supporting_source_node_names": [
        "Labyrinthitis ossificans",
        "Pathogen entry into the inner ear"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "UBERON:0001849",
      "term_label": "membranous labyrinth",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001841",
      "best_source_term_label": "anterior semicircular canal",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001841"
      ],
      "supporting_source_term_labels": [
        "anterior semicircular canal"
      ],
      "supporting_source_node_names": [
        "Bony Dehiscence of Semicircular Canal"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0001849" } }));
