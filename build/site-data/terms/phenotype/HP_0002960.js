window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002960"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002960",
  "term_label": "Autoimmunity",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.916907,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Down_syndrome",
      "disease_term_id": "MONDO:0008608",
      "source_file": "Down_syndrome.yaml",
      "term_id": "HP:0002960",
      "term_label": "Autoimmunity",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0002960",
      "best_source_term_label": "Autoimmunity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002960"
      ],
      "supporting_source_term_labels": [
        "Autoimmunity"
      ],
      "supporting_source_node_names": [
        "Autoimmunity"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kabuki Syndrome",
      "disease_term_id": "MONDO:0016512",
      "source_file": "Kabuki_Syndrome.yaml",
      "term_id": "HP:0002960",
      "term_label": "Autoimmunity",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0002960",
      "best_source_term_label": "Autoimmunity",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002960"
      ],
      "supporting_source_term_labels": [
        "Autoimmunity"
      ],
      "supporting_source_node_names": [
        "Autoimmunity"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Common Variable Immunodeficiency",
      "disease_term_id": "MONDO:0015517",
      "source_file": "Common_Variable_Immunodeficiency.yaml",
      "term_id": "HP:0002960",
      "term_label": "Autoimmunity",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001973",
      "best_source_term_label": "Autoimmune thrombocytopenia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001890",
        "HP:0001973"
      ],
      "supporting_source_term_labels": [
        "Autoimmune hemolytic anemia",
        "Autoimmune thrombocytopenia"
      ],
      "supporting_source_node_names": [
        "Autoimmune Hemolytic Anemia",
        "Autoimmune Thrombocytopenia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002960" } }));
