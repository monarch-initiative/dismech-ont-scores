window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003311"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003311",
  "term_label": "Hypoplasia of the odontoid process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Spondyloepiphyseal Dysplasia Congenita",
      "disease_term_id": "MONDO:0008471",
      "source_file": "Spondyloepiphyseal_Dysplasia_Congenita.yaml",
      "term_id": "HP:0003311",
      "term_label": "Hypoplasia of the odontoid process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0003311",
      "best_source_term_label": "Hypoplasia of the odontoid process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003311"
      ],
      "supporting_source_term_labels": [
        "Hypoplasia of the odontoid process"
      ],
      "supporting_source_node_names": [
        "Odontoid Hypoplasia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003311" } }));
