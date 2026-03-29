window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0045045"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0045045",
  "term_label": "Elevated circulating acylcarnitine concentration",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "2-Methylbutyryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012392",
      "source_file": "2-Methylbutyryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "HP:0045045",
      "term_label": "Elevated circulating acylcarnitine concentration",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0045045",
      "best_source_term_label": "Elevated circulating acylcarnitine concentration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "HP:0045045",
      "term_label": "Elevated circulating acylcarnitine concentration",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0045045",
      "best_source_term_label": "Elevated circulating acylcarnitine concentration",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0045045" } }));
