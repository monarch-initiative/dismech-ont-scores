window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003007"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003007",
  "term_label": "heart morphogenesis",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.231306,
  "mean_score": 0.108957,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "GO:0003007",
      "term_label": "heart morphogenesis",
      "score": 0.231306,
      "direct_score": 0.0,
      "propagated_score": 0.296875,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0003151",
      "best_source_term_label": "outflow tract morphogenesis",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0003151",
        "GO:0003253"
      ],
      "supporting_source_term_labels": [
        "cardiac neural crest cell migration involved in outflow tract morphogenesis",
        "outflow tract morphogenesis"
      ],
      "supporting_source_node_names": [
        "Cardiac neural crest migration defect"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ellis-van Creveld Syndrome",
      "disease_term_id": "MONDO:0009162",
      "source_file": "Ellis-van_Creveld_Syndrome.yaml",
      "term_id": "GO:0003007",
      "term_label": "heart morphogenesis",
      "score": 0.097392,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0060411",
      "best_source_term_label": "cardiac septum morphogenesis",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0060411"
      ],
      "supporting_source_term_labels": [
        "cardiac septum morphogenesis"
      ],
      "supporting_source_node_names": [
        "Cardiac Septation Defect"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "GO:0003007",
      "term_label": "heart morphogenesis",
      "score": 0.068174,
      "direct_score": 0.0,
      "propagated_score": 0.0875,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0003147",
      "best_source_term_label": "neural crest cell migration involved in heart formation",
      "best_source_path_score": 0.175,
      "best_source_path": "is_a > part_of > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0003147"
      ],
      "supporting_source_term_labels": [
        "neural crest cell migration involved in heart formation"
      ],
      "supporting_source_node_names": [
        "Neural crest developmental dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "GO:0003007",
      "term_label": "heart morphogenesis",
      "score": 0.038957,
      "direct_score": 0.0,
      "propagated_score": 0.05,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0060413",
      "best_source_term_label": "atrial septum morphogenesis",
      "best_source_path_score": 0.175,
      "best_source_path": "is_a > part_of > part_of",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0060413"
      ],
      "supporting_source_term_labels": [
        "atrial septum morphogenesis"
      ],
      "supporting_source_node_names": [
        "TBX5 Haploinsufficiency and Enhancer Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003007" } }));
