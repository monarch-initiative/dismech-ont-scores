window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0000272"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0000272",
  "term_label": "polysaccharide catabolic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.235803,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cori Forbes Disease",
      "disease_term_id": "MONDO:0009291",
      "source_file": "Cori_Forbes_Disease.yaml",
      "term_id": "GO:0000272",
      "term_label": "polysaccharide catabolic process",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "GO:0000272",
      "term_label": "polysaccharide catabolic process",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "GO:0000272",
      "term_label": "polysaccharide catabolic process",
      "score": 0.101059,
      "direct_score": 0.0,
      "propagated_score": 0.1225,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0005980",
      "best_source_term_label": "glycogen catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0000272" } }));
