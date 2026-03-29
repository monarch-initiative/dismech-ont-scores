window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002186"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002186",
  "term_label": "Apraxia",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.69995,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Alzheimer Disease",
      "disease_term_id": "MONDO:0004975",
      "source_file": "Alzheimer_Disease.yaml",
      "term_id": "HP:0002186",
      "term_label": "Apraxia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0002186",
      "best_source_term_label": "Apraxia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002186"
      ],
      "supporting_source_term_labels": [
        "Apraxia"
      ],
      "supporting_source_node_names": [
        "Apraxia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Joubert syndrome",
      "disease_term_id": "MONDO:0018772",
      "source_file": "Joubert_syndrome.yaml",
      "term_id": "HP:0002186",
      "term_label": "Apraxia",
      "score": 0.709012,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0011098",
      "best_source_term_label": "Speech apraxia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000657",
        "HP:0011098"
      ],
      "supporting_source_term_labels": [
        "Oculomotor apraxia",
        "Speech apraxia"
      ],
      "supporting_source_node_names": [
        "Oculomotor apraxia",
        "Speech apraxia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ataxia-telangiectasia",
      "disease_term_id": "MONDO:0008840",
      "source_file": "Ataxia_Telangiectasia.yaml",
      "term_id": "HP:0002186",
      "term_label": "Apraxia",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000657",
      "best_source_term_label": "Oculomotor apraxia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000657"
      ],
      "supporting_source_term_labels": [
        "Oculomotor apraxia"
      ],
      "supporting_source_node_names": [
        "Oculomotor apraxia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Gaucher Disease",
      "disease_term_id": "MONDO:0018150",
      "source_file": "Gaucher_Disease.yaml",
      "term_id": "HP:0002186",
      "term_label": "Apraxia",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000657",
      "best_source_term_label": "Oculomotor apraxia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000657"
      ],
      "supporting_source_term_labels": [
        "Oculomotor apraxia"
      ],
      "supporting_source_node_names": [
        "Oculomotor Apraxia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002186" } }));
