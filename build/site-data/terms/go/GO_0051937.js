window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051937"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051937",
  "term_label": "catecholamine transport",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.264784,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "GO:0051937",
      "term_label": "catecholamine transport",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0014046",
      "best_source_term_label": "dopamine secretion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0014046"
      ],
      "supporting_source_term_labels": [
        "dopamine secretion"
      ],
      "supporting_source_node_names": [
        "Dysregulation of Dopamine Neurotransmission"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0051937",
      "term_label": "catecholamine transport",
      "score": 0.25871,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.824968,
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
      "disorder_name": "Hand Foot and Mouth Disease",
      "disease_term_id": "MONDO:0005779",
      "source_file": "Hand_Foot_and_Mouth_Disease.yaml",
      "term_id": "GO:0051937",
      "term_label": "catecholamine transport",
      "score": 0.131408,
      "direct_score": 0.0,
      "propagated_score": 0.159289,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050432",
      "best_source_term_label": "catecholamine secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050432"
      ],
      "supporting_source_term_labels": [
        "catecholamine secretion"
      ],
      "supporting_source_node_names": [
        "Catecholamine excess"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051937" } }));
