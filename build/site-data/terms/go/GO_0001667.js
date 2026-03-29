window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001667"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001667",
  "term_label": "ameboidal-type cell migration",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.265422,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "GO:0001667",
      "term_label": "ameboidal-type cell migration",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0001755",
      "best_source_term_label": "neural crest cell migration",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001755"
      ],
      "supporting_source_term_labels": [
        "neural crest cell migration"
      ],
      "supporting_source_node_names": [
        "Failure of Enteric Ganglion Cell Migration"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0001667",
      "term_label": "ameboidal-type cell migration",
      "score": 0.291772,
      "direct_score": 0.0,
      "propagated_score": 0.374482,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0001755",
      "best_source_term_label": "neural crest cell migration",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001755",
        "GO:0003147"
      ],
      "supporting_source_term_labels": [
        "neural crest cell migration",
        "neural crest cell migration involved in heart formation"
      ],
      "supporting_source_node_names": [
        "Neural crest developmental dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "GO:0001667",
      "term_label": "ameboidal-type cell migration",
      "score": 0.254517,
      "direct_score": 0.0,
      "propagated_score": 0.326667,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0001755",
      "best_source_term_label": "neural crest cell migration",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001755"
      ],
      "supporting_source_term_labels": [
        "neural crest cell migration"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "GO:0001667",
      "term_label": "ameboidal-type cell migration",
      "score": 0.133622,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0003253",
      "best_source_term_label": "cardiac neural crest cell migration involved in outflow tract morphogenesis",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003253"
      ],
      "supporting_source_term_labels": [
        "cardiac neural crest cell migration involved in outflow tract morphogenesis"
      ],
      "supporting_source_node_names": [
        "Cardiac neural crest migration defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001667" } }));
