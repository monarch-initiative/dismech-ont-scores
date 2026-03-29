window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006483"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006483",
  "term_label": "Abnormal number of teeth",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.772144,
  "mean_score": 0.69742,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "HP:0006483",
      "term_label": "Abnormal number of teeth",
      "score": 0.772144,
      "direct_score": 0.0,
      "propagated_score": 0.868,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0011069",
      "best_source_term_label": "Supernumerary tooth",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009804",
        "HP:0011069"
      ],
      "supporting_source_term_labels": [
        "Supernumerary tooth",
        "Tooth agenesis"
      ],
      "supporting_source_node_names": [
        "Supernumerary tooth",
        "Tooth agenesis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cleidocranial Dysplasia",
      "disease_term_id": "MONDO:0007340",
      "source_file": "Cleidocranial_Dysplasia.yaml",
      "term_id": "HP:0006483",
      "term_label": "Abnormal number of teeth",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0011069",
      "best_source_term_label": "Supernumerary tooth",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011069"
      ],
      "supporting_source_term_labels": [
        "Supernumerary tooth"
      ],
      "supporting_source_node_names": [
        "Supernumerary Tooth"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006483" } }));
