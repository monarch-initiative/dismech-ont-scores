window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0500001"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0500001",
  "term_label": "Body odor",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.659411,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Isovaleric Acidemia",
      "disease_term_id": "MONDO:0009475",
      "source_file": "Isovaleric_Acidemia.yaml",
      "term_id": "HP:0500001",
      "term_label": "Body odor",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0500001",
      "best_source_term_label": "Body odor",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0500001"
      ],
      "supporting_source_term_labels": [
        "Body odor"
      ],
      "supporting_source_node_names": [
        "Characteristic sweaty feet odor"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "HP:0500001",
      "term_label": "Body odor",
      "score": 0.318821,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0410021",
      "best_source_term_label": "Musty odor",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0410021"
      ],
      "supporting_source_term_labels": [
        "Musty odor"
      ],
      "supporting_source_node_names": [
        "Musty Odor"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0500001" } }));
