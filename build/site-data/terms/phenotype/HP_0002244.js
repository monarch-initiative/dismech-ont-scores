window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002244"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002244",
  "term_label": "Abnormal small intestine morphology",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.576482,
  "mean_score": 0.486628,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0002244",
      "term_label": "Abnormal small intestine morphology",
      "score": 0.576482,
      "direct_score": 0.0,
      "propagated_score": 0.7399,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0005235",
      "best_source_term_label": "Jejunal atresia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002247",
        "HP:0005235"
      ],
      "supporting_source_term_labels": [
        "Duodenal atresia",
        "Jejunal atresia"
      ],
      "supporting_source_node_names": [
        "Duodenal Atresia",
        "Jejunal Atresia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Collagenous Sprue",
      "disease_term_id": "MONDO:0044092",
      "source_file": "Collagenous_Sprue.yaml",
      "term_id": "HP:0002244",
      "term_label": "Abnormal small intestine morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002243",
      "best_source_term_label": "Protein-losing enteropathy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002243"
      ],
      "supporting_source_term_labels": [
        "Protein-losing enteropathy"
      ],
      "supporting_source_node_names": [
        "Protein-losing enteropathy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cronkhite-Canada syndrome",
      "disease_term_id": "MONDO:0008283",
      "source_file": "Cronkhite-Canada_syndrome.yaml",
      "term_id": "HP:0002244",
      "term_label": "Abnormal small intestine morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002243",
      "best_source_term_label": "Protein-losing enteropathy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002243"
      ],
      "supporting_source_term_labels": [
        "Protein-losing enteropathy"
      ],
      "supporting_source_node_names": [
        "Protein-losing enteropathy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Juvenile Polyposis Syndrome",
      "disease_term_id": "MONDO:0017380",
      "source_file": "Juvenile_Polyposis_Syndrome.yaml",
      "term_id": "HP:0002244",
      "term_label": "Abnormal small intestine morphology",
      "score": 0.279242,
      "direct_score": 0.0,
      "propagated_score": 0.3584,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002243",
      "best_source_term_label": "Protein-losing enteropathy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002243"
      ],
      "supporting_source_term_labels": [
        "Protein-losing enteropathy"
      ],
      "supporting_source_node_names": [
        "Protein-losing enteropathy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002244" } }));
