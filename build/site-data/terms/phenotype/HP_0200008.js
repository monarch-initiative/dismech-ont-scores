window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0200008"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0200008",
  "term_label": "Intestinal polyposis",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.750721,
  "mean_score": 0.658879,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021056",
      "source_file": "Familial_Adenomatous_Polyposis.yaml",
      "term_id": "HP:0200008",
      "term_label": "Intestinal polyposis",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0030256",
      "best_source_term_label": "Small intestinal polyposis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030255",
        "HP:0030256"
      ],
      "supporting_source_term_labels": [
        "Large intestinal polyposis",
        "Small intestinal polyposis"
      ],
      "supporting_source_node_names": [
        "Colorectal Polyposis",
        "Duodenal Adenomas"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Classic Familial Adenomatous Polyposis",
      "disease_term_id": "MONDO:0021055",
      "source_file": "Classic_Familial_Adenomatous_Polyposis.yaml",
      "term_id": "HP:0200008",
      "term_label": "Intestinal polyposis",
      "score": 0.648438,
      "direct_score": 0.0,
      "propagated_score": 0.786016,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0030256",
      "best_source_term_label": "Small intestinal polyposis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030255",
        "HP:0030256"
      ],
      "supporting_source_term_labels": [
        "Large intestinal polyposis",
        "Small intestinal polyposis"
      ],
      "supporting_source_node_names": [
        "Colorectal polyposis",
        "Duodenal polyposis and neoplasia risk"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Peutz-Jeghers polyp",
      "disease_term_id": "MONDO:0006365",
      "source_file": "Peutz_Jeghers_polyp.yaml",
      "term_id": "HP:0200008",
      "term_label": "Intestinal polyposis",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0030256",
      "best_source_term_label": "Small intestinal polyposis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030256"
      ],
      "supporting_source_term_labels": [
        "Small intestinal polyposis"
      ],
      "supporting_source_node_names": [
        "Small intestinal polyposis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0200008" } }));
