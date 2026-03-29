window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010895"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010895",
  "term_label": "Abnormal circulating glycine concentration",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.450433,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Lipoic Acid Synthetase Deficiency",
      "disease_term_id": "MONDO:0013762",
      "source_file": "Lipoic_Acid_Synthetase_Deficiency.yaml",
      "term_id": "HP:0010895",
      "term_label": "Abnormal circulating glycine concentration",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002154",
      "best_source_term_label": "Hyperglycinemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002154"
      ],
      "supporting_source_term_labels": [
        "Hyperglycinemia"
      ],
      "supporting_source_node_names": [
        "Hyperglycinemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Inherited Threoninemia",
      "disease_term_id": "MONDO:0010118",
      "source_file": "Inherited_Threoninemia.yaml",
      "term_id": "HP:0010895",
      "term_label": "Abnormal circulating glycine concentration",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0008288",
      "best_source_term_label": "Nonketotic hyperglycinemia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008288"
      ],
      "supporting_source_term_labels": [
        "Nonketotic hyperglycinemia"
      ],
      "supporting_source_node_names": [
        "Nonketotic hyperglycinemia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Neonatal Severe Encephalopathy with Lactic Acidosis and Brain Abnormalities",
      "disease_term_id": "MONDO:0060562",
      "source_file": "NELABA.yaml",
      "term_id": "HP:0010895",
      "term_label": "Abnormal circulating glycine concentration",
      "score": 0.369586,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002154",
      "best_source_term_label": "Hyperglycinemia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002154"
      ],
      "supporting_source_term_labels": [
        "Hyperglycinemia"
      ],
      "supporting_source_node_names": [
        "Hyperglycinemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010895" } }));
