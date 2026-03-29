window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002543"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002543",
  "term_label": "vein endothelial cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.036458,
  "mean_score": 0.036458,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "CL:0002543",
      "term_label": "vein endothelial cell",
      "score": 0.036458,
      "direct_score": 0.0,
      "propagated_score": 0.036458,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0002618",
      "best_source_term_label": "endothelial cell of umbilical vein",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002618"
      ],
      "supporting_source_term_labels": [
        "endothelial cell of umbilical vein"
      ],
      "supporting_source_node_names": [
        "Blood-Brain Barrier Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002543" } }));
