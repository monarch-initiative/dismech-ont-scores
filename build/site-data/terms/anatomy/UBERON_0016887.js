window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0016887"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0016887",
  "term_label": "entire extraembryonic component",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.412484,
  "mean_score": 0.343737,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Antiphospholipid Syndrome",
      "disease_term_id": "MONDO:8000010",
      "source_file": "Antiphospholipid_Syndrome.yaml",
      "term_id": "UBERON:0016887",
      "term_label": "entire extraembryonic component",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001987",
      "best_source_term_label": "placenta",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001987"
      ],
      "supporting_source_term_labels": [
        "placenta"
      ],
      "supporting_source_node_names": [
        "Placental immune injury"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Twin to Twin Transfusion Syndrome",
      "disease_term_id": "MONDO:0019805",
      "source_file": "Twin_to_Twin_Transfusion_Syndrome.yaml",
      "term_id": "UBERON:0016887",
      "term_label": "entire extraembryonic component",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001987",
      "best_source_term_label": "placenta",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001987"
      ],
      "supporting_source_term_labels": [
        "placenta"
      ],
      "supporting_source_node_names": [
        "Unbalanced placental vascular anastomoses"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "UBERON:0016887",
      "term_label": "entire extraembryonic component",
      "score": 0.206242,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001987",
      "best_source_term_label": "placenta",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001987"
      ],
      "supporting_source_term_labels": [
        "placenta"
      ],
      "supporting_source_node_names": [
        "CYP19A1 Gene Mutation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0016887" } }));
