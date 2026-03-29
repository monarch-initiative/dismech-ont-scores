window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0015695"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0015695",
  "term_label": "organic cation transport",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.327838,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Carnitine-acylcarnitine Translocase Deficiency",
      "disease_term_id": "MONDO:0008918",
      "source_file": "Carnitine-Acylcarnitine_Translocase_Deficiency.yaml",
      "term_id": "GO:0015695",
      "term_label": "organic cation transport",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0015879",
      "best_source_term_label": "carnitine transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015879"
      ],
      "supporting_source_term_labels": [
        "carnitine transport"
      ],
      "supporting_source_node_names": [
        "SLC25A20 transporter molecular function deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Primary Carnitine Deficiency",
      "disease_term_id": "MONDO:0008919",
      "source_file": "Primary_Carnitine_Deficiency.yaml",
      "term_id": "GO:0015695",
      "term_label": "organic cation transport",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:1902603",
      "best_source_term_label": "carnitine transmembrane transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1902603"
      ],
      "supporting_source_term_labels": [
        "carnitine transmembrane transport"
      ],
      "supporting_source_node_names": [
        "SLC22A5/OCTN2 transporter dysfunction",
        "Systemic carnitine depletion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0015695",
      "term_label": "organic cation transport",
      "score": 0.244337,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0048243",
      "best_source_term_label": "norepinephrine secretion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048243"
      ],
      "supporting_source_term_labels": [
        "norepinephrine secretion"
      ],
      "supporting_source_node_names": [
        "Sympathetic Denervation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0015695",
      "term_label": "organic cation transport",
      "score": 0.139845,
      "direct_score": 0.0,
      "propagated_score": 0.179487,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0015827",
      "best_source_term_label": "tryptophan transport",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015827"
      ],
      "supporting_source_term_labels": [
        "tryptophan transport"
      ],
      "supporting_source_node_names": [
        "Serotonin Depletion Mechanisms"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0015695" } }));
