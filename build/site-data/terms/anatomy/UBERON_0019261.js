window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0019261"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0019261",
  "term_label": "white matter of forebrain",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.179418,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "CADASIL Type 1",
      "disease_term_id": "MONDO:0007432",
      "source_file": "CADASIL_Type_1.yaml",
      "term_id": "UBERON:0019261",
      "term_label": "white matter of forebrain",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002437",
      "best_source_term_label": "cerebral hemisphere white matter",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002437"
      ],
      "supporting_source_term_labels": [
        "cerebral hemisphere white matter"
      ],
      "supporting_source_node_names": [
        "Small Vessel Arteriopathy and Hypoperfusion"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Pelizaeus-Merzbacher Disease",
      "disease_term_id": "MONDO:0010714",
      "source_file": "Pelizaeus_Merzbacher_Disease.yaml",
      "term_id": "UBERON:0019261",
      "term_label": "white matter of forebrain",
      "score": 0.076271,
      "direct_score": 0.0,
      "propagated_score": 0.092453,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002437",
      "best_source_term_label": "cerebral hemisphere white matter",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002437"
      ],
      "supporting_source_term_labels": [
        "cerebral hemisphere white matter"
      ],
      "supporting_source_node_names": [
        "Defective CNS Myelination"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "UBERON:0019261",
      "term_label": "white matter of forebrain",
      "score": 0.057748,
      "direct_score": 0.0,
      "propagated_score": 0.07,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002437",
      "best_source_term_label": "cerebral hemisphere white matter",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002437"
      ],
      "supporting_source_term_labels": [
        "cerebral hemisphere white matter"
      ],
      "supporting_source_node_names": [
        "GALC Deficiency and Psychosine Accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0019261" } }));
