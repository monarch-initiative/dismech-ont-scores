window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006644"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006644",
  "term_label": "phospholipid metabolic process",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.445369,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Sengers syndrome",
      "disease_term_id": "MONDO:0008922",
      "source_file": "Sengers_syndrome.yaml",
      "term_id": "GO:0006644",
      "term_label": "phospholipid metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0006644",
      "best_source_term_label": "phospholipid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006644",
        "GO:0032048"
      ],
      "supporting_source_term_labels": [
        "cardiolipin metabolic process",
        "phospholipid metabolic process"
      ],
      "supporting_source_node_names": [
        "Disrupted mitochondrial phospholipid metabolism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CHIME_syndrome",
      "disease_term_id": "MONDO:0010221",
      "source_file": "CHIME_syndrome.yaml",
      "term_id": "GO:0006644",
      "term_label": "phospholipid metabolic process",
      "score": 0.198075,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006506",
      "best_source_term_label": "GPI anchor biosynthetic process",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006506"
      ],
      "supporting_source_term_labels": [
        "GPI anchor biosynthetic process"
      ],
      "supporting_source_node_names": [
        "PIGL Gene Mutations"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Long-chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012173",
      "source_file": "Long-Chain_3-Hydroxyacyl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "GO:0006644",
      "term_label": "phospholipid metabolic process",
      "score": 0.138031,
      "direct_score": 0.0,
      "propagated_score": 0.167317,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0032048",
      "best_source_term_label": "cardiolipin metabolic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006644" } }));
