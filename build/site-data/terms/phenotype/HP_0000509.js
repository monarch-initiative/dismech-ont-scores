window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000509"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000509",
  "term_label": "Conjunctivitis",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.845444,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Kawasaki Disease",
      "disease_term_id": "MONDO:0012727",
      "source_file": "Kawasaki_Disease.yaml",
      "term_id": "HP:0000509",
      "term_label": "Conjunctivitis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000509",
      "best_source_term_label": "Conjunctivitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000509"
      ],
      "supporting_source_term_labels": [
        "Conjunctivitis"
      ],
      "supporting_source_node_names": [
        "Conjunctivitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Leptospirosis",
      "disease_term_id": "MONDO:0005825",
      "source_file": "Leptospirosis.yaml",
      "term_id": "HP:0000509",
      "term_label": "Conjunctivitis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000509",
      "best_source_term_label": "Conjunctivitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000509"
      ],
      "supporting_source_term_labels": [
        "Conjunctivitis"
      ],
      "supporting_source_node_names": [
        "Conjunctival suffusion"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Monkeypox",
      "disease_term_id": "MONDO:0002594",
      "source_file": "Monkeypox.yaml",
      "term_id": "HP:0000509",
      "term_label": "Conjunctivitis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0000509",
      "best_source_term_label": "Conjunctivitis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000509"
      ],
      "supporting_source_term_labels": [
        "Conjunctivitis"
      ],
      "supporting_source_node_names": [
        "Conjunctivitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Sjogren's Syndrome",
      "disease_term_id": "MONDO:0010030",
      "source_file": "Sjogrens_Syndrome.yaml",
      "term_id": "HP:0000509",
      "term_label": "Conjunctivitis",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001097",
      "best_source_term_label": "Keratoconjunctivitis sicca",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001097"
      ],
      "supporting_source_term_labels": [
        "Keratoconjunctivitis sicca"
      ],
      "supporting_source_node_names": [
        "Keratoconjunctivitis Sicca"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000509" } }));
