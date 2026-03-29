window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0006503"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0006503",
  "term_label": "Aplasia/hypoplasia involving forearm bones",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.62715,
  "mean_score": 0.411167,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0006503",
      "term_label": "Aplasia/hypoplasia involving forearm bones",
      "score": 0.62715,
      "direct_score": 0.0,
      "propagated_score": 0.760211,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0006495",
      "best_source_term_label": "Aplasia/Hypoplasia of the ulna",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002984",
        "HP:0006495"
      ],
      "supporting_source_term_labels": [
        "Aplasia/Hypoplasia of the ulna",
        "Hypoplasia of the radius"
      ],
      "supporting_source_node_names": [
        "Radial Ray Defects",
        "Ulnar Aplasia or Hypoplasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ulnar-Mammary Syndrome",
      "disease_term_id": "MONDO:0008411",
      "source_file": "Ulnar-Mammary_Syndrome.yaml",
      "term_id": "HP:0006503",
      "term_label": "Aplasia/hypoplasia involving forearm bones",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0003022",
      "best_source_term_label": "Hypoplasia of the ulna",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003022"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the ulna"
      ],
      "supporting_source_node_names": [
        "Ulnar Ray Deficiency"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Holt-Oram Syndrome",
      "disease_term_id": "MONDO:0007732",
      "source_file": "Holt-Oram_Syndrome.yaml",
      "term_id": "HP:0006503",
      "term_label": "Aplasia/hypoplasia involving forearm bones",
      "score": 0.202117,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002984",
      "best_source_term_label": "Hypoplasia of the radius",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002984"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the radius"
      ],
      "supporting_source_node_names": [
        "Radial Hypoplasia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0006503" } }));
