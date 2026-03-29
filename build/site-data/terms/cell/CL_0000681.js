window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000681"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000681",
  "term_label": "radial glial cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.64,
  "mean_score": 0.57,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "CL:0000681",
      "term_label": "radial glial cell",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000681",
      "best_source_term_label": "radial glial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000681"
      ],
      "supporting_source_term_labels": [
        "radial glial cell"
      ],
      "supporting_source_node_names": [
        "Altered glial differentiation and variant NKH via lipoylation defects"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Dystroglycanopathy",
      "disease_term_id": "MONDO:0018276",
      "source_file": "Dystroglycanopathy.yaml",
      "term_id": "CL:0000681",
      "term_label": "radial glial cell",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000681",
      "best_source_term_label": "radial glial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000681"
      ],
      "supporting_source_term_labels": [
        "radial glial cell"
      ],
      "supporting_source_node_names": [
        "Glial limitans disruption and neuronal overmigration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000681" } }));
