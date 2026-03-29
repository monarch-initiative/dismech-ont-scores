window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032330"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032330",
  "term_label": "regulation of chondrocyte differentiation",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.207566,
  "mean_score": 0.207566,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Thanatophoric Dysplasia Type 1",
      "disease_term_id": "MONDO:0008546",
      "source_file": "Thanatophoric_Dysplasia_Type_1.yaml",
      "term_id": "GO:0032330",
      "term_label": "regulation of chondrocyte differentiation",
      "score": 0.207566,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0032331",
      "best_source_term_label": "negative regulation of chondrocyte differentiation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032331"
      ],
      "supporting_source_term_labels": [
        "negative regulation of chondrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Severe FGFR3 gain-of-function"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Thanatophoric Dysplasia Type 2",
      "disease_term_id": "MONDO:0008547",
      "source_file": "Thanatophoric_Dysplasia_Type_2.yaml",
      "term_id": "GO:0032330",
      "term_label": "regulation of chondrocyte differentiation",
      "score": 0.207566,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0032331",
      "best_source_term_label": "negative regulation of chondrocyte differentiation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032331"
      ],
      "supporting_source_term_labels": [
        "negative regulation of chondrocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Severe FGFR3 gain-of-function (K650E)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032330" } }));
