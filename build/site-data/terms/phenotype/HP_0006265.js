window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006265"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006265",
  "term_label": "Aplasia/Hypoplasia of fingers",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.324681,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Brachydactyly Type A1",
      "disease_term_id": "MONDO:0007215",
      "source_file": "Brachydactyly_Type_A1.yaml",
      "term_id": "HP:0006265",
      "term_label": "Aplasia/Hypoplasia of fingers",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0005819",
      "best_source_term_label": "Short middle phalanx of finger",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005819"
      ],
      "supporting_source_term_labels": [
        "Short middle phalanx of finger"
      ],
      "supporting_source_node_names": [
        "Short Middle Phalanx of Finger"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand-Foot-Genital Syndrome",
      "disease_term_id": "MONDO:0007698",
      "source_file": "Hand-Foot-Genital_Syndrome.yaml",
      "term_id": "HP:0006265",
      "term_label": "Aplasia/Hypoplasia of fingers",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0009778",
      "best_source_term_label": "Short thumb",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009778"
      ],
      "supporting_source_term_labels": [
        "Short thumb"
      ],
      "supporting_source_node_names": [
        "Short Thumb"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0006265",
      "term_label": "Aplasia/Hypoplasia of fingers",
      "score": 0.165574,
      "direct_score": 0.0,
      "propagated_score": 0.200704,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0009777",
      "best_source_term_label": "Absent thumb",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009777"
      ],
      "supporting_source_term_labels": [
        "Absent thumb"
      ],
      "supporting_source_node_names": [
        "Absent or Hypoplastic Thumbs"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006265" } }));
