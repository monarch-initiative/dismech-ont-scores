window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010450"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010450",
  "term_label": "Esophageal stenosis",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0010450",
      "term_label": "Esophageal stenosis",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002043",
      "best_source_term_label": "Esophageal stricture",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002043"
      ],
      "supporting_source_term_labels": [
        "Esophageal stricture"
      ],
      "supporting_source_node_names": [
        "Esophageal Stricture"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kindler Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0008260",
      "source_file": "Kindler_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0010450",
      "term_label": "Esophageal stenosis",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002043",
      "best_source_term_label": "Esophageal stricture",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002043"
      ],
      "supporting_source_term_labels": [
        "Esophageal stricture"
      ],
      "supporting_source_node_names": [
        "Esophageal Stenosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010450" } }));
