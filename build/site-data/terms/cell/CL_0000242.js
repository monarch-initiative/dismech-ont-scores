window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000242"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000242",
  "term_label": "Merkel cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Merkel Cell Carcinoma",
      "disease_term_id": "MONDO:0019210",
      "source_file": "Merkel_Cell_Carcinoma.yaml",
      "term_id": "CL:0000242",
      "term_label": "Merkel cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000242",
      "best_source_term_label": "Merkel cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000242"
      ],
      "supporting_source_term_labels": [
        "Merkel cell"
      ],
      "supporting_source_node_names": [
        "UV-Induced Mutagenesis",
        "Uncontrolled Merkel Cell Proliferation",
        "Viral T Antigen Oncogenesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000242" } }));
