window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002345"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002345",
  "term_label": "Action tremor",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.435888,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "L-2-Hydroxyglutaric Aciduria",
      "disease_term_id": "MONDO:0009370",
      "source_file": "L-2-Hydroxyglutaric_Aciduria.yaml",
      "term_id": "HP:0002345",
      "term_label": "Action tremor",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002080",
      "best_source_term_label": "Intention tremor",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002080"
      ],
      "supporting_source_term_labels": [
        "Intention tremor"
      ],
      "supporting_source_node_names": [
        "Intention tremor"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "HP:0002345",
      "term_label": "Action tremor",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002599",
      "best_source_term_label": "Head titubation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002599"
      ],
      "supporting_source_term_labels": [
        "Head titubation"
      ],
      "supporting_source_node_names": [
        "Head Titubation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002345" } }));
