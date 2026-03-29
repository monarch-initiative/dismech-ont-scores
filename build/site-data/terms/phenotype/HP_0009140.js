window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009140"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009140",
  "term_label": "Synostosis involving bones of the feet",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Jackson-Weiss Syndrome",
      "disease_term_id": "MONDO:0007400",
      "source_file": "Jackson-Weiss_Syndrome.yaml",
      "term_id": "HP:0009140",
      "term_label": "Synostosis involving bones of the feet",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0008368",
      "best_source_term_label": "Tarsal synostosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008368"
      ],
      "supporting_source_term_labels": [
        "Tarsal synostosis"
      ],
      "supporting_source_node_names": [
        "Tarsal-Metatarsal Fusion"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Spondylocarpotarsal Synostosis Syndrome",
      "disease_term_id": "MONDO:0010094",
      "source_file": "Spondylocarpotarsal_Synostosis_Syndrome.yaml",
      "term_id": "HP:0009140",
      "term_label": "Synostosis involving bones of the feet",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0008368",
      "best_source_term_label": "Tarsal synostosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008368"
      ],
      "supporting_source_term_labels": [
        "Tarsal synostosis"
      ],
      "supporting_source_node_names": [
        "Tarsal Synostosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009140" } }));
