window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0015697"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0015697",
  "term_label": "quaternary ammonium group transport",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.370505,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Carnitine-acylcarnitine Translocase Deficiency",
      "disease_term_id": "MONDO:0008918",
      "source_file": "Carnitine-Acylcarnitine_Translocase_Deficiency.yaml",
      "term_id": "GO:0015697",
      "term_label": "quaternary ammonium group transport",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0015879",
      "best_source_term_label": "carnitine transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0015879"
      ],
      "supporting_source_term_labels": [
        "carnitine transport"
      ],
      "supporting_source_node_names": [
        "SLC25A20 transporter molecular function deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Primary Carnitine Deficiency",
      "disease_term_id": "MONDO:0008919",
      "source_file": "Primary_Carnitine_Deficiency.yaml",
      "term_id": "GO:0015697",
      "term_label": "quaternary ammonium group transport",
      "score": 0.305122,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:1902603",
      "best_source_term_label": "carnitine transmembrane transport",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1902603"
      ],
      "supporting_source_term_labels": [
        "carnitine transmembrane transport"
      ],
      "supporting_source_node_names": [
        "SLC22A5/OCTN2 transporter dysfunction",
        "Systemic carnitine depletion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0015697" } }));
