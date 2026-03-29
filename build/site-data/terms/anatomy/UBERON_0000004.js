window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000004"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000004",
  "term_label": "nose",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.295339,
  "mean_score": 0.177506,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0000004",
      "term_label": "nose",
      "score": 0.295339,
      "direct_score": 0.0,
      "propagated_score": 0.358,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001826",
      "best_source_term_label": "nasal cavity mucosa",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001707",
        "UBERON:0001826"
      ],
      "supporting_source_term_labels": [
        "nasal cavity",
        "nasal cavity mucosa"
      ],
      "supporting_source_node_names": [
        "Disrupted nasal airflow dynamics",
        "Impaired mucociliary clearance",
        "Impaired nasal air conditioning",
        "Paradoxical nasal obstruction and dyspnea",
        "Trigeminal neurosensory dysfunction",
        "Turbinate tissue loss from surgical resection"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "UBERON:0000004",
      "term_label": "nose",
      "score": 0.164994,
      "direct_score": 0.0,
      "propagated_score": 0.2,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001707",
      "best_source_term_label": "nasal cavity",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "UBERON:0001707"
      ],
      "supporting_source_term_labels": [
        "nasal cavity"
      ],
      "supporting_source_node_names": [
        "Parasympathetic Generalization"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "UBERON:0000004",
      "term_label": "nose",
      "score": 0.072185,
      "direct_score": 0.0,
      "propagated_score": 0.0875,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005384",
      "best_source_term_label": "nasal cavity epithelium",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0005384"
      ],
      "supporting_source_term_labels": [
        "nasal cavity epithelium"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000004" } }));
