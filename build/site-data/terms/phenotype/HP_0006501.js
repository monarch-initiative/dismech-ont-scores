window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006501"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006501",
  "term_label": "Aplasia/Hypoplasia of the radius",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.311349,
  "mean_score": 0.283203,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Holt-Oram Syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt-Oram_Syndrome.yaml",
      "term_id": "HP:0006501",
      "term_label": "Aplasia/Hypoplasia of the radius",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002984",
      "best_source_term_label": "Hypoplasia of the radius",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002984"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the radius"
      ],
      "supporting_source_node_names": [
        "Radial Hypoplasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0006501",
      "term_label": "Aplasia/Hypoplasia of the radius",
      "score": 0.255057,
      "direct_score": 0.0,
      "propagated_score": 0.28672,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002984",
      "best_source_term_label": "Hypoplasia of the radius",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002984"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the radius"
      ],
      "supporting_source_node_names": [
        "Radial Ray Defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006501" } }));
