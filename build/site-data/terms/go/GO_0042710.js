window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042710"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042710",
  "term_label": "biofilm formation",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 0.641327,
  "mean_score": 0.475257,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "GO:0042710",
      "term_label": "biofilm formation",
      "score": 0.641327,
      "direct_score": 0.307692,
      "propagated_score": 0.777396,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0044010",
      "best_source_term_label": "single-species biofilm formation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042710",
        "GO:0043708",
        "GO:0044010"
      ],
      "supporting_source_term_labels": [
        "biofilm formation",
        "cell adhesion involved in biofilm formation",
        "single-species biofilm formation"
      ],
      "supporting_source_node_names": [
        "Single-species biofilm establishment in chronic furunculosis lesions"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0042710",
      "term_label": "biofilm formation",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0042710",
      "best_source_term_label": "biofilm formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042710"
      ],
      "supporting_source_term_labels": [
        "biofilm formation"
      ],
      "supporting_source_node_names": [
        "Colonization and Biofilm Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Otomycosis",
      "disease_term_id": "MONDO:0000262",
      "source_file": "Otomycosis.yaml",
      "term_id": "GO:0042710",
      "term_label": "biofilm formation",
      "score": 0.284444,
      "direct_score": 0.284444,
      "propagated_score": 0.284444,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0042710",
      "best_source_term_label": "biofilm formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042710"
      ],
      "supporting_source_term_labels": [
        "biofilm formation"
      ],
      "supporting_source_node_names": [
        "Biofilm formation and antifungal resistance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042710" } }));
