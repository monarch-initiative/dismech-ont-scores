window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1901570"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1901570",
  "term_label": "fatty acid derivative biosynthetic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.352121,
  "mean_score": 0.1979,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Long-chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0012173",
      "source_file": "Long-Chain_3-Hydroxyacyl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "GO:1901570",
      "term_label": "fatty acid derivative biosynthetic process",
      "score": 0.352121,
      "direct_score": 0.0,
      "propagated_score": 0.426829,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0046951",
      "best_source_term_label": "ketone body biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046951"
      ],
      "supporting_source_term_labels": [
        "ketone body biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Impaired mitochondrial long-chain fatty acid beta-oxidation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Primary Carnitine Deficiency",
      "disease_term_id": "MONDO:0008919",
      "source_file": "Primary_Carnitine_Deficiency.yaml",
      "term_id": "GO:1901570",
      "term_label": "fatty acid derivative biosynthetic process",
      "score": 0.16426,
      "direct_score": 0.0,
      "propagated_score": 0.199111,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0046951",
      "best_source_term_label": "ketone body biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046951"
      ],
      "supporting_source_term_labels": [
        "ketone body biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Hepatic metabolic decompensation and encephalopathy"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Mitochondrial Trifunctional Protein Deficiency",
      "disease_term_id": "MONDO:0012172",
      "source_file": "Mitochondrial_Trifunctional_Protein_Deficiency.yaml",
      "term_id": "GO:1901570",
      "term_label": "fatty acid derivative biosynthetic process",
      "score": 0.077319,
      "direct_score": 0.0,
      "propagated_score": 0.093724,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0046951",
      "best_source_term_label": "ketone body biosynthetic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046951"
      ],
      "supporting_source_term_labels": [
        "ketone body biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Impaired energy production during catabolic stress"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1901570" } }));
