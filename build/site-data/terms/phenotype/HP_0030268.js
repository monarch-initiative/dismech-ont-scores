window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030268"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030268",
  "term_label": "Hyperplastic callus formation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Osteogenesis Imperfecta Type V",
      "disease_term_id": "MONDO:0012591",
      "source_file": "Osteogenesis_Imperfecta_Type_V.yaml",
      "term_id": "HP:0030268",
      "term_label": "Hyperplastic callus formation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0030268",
      "best_source_term_label": "Hyperplastic callus formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0030268"
      ],
      "supporting_source_term_labels": [
        "Hyperplastic callus formation"
      ],
      "supporting_source_node_names": [
        "Hyperplastic Callus Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030268" } }));
