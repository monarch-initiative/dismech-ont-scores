window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007389"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007389",
  "term_label": "pattern specification process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.288739,
  "mean_score": 0.251444,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hand-Foot-Genital Syndrome",
      "disease_term_id": "MONDO:0007698",
      "source_file": "Hand-Foot-Genital_Syndrome.yaml",
      "term_id": "GO:0007389",
      "term_label": "pattern specification process",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0003002",
      "best_source_term_label": "regionalization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003002"
      ],
      "supporting_source_term_labels": [
        "regionalization"
      ],
      "supporting_source_node_names": [
        "Distal Limb Morphogenesis Disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Ulnar-Mammary Syndrome",
      "disease_term_id": "MONDO:0008411",
      "source_file": "Ulnar-Mammary_Syndrome.yaml",
      "term_id": "GO:0007389",
      "term_label": "pattern specification process",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0003002",
      "best_source_term_label": "regionalization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0003002"
      ],
      "supporting_source_term_labels": [
        "regionalization"
      ],
      "supporting_source_node_names": [
        "Posterior Limb Patterning Disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "GO:0007389",
      "term_label": "pattern specification process",
      "score": 0.176853,
      "direct_score": 0.0,
      "propagated_score": 0.214375,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0007368",
      "best_source_term_label": "determination of left/right symmetry",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007368"
      ],
      "supporting_source_term_labels": [
        "determination of left/right symmetry"
      ],
      "supporting_source_node_names": [
        "Situs Inversus"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007389" } }));
