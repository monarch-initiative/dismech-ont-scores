window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004942"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004942",
  "term_label": "Aortic aneurysm",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.734745,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Shprintzen-Goldberg Syndrome",
      "disease_term_id": "MONDO:0008426",
      "source_file": "Shprintzen-Goldberg_Syndrome.yaml",
      "term_id": "HP:0004942",
      "term_label": "Aortic aneurysm",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0004942",
      "best_source_term_label": "Aortic aneurysm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004942"
      ],
      "supporting_source_term_labels": [
        "Aortic aneurysm"
      ],
      "supporting_source_node_names": [
        "Aortic Aneurysm"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "HP:0004942",
      "term_label": "Aortic aneurysm",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8784,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0004942",
      "best_source_term_label": "Aortic aneurysm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002616",
        "HP:0004942"
      ],
      "supporting_source_term_labels": [
        "Aortic aneurysm",
        "Aortic root aneurysm"
      ],
      "supporting_source_node_names": [
        "Aortic Aneurysm"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Loeys-Dietz Syndrome",
      "disease_term_id": "MONDO:0018954",
      "source_file": "Loeys-Dietz_Syndrome.yaml",
      "term_id": "HP:0004942",
      "term_label": "Aortic aneurysm",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002616",
      "best_source_term_label": "Aortic root aneurysm",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002616"
      ],
      "supporting_source_term_labels": [
        "Aortic root aneurysm"
      ],
      "supporting_source_node_names": [
        "Aortic Root Aneurysm"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004942" } }));
