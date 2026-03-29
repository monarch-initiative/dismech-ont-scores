window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030603"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030603",
  "term_label": "Abnormal optical coherence tomography",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7399,
  "mean_score": 0.7399,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "HP:0030603",
      "term_label": "Abnormal optical coherence tomography",
      "score": 0.7399,
      "direct_score": 0.0,
      "propagated_score": 0.7399,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0030610",
      "best_source_term_label": "Photoreceptor outer segment loss on macular OCT",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030329",
        "HP:0030610"
      ],
      "supporting_source_term_labels": [
        "Photoreceptor outer segment loss on macular OCT",
        "Retinal thinning on OCT"
      ],
      "supporting_source_node_names": [
        "Photoreceptor outer segment loss on macular OCT",
        "Retinal thinning on OCT"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030603" } }));
