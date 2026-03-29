window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006493"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006493",
  "term_label": "Aplasia/hypoplasia involving bones of the lower limbs",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.284423,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Atelosteogenesis Type I",
      "disease_term_id": "MONDO:0007167",
      "source_file": "Atelosteogenesis_Type_I.yaml",
      "term_id": "HP:0006493",
      "term_label": "Aplasia/hypoplasia involving bones of the lower limbs",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002990",
      "best_source_term_label": "Fibular aplasia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002990"
      ],
      "supporting_source_term_labels": [
        "Fibular aplasia"
      ],
      "supporting_source_node_names": [
        "Fibular Aplasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Thanatophoric Dysplasia Type 2",
      "disease_term_id": "MONDO:0008547",
      "source_file": "Thanatophoric_Dysplasia_Type_2.yaml",
      "term_id": "HP:0006493",
      "term_label": "Aplasia/hypoplasia involving bones of the lower limbs",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003097",
      "best_source_term_label": "Short femur",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003097"
      ],
      "supporting_source_term_labels": [
        "Short femur"
      ],
      "supporting_source_node_names": [
        "Straight femurs"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hand-Foot-Genital Syndrome",
      "disease_term_id": "MONDO:0007698",
      "source_file": "Hand-Foot-Genital_Syndrome.yaml",
      "term_id": "HP:0006493",
      "term_label": "Aplasia/hypoplasia involving bones of the lower limbs",
      "score": 0.18707,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010109",
      "best_source_term_label": "Short hallux",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010109"
      ],
      "supporting_source_term_labels": [
        "Short hallux"
      ],
      "supporting_source_node_names": [
        "Short Hallux"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Jackson-Weiss Syndrome",
      "disease_term_id": "MONDO:0007400",
      "source_file": "Jackson-Weiss_Syndrome.yaml",
      "term_id": "HP:0006493",
      "term_label": "Aplasia/hypoplasia involving bones of the lower limbs",
      "score": 0.18707,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010105",
      "best_source_term_label": "Short first metatarsal",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010105"
      ],
      "supporting_source_term_labels": [
        "Short first metatarsal"
      ],
      "supporting_source_node_names": [
        "Short First Metatarsal"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006493" } }));
