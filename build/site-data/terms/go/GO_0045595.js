window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0045595"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0045595",
  "term_label": "regulation of cell differentiation",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.134745,
  "mean_score": 0.097111,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Thanatophoric Dysplasia Type 1",
      "disease_term_id": "MONDO:0008546",
      "source_file": "Thanatophoric_Dysplasia_Type_1.yaml",
      "term_id": "GO:0045595",
      "term_label": "regulation of cell differentiation",
      "score": 0.134745,
      "direct_score": 0.0,
      "propagated_score": 0.163333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0032331",
      "best_source_term_label": "negative regulation of chondrocyte differentiation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
      "term_id": "GO:0045595",
      "term_label": "regulation of cell differentiation",
      "score": 0.134745,
      "direct_score": 0.0,
      "propagated_score": 0.163333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0032331",
      "best_source_term_label": "negative regulation of chondrocyte differentiation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "GO:0045595",
      "term_label": "regulation of cell differentiation",
      "score": 0.021843,
      "direct_score": 0.0,
      "propagated_score": 0.026477,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045580",
      "best_source_term_label": "regulation of T cell differentiation",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045580"
      ],
      "supporting_source_term_labels": [
        "regulation of T cell differentiation"
      ],
      "supporting_source_node_names": [
        "Dendritic-cell and T-cell adaptive immune phase"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0045595" } }));
