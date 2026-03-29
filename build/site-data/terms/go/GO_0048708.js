window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048708"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048708",
  "term_label": "astrocyte differentiation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.196923,
  "mean_score": 0.196923,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "GO:0048708",
      "term_label": "astrocyte differentiation",
      "score": 0.196923,
      "direct_score": 0.196923,
      "propagated_score": 0.196923,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0048708",
      "best_source_term_label": "astrocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048708"
      ],
      "supporting_source_term_labels": [
        "astrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Altered glial differentiation and variant NKH via lipoylation defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048708" } }));
