window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:4030006"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:4030006",
  "term_label": "fallopian tube secretory epithelial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Ovarian High-Grade Serous Carcinoma",
      "disease_term_id": "MONDO:0005211",
      "source_file": "Ovarian_High-Grade_Serous_Carcinoma.yaml",
      "term_id": "CL:4030006",
      "term_label": "fallopian tube secretory epithelial cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:4030006",
      "best_source_term_label": "fallopian tube secretory epithelial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:4030006"
      ],
      "supporting_source_term_labels": [
        "fallopian tube secretory epithelial cell"
      ],
      "supporting_source_node_names": [
        "Fallopian Tube Origin",
        "TP53 Mutation and Loss of Function"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:4030006" } }));
