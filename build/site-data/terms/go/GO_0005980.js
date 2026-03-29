window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0005980"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0005980",
  "term_label": "glycogen catabolic process",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.583333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cori Forbes Disease",
      "disease_term_id": "MONDO:0009291",
      "source_file": "Cori_Forbes_Disease.yaml",
      "term_id": "GO:0005980",
      "term_label": "glycogen catabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0005980"
      ],
      "supporting_source_term_labels": [
        "glycogen catabolic process"
      ],
      "supporting_source_node_names": [
        "Glycogen debranching enzyme deficiency",
        "Skeletal and cardiac myopathy"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pompe Disease",
      "disease_term_id": "MONDO:0009290",
      "source_file": "Pompe_Disease.yaml",
      "term_id": "GO:0005980",
      "term_label": "glycogen catabolic process",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0005980"
      ],
      "supporting_source_term_labels": [
        "glycogen catabolic process"
      ],
      "supporting_source_node_names": [
        "Lysosomal glycogen accumulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Glycogen Storage Disease Type I",
      "disease_term_id": "MONDO:0002413",
      "source_file": "Glycogen_Storage_Disease_Type_I.yaml",
      "term_id": "GO:0005980",
      "term_label": "glycogen catabolic process",
      "score": 0.25,
      "direct_score": 0.25,
      "propagated_score": 0.25,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0005980"
      ],
      "supporting_source_term_labels": [
        "glycogen catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired glucose-6-phosphate hydrolysis and fasting hypoglycemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0005980" } }));
