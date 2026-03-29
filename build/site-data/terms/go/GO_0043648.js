window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043648"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043648",
  "term_label": "dicarboxylic acid metabolic process",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.421108,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "D-2-Hydroxyglutaric Aciduria",
      "disease_term_id": "MONDO:0010924",
      "source_file": "D-2-Hydroxyglutaric_Aciduria.yaml",
      "term_id": "GO:0043648",
      "term_label": "dicarboxylic acid metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0043648",
      "best_source_term_label": "dicarboxylic acid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043648"
      ],
      "supporting_source_term_labels": [
        "dicarboxylic acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired D-2-hydroxyglutarate clearance (type I)"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "GO:0043648",
      "term_label": "dicarboxylic acid metabolic process",
      "score": 0.142148,
      "direct_score": 0.0,
      "propagated_score": 0.172308,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0046655",
      "best_source_term_label": "folic acid metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046655"
      ],
      "supporting_source_term_labels": [
        "folic acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Serine-glycine-one-carbon metabolic disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Maple Syrup Urine Disease",
      "disease_term_id": "MONDO:0009563",
      "source_file": "Maple_Syrup_Urine_Disease.yaml",
      "term_id": "GO:0043648",
      "term_label": "dicarboxylic acid metabolic process",
      "score": 0.121176,
      "direct_score": 0.0,
      "propagated_score": 0.146885,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006536",
      "best_source_term_label": "glutamate metabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006536"
      ],
      "supporting_source_term_labels": [
        "glutamate metabolic process"
      ],
      "supporting_source_node_names": [
        "Brain Neurotransmitter Depletion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043648" } }));
