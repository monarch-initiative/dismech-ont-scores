window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032048"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032048",
  "term_label": "cardiolipin metabolic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.743903,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Sengers syndrome",
      "disease_term_id": "MONDO:0008922",
      "source_file": "Sengers_syndrome.yaml",
      "term_id": "GO:0032048",
      "term_label": "cardiolipin metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0032048",
      "best_source_term_label": "cardiolipin metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "GO:0032048",
      "term_label": "cardiolipin metabolic process",
      "score": 0.487805,
      "direct_score": 0.487805,
      "propagated_score": 0.487805,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0032048",
      "best_source_term_label": "cardiolipin metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032048" } }));
