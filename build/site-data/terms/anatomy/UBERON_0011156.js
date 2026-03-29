window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0011156"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0011156",
  "term_label": "facial skeleton",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.077913,
  "mean_score": 0.056674,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0011156",
      "term_label": "facial skeleton",
      "score": 0.077913,
      "direct_score": 0.0,
      "propagated_score": 0.1,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005922",
      "best_source_term_label": "inferior nasal concha",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0005922"
      ],
      "supporting_source_term_labels": [
        "inferior nasal concha"
      ],
      "supporting_source_node_names": [
        "Turbinate tissue loss from surgical resection"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Silent Sinus Syndrome",
      "disease_term_id": "MONDO:0019108",
      "source_file": "Silent_Sinus_Syndrome.yaml",
      "term_id": "UBERON:0011156",
      "term_label": "facial skeleton",
      "score": 0.066811,
      "direct_score": 0.0,
      "propagated_score": 0.08575,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001764",
      "best_source_term_label": "maxillary sinus",
      "best_source_path_score": 0.08575,
      "best_source_path": "part_of > is_a > is_a > is_a > part_of",
      "best_path_hops": 5,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001764"
      ],
      "supporting_source_term_labels": [
        "maxillary sinus"
      ],
      "supporting_source_node_names": [
        "Maxillary Sinus Atelectasis"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "UBERON:0011156",
      "term_label": "facial skeleton",
      "score": 0.064928,
      "direct_score": 0.0,
      "propagated_score": 0.083333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001697",
      "best_source_term_label": "orbit of skull",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001697"
      ],
      "supporting_source_term_labels": [
        "orbit of skull"
      ],
      "supporting_source_node_names": [
        "TSHR-IGF1R Receptor Crosstalk in Orbital Fibroblasts"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Ludwig's Angina",
      "disease_term_id": "MONDO:0006576",
      "source_file": "Ludwigs_Angina.yaml",
      "term_id": "UBERON:0011156",
      "term_label": "facial skeleton",
      "score": 0.017044,
      "direct_score": 0.0,
      "propagated_score": 0.021875,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003667",
      "best_source_term_label": "lower jaw molar",
      "best_source_path_score": 0.04375,
      "best_source_path": "is_a > part_of > part_of > part_of > part_of",
      "best_path_hops": 5,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 4,
      "supporting_source_term_ids": [
        "UBERON:0003667"
      ],
      "supporting_source_term_labels": [
        "lower jaw molar"
      ],
      "supporting_source_node_names": [
        "Odontogenic Source Infection (Mandibular Molar)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0011156" } }));
