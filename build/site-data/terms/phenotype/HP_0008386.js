window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008386"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008386",
  "term_label": "Aplasia/Hypoplasia of the nails",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.505586,
  "mean_score": 0.405354,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Temple-Baraitser Syndrome",
      "disease_term_id": "MONDO:0012735",
      "source_file": "Temple-Baraitser_Syndrome.yaml",
      "term_id": "HP:0008386",
      "term_label": "Aplasia/Hypoplasia of the nails",
      "score": 0.505586,
      "direct_score": 0.0,
      "propagated_score": 0.568351,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0012555",
      "best_source_term_label": "Absent nail of hallux",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012554",
        "HP:0012555"
      ],
      "supporting_source_term_labels": [
        "Absent nail of hallux",
        "Absent thumbnail"
      ],
      "supporting_source_node_names": [
        "Aplasia/hypoplasia of great toe nail",
        "Aplasia/hypoplasia of thumbnail"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Coffin-Siris syndrome",
      "disease_term_id": "MONDO:0015452",
      "source_file": "Coffin_Siris_Syndrome.yaml",
      "term_id": "HP:0008386",
      "term_label": "Aplasia/Hypoplasia of the nails",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0008398",
      "best_source_term_label": "Hypoplastic fifth fingernail",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008398"
      ],
      "supporting_source_term_labels": [
        "Hypoplastic fifth fingernail"
      ],
      "supporting_source_node_names": [
        "Hypoplastic fifth fingernail"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008386" } }));
