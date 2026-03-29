window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042742"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042742",
  "term_label": "defense response to bacterium",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.656098,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cronkhite-Canada syndrome",
      "disease_term_id": "MONDO:0008283",
      "source_file": "Cronkhite-Canada_syndrome.yaml",
      "term_id": "GO:0042742",
      "term_label": "defense response to bacterium",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042742",
      "best_source_term_label": "defense response to bacterium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042742"
      ],
      "supporting_source_term_labels": [
        "defense response to bacterium"
      ],
      "supporting_source_node_names": [
        "Helicobacter pylori infection and dysbiosis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "GO:0042742",
      "term_label": "defense response to bacterium",
      "score": 0.312195,
      "direct_score": 0.312195,
      "propagated_score": 0.312195,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042742",
      "best_source_term_label": "defense response to bacterium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042742"
      ],
      "supporting_source_term_labels": [
        "defense response to bacterium"
      ],
      "supporting_source_node_names": [
        "Chronic Bacterial Infection"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042742" } }));
