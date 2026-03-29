window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000546"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000546",
  "term_label": "Retinal degeneration",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.571887,
  "mean_score": 0.571887,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "HP:0000546",
      "term_label": "Retinal degeneration",
      "score": 0.571887,
      "direct_score": 0.0,
      "propagated_score": 0.571887,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0007722",
      "best_source_term_label": "Retinal pigment epithelial atrophy",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007401",
        "HP:0007722"
      ],
      "supporting_source_term_labels": [
        "Macular atrophy",
        "Retinal pigment epithelial atrophy"
      ],
      "supporting_source_node_names": [
        "Macular atrophy",
        "Retinal pigment epithelial atrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000546" } }));
