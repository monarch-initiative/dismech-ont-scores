window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0033555"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0033555",
  "term_label": "multicellular organismal response to stress",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.545394,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fibromyalgia",
      "disease_term_id": "MONDO:0005546",
      "source_file": "Fibromyalgia.yaml",
      "term_id": "GO:0033555",
      "term_label": "multicellular organismal response to stress",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0048265",
      "best_source_term_label": "response to pain",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048265"
      ],
      "supporting_source_term_labels": [
        "response to pain"
      ],
      "supporting_source_node_names": [
        "Central Sensitization"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Generalized Anxiety Disorder",
      "disease_term_id": "MONDO:0001942",
      "source_file": "Generalized_Anxiety_Disorder.yaml",
      "term_id": "GO:0033555",
      "term_label": "multicellular organismal response to stress",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042596",
      "best_source_term_label": "fear response",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042596"
      ],
      "supporting_source_term_labels": [
        "fear response"
      ],
      "supporting_source_node_names": [
        "Amygdala Hyperactivity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Irritable Bowel Syndrome",
      "disease_term_id": "MONDO:0005052",
      "source_file": "Irritable_Bowel_Syndrome.yaml",
      "term_id": "GO:0033555",
      "term_label": "multicellular organismal response to stress",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0048265",
      "best_source_term_label": "response to pain",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048265"
      ],
      "supporting_source_term_labels": [
        "response to pain"
      ],
      "supporting_source_node_names": [
        "Visceral Hypersensitivity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Migraine",
      "disease_term_id": "MONDO:0005277",
      "source_file": "Migraine.yaml",
      "term_id": "GO:0033555",
      "term_label": "multicellular organismal response to stress",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0048265",
      "best_source_term_label": "response to pain",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048265"
      ],
      "supporting_source_term_labels": [
        "response to pain"
      ],
      "supporting_source_node_names": [
        "Trigeminovascular Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0033555" } }));
