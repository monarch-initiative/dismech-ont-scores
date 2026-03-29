window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1001591"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1001591",
  "term_label": "oviduct secretory cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "CL:1001591",
      "term_label": "oviduct secretory cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002656",
      "best_source_term_label": "glandular endometrial unciliated epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002656"
      ],
      "supporting_source_term_labels": [
        "glandular endometrial unciliated epithelial cell"
      ],
      "supporting_source_node_names": [
        "Accelerated Tumor Development",
        "DNA Mismatch Repair Deficiency",
        "Microsatellite Instability"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Ovarian High-Grade Serous Carcinoma",
      "disease_term_id": "MONDO:0005211",
      "source_file": "Ovarian_High-Grade_Serous_Carcinoma.yaml",
      "term_id": "CL:1001591",
      "term_label": "oviduct secretory cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:4030006",
      "best_source_term_label": "fallopian tube secretory epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1001591" } }));
