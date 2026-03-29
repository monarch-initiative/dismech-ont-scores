window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002818"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002818",
  "term_label": "Abnormal morphology of the radius",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.659927,
  "mean_score": 0.347241,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Osteogenesis Imperfecta Type V",
      "disease_term_id": "MONDO:0012591",
      "source_file": "Osteogenesis_Imperfecta_Type_V.yaml",
      "term_id": "HP:0002818",
      "term_label": "Abnormal morphology of the radius",
      "score": 0.659927,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002974",
      "best_source_term_label": "Radioulnar synostosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002974",
        "HP:0003083"
      ],
      "supporting_source_term_labels": [
        "Dislocated radial head",
        "Radioulnar synostosis"
      ],
      "supporting_source_node_names": [
        "Radial Head Dislocation",
        "Radioulnar Synostosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Holt-Oram syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt_Oram.yaml",
      "term_id": "HP:0002818",
      "term_label": "Abnormal morphology of the radius",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002986",
      "best_source_term_label": "Radial bowing",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002986"
      ],
      "supporting_source_term_labels": [
        "Radial bowing"
      ],
      "supporting_source_node_names": [
        "Radial ray defect"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Holt-Oram Syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt-Oram_Syndrome.yaml",
      "term_id": "HP:0002818",
      "term_label": "Abnormal morphology of the radius",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002984",
      "best_source_term_label": "Hypoplasia of the radius",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002984"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the radius"
      ],
      "supporting_source_node_names": [
        "Radial Hypoplasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0002818",
      "term_label": "Abnormal morphology of the radius",
      "score": 0.156375,
      "direct_score": 0.0,
      "propagated_score": 0.200704,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002984",
      "best_source_term_label": "Hypoplasia of the radius",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002984"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the radius"
      ],
      "supporting_source_node_names": [
        "Radial Ray Defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002818" } }));
