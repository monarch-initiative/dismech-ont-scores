window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:5200283"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:5200283",
  "term_label": "Sleep-related breathing disorders",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.709012,
  "mean_score": 0.545394,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Obstructive Sleep Apnea",
      "disease_term_id": "MONDO:0007147",
      "source_file": "Obstructive_Sleep_Apnea.yaml",
      "term_id": "HP:5200283",
      "term_label": "Sleep-related breathing disorders",
      "score": 0.709012,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0025267",
      "best_source_term_label": "Snoring",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010535",
        "HP:0025267"
      ],
      "supporting_source_term_labels": [
        "Sleep apnea",
        "Snoring"
      ],
      "supporting_source_node_names": [
        "Snoring",
        "Witnessed Apneas"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Joubert syndrome",
      "disease_term_id": "MONDO:0018772",
      "source_file": "Joubert_syndrome.yaml",
      "term_id": "HP:5200283",
      "term_label": "Sleep-related breathing disorders",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010535",
      "best_source_term_label": "Sleep apnea",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010535"
      ],
      "supporting_source_term_labels": [
        "Sleep apnea"
      ],
      "supporting_source_node_names": [
        "Sleep apnea"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Obesity",
      "disease_term_id": "MONDO:0011122",
      "source_file": "Obesity.yaml",
      "term_id": "HP:5200283",
      "term_label": "Sleep-related breathing disorders",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010535",
      "best_source_term_label": "Sleep apnea",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010535"
      ],
      "supporting_source_term_labels": [
        "Sleep apnea"
      ],
      "supporting_source_node_names": [
        "Obstructive Sleep Apnea"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Down_syndrome",
      "disease_term_id": "MONDO:0008608",
      "source_file": "Down_syndrome.yaml",
      "term_id": "HP:5200283",
      "term_label": "Sleep-related breathing disorders",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002870",
      "best_source_term_label": "Obstructive sleep apnea",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002870"
      ],
      "supporting_source_term_labels": [
        "Obstructive sleep apnea"
      ],
      "supporting_source_node_names": [
        "Sleep Apnea"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:5200283" } }));
