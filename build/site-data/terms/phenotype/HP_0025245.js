window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025245"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025245",
  "term_label": "Cutaneous cyst",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Classic Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021055",
      "source_file": "Classic_Familial_Adenomatous_Polyposis.yaml",
      "term_id": "HP:0025245",
      "term_label": "Cutaneous cyst",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0200040",
      "best_source_term_label": "Epidermoid cyst",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0200040"
      ],
      "supporting_source_term_labels": [
        "Epidermoid cyst"
      ],
      "supporting_source_node_names": [
        "Epidermoid cysts (sebaceous cyst phenotype)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025245" } }));
