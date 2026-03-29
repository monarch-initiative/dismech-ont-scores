window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010966"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010966",
  "term_label": "Abnormal circulating fatty-acid anion concentration",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.404234,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "2-Methylbutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012392",
      "source_file": "2-Methylbutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0010966",
      "term_label": "Abnormal circulating fatty-acid anion concentration",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0045045",
      "best_source_term_label": "Elevated circulating acylcarnitine concentration",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0045045"
      ],
      "supporting_source_term_labels": [
        "Elevated circulating acylcarnitine concentration"
      ],
      "supporting_source_node_names": [
        "Elevated C5-acylcarnitine on newborn screening"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Isobutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012648",
      "source_file": "Isobutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0010966",
      "term_label": "Abnormal circulating fatty-acid anion concentration",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0045045",
      "best_source_term_label": "Elevated circulating acylcarnitine concentration",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0045045"
      ],
      "supporting_source_term_labels": [
        "Elevated circulating acylcarnitine concentration"
      ],
      "supporting_source_node_names": [
        "Elevated C4-acylcarnitine"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Long-chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012173",
      "source_file": "Long-Chain_3-Hydroxyacyl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0010966",
      "term_label": "Abnormal circulating fatty-acid anion concentration",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0003234",
      "best_source_term_label": "Decreased circulating carnitine concentration",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003234"
      ],
      "supporting_source_term_labels": [
        "Decreased circulating carnitine concentration"
      ],
      "supporting_source_node_names": [
        "Hypocarnitinemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010966" } }));
