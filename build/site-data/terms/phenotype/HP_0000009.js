window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000009"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000009",
  "term_label": "Functional abnormality of the bladder",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.620045,
  "mean_score": 0.564057,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Benign Prostatic Hyperplasia",
      "disease_term_id": "MONDO:0010811",
      "source_file": "Benign_Prostatic_Hyperplasia.yaml",
      "term_id": "HP:0000009",
      "term_label": "Functional abnormality of the bladder",
      "score": 0.620045,
      "direct_score": 0.0,
      "propagated_score": 0.795813,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000016",
      "best_source_term_label": "Urinary retention",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000012",
        "HP:0000016",
        "HP:0000017"
      ],
      "supporting_source_term_labels": [
        "Nocturia",
        "Urinary retention",
        "Urinary urgency"
      ],
      "supporting_source_node_names": [
        "Hesitancy",
        "Incomplete Emptying",
        "Nocturia",
        "Urinary Frequency",
        "Urinary Retention",
        "Weak Urinary Stream"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "FGFR-Altered Urothelial Carcinoma",
      "disease_term_id": "MONDO:0040679",
      "source_file": "FGFR_Altered_Urothelial_Carcinoma.yaml",
      "term_id": "HP:0000009",
      "term_label": "Functional abnormality of the bladder",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0100518",
      "best_source_term_label": "Dysuria",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100518"
      ],
      "supporting_source_term_labels": [
        "Dysuria"
      ],
      "supporting_source_node_names": [
        "Dysuria"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Obstructive Sleep Apnea",
      "disease_term_id": "MONDO:0007147",
      "source_file": "Obstructive_Sleep_Apnea.yaml",
      "term_id": "HP:0000009",
      "term_label": "Functional abnormality of the bladder",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000017",
      "best_source_term_label": "Nocturia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000017"
      ],
      "supporting_source_term_labels": [
        "Nocturia"
      ],
      "supporting_source_node_names": [
        "Nocturia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Transverse Myelitis",
      "disease_term_id": "MONDO:0021553",
      "source_file": "Transverse_Myelitis.yaml",
      "term_id": "HP:0000009",
      "term_label": "Functional abnormality of the bladder",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0000011",
      "best_source_term_label": "Neurogenic bladder",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000011"
      ],
      "supporting_source_term_labels": [
        "Neurogenic bladder"
      ],
      "supporting_source_node_names": [
        "Neurogenic Bladder"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000009" } }));
