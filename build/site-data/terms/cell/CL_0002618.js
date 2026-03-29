window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002618"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002618",
  "term_label": "endothelial cell of umbilical vein",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.052083,
  "mean_score": 0.052083,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "CL:0002618",
      "term_label": "endothelial cell of umbilical vein",
      "score": 0.052083,
      "direct_score": 0.052083,
      "propagated_score": 0.052083,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002618",
      "best_source_term_label": "endothelial cell of umbilical vein",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002618" } }));
