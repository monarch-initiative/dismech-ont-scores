window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011495"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011495",
  "term_label": "Abnormal corneal epithelium morphology",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.479307,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cogan Syndrome",
      "disease_term_id": "MONDO:0015453",
      "source_file": "Cogan_Syndrome.yaml",
      "term_id": "HP:0011495",
      "term_label": "Abnormal corneal epithelium morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000491",
      "best_source_term_label": "Keratitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000491"
      ],
      "supporting_source_term_labels": [
        "Keratitis"
      ],
      "supporting_source_node_names": [
        "Keratitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0011495",
      "term_label": "Abnormal corneal epithelium morphology",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0200020",
      "best_source_term_label": "Corneal erosion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0200020"
      ],
      "supporting_source_term_labels": [
        "Corneal erosion"
      ],
      "supporting_source_node_names": [
        "Corneal Erosions"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Sjogren's Syndrome",
      "disease_term_id": "MONDO:0010030",
      "source_file": "Sjogrens_Syndrome.yaml",
      "term_id": "HP:0011495",
      "term_label": "Abnormal corneal epithelium morphology",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001097",
      "best_source_term_label": "Keratoconjunctivitis sicca",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001097"
      ],
      "supporting_source_term_labels": [
        "Keratoconjunctivitis sicca"
      ],
      "supporting_source_node_names": [
        "Keratoconjunctivitis Sicca"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011495" } }));
