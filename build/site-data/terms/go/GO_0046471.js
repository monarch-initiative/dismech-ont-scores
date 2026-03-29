window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0046471"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0046471",
  "term_label": "phosphatidylglycerol metabolic process",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.463226,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Sengers syndrome",
      "disease_term_id": "MONDO:0008922",
      "source_file": "Sengers_syndrome.yaml",
      "term_id": "GO:0046471",
      "term_label": "phosphatidylglycerol metabolic process",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0032048",
      "best_source_term_label": "cardiolipin metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032048"
      ],
      "supporting_source_term_labels": [
        "cardiolipin metabolic process"
      ],
      "supporting_source_node_names": [
        "AGK loss of function disrupts lipid signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Long-chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012173",
      "source_file": "Long-Chain_3-Hydroxyacyl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "GO:0046471",
      "term_label": "phosphatidylglycerol metabolic process",
      "score": 0.303755,
      "direct_score": 0.0,
      "propagated_score": 0.341463,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0032048",
      "best_source_term_label": "cardiolipin metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032048"
      ],
      "supporting_source_term_labels": [
        "cardiolipin metabolic process"
      ],
      "supporting_source_node_names": [
        "Cardiolipin remodeling defect and mitochondrial bioenergetic impairment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0046471" } }));
