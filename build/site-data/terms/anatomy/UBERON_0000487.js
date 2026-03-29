window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000487"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000487",
  "term_label": "simple squamous epithelium",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.226665,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "UBERON:0000487",
      "term_label": "simple squamous epithelium",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001985",
      "best_source_term_label": "corneal endothelium",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001985"
      ],
      "supporting_source_term_labels": [
        "corneal endothelium"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "UBERON:0000487",
      "term_label": "simple squamous epithelium",
      "score": 0.017443,
      "direct_score": 0.0,
      "propagated_score": 0.019608,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001281",
      "best_source_term_label": "hepatic sinusoid",
      "best_source_path_score": 0.117649,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 6,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001281"
      ],
      "supporting_source_term_labels": [
        "hepatic sinusoid"
      ],
      "supporting_source_node_names": [
        "Portal Hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000487" } }));
