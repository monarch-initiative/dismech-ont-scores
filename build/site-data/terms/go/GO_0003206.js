window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0003206"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0003206",
  "term_label": "cardiac chamber morphogenesis",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.222392,
  "mean_score": 0.155674,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ellis-van Creveld Syndrome",
      "disease_term_id": "MONDO:0009162",
      "source_file": "Ellis-van_Creveld_Syndrome.yaml",
      "term_id": "GO:0003206",
      "term_label": "cardiac chamber morphogenesis",
      "score": 0.222392,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0060411",
      "best_source_term_label": "cardiac septum morphogenesis",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "GO:0003206",
      "term_label": "cardiac chamber morphogenesis",
      "score": 0.088957,
      "direct_score": 0.0,
      "propagated_score": 0.1,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0060413",
      "best_source_term_label": "atrial septum morphogenesis",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0003206" } }));
