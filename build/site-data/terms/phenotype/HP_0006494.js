window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006494"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006494",
  "term_label": "Aplasia/Hypoplasia involving bones of the feet",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.305122,
  "mean_score": 0.305122,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Hand-Foot-Genital Syndrome",
      "disease_term_id": "MONDO:0007698",
      "source_file": "Hand-Foot-Genital_Syndrome.yaml",
      "term_id": "HP:0006494",
      "term_label": "Aplasia/Hypoplasia involving bones of the feet",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0010109",
      "best_source_term_label": "Short hallux",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010109"
      ],
      "supporting_source_term_labels": [
        "Short hallux"
      ],
      "supporting_source_node_names": [
        "Short Hallux"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Jackson-Weiss Syndrome",
      "disease_term_id": "MONDO:0007400",
      "source_file": "Jackson-Weiss_Syndrome.yaml",
      "term_id": "HP:0006494",
      "term_label": "Aplasia/Hypoplasia involving bones of the feet",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0010105",
      "best_source_term_label": "Short first metatarsal",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010105"
      ],
      "supporting_source_term_labels": [
        "Short first metatarsal"
      ],
      "supporting_source_node_names": [
        "Short First Metatarsal"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006494" } }));
