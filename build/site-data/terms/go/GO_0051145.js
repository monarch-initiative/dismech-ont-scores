window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051145"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051145",
  "term_label": "smooth muscle cell differentiation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Grange syndrome",
      "disease_term_id": "MONDO:0011243",
      "source_file": "Grange_syndrome.yaml",
      "term_id": "GO:0051145",
      "term_label": "smooth muscle cell differentiation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0051145",
      "best_source_term_label": "smooth muscle cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051145"
      ],
      "supporting_source_term_labels": [
        "smooth muscle cell differentiation"
      ],
      "supporting_source_node_names": [
        "Vascular Smooth Muscle Cell Dysfunction and Arterial Stenosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Peutz-Jeghers polyp",
      "disease_term_id": "MONDO:0006365",
      "source_file": "Peutz_Jeghers_polyp.yaml",
      "term_id": "GO:0051145",
      "term_label": "smooth muscle cell differentiation",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0051145",
      "best_source_term_label": "smooth muscle cell differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0051145"
      ],
      "supporting_source_term_labels": [
        "smooth muscle cell differentiation"
      ],
      "supporting_source_node_names": [
        "Arborizing smooth muscle core formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051145" } }));
