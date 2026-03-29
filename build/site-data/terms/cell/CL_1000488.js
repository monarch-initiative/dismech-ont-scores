window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1000488"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1000488",
  "term_label": "cholangiocyte",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.652089,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "IDH-Mutant Cholangiocarcinoma",
      "disease_term_id": "MONDO:0003210",
      "source_file": "IDH_Mutant_Cholangiocarcinoma.yaml",
      "term_id": "CL:1000488",
      "term_label": "cholangiocyte",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:1000488",
      "best_source_term_label": "cholangiocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1000488"
      ],
      "supporting_source_term_labels": [
        "cholangiocyte"
      ],
      "supporting_source_node_names": [
        "IDH1/2 Neomorphic Mutation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "FGFR-Altered Cholangiocarcinoma",
      "disease_term_id": "MONDO:0003210",
      "source_file": "FGFR_Altered_Cholangiocarcinoma.yaml",
      "term_id": "CL:1000488",
      "term_label": "cholangiocyte",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002538",
      "best_source_term_label": "intrahepatic cholangiocyte",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002538"
      ],
      "supporting_source_term_labels": [
        "intrahepatic cholangiocyte"
      ],
      "supporting_source_node_names": [
        "FGFR2 Fusion and Constitutive Activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "CL:1000488",
      "term_label": "cholangiocyte",
      "score": 0.378788,
      "direct_score": 0.378788,
      "propagated_score": 0.378788,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "CL:1000488",
      "best_source_term_label": "cholangiocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1000488"
      ],
      "supporting_source_term_labels": [
        "cholangiocyte"
      ],
      "supporting_source_node_names": [
        "Hepatobiliary Obstruction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1000488" } }));
