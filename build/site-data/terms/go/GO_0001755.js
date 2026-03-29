window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001755"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001755",
  "term_label": "neural crest cell migration",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.61632,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "GO:0001755",
      "term_label": "neural crest cell migration",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0001755",
      "best_source_term_label": "neural crest cell migration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "GO:0001755",
      "term_label": "neural crest cell migration",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0001755",
      "best_source_term_label": "neural crest cell migration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0001755",
      "term_label": "neural crest cell migration",
      "score": 0.525916,
      "direct_score": 0.5,
      "propagated_score": 0.675,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0001755",
      "best_source_term_label": "neural crest cell migration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "GO:0001755",
      "term_label": "neural crest cell migration",
      "score": 0.272697,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0003253",
      "best_source_term_label": "cardiac neural crest cell migration involved in outflow tract morphogenesis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001755" } }));
