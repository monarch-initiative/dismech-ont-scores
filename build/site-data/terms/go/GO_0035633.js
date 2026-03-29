window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035633"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035633",
  "term_label": "maintenance of blood-brain barrier",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.637495,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Epilepsy",
      "disease_term_id": "MONDO:0005027",
      "source_file": "Epilepsy.yaml",
      "term_id": "GO:0035633",
      "term_label": "maintenance of blood-brain barrier",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0035633",
      "best_source_term_label": "maintenance of blood-brain barrier",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035633"
      ],
      "supporting_source_term_labels": [
        "maintenance of blood-brain barrier"
      ],
      "supporting_source_node_names": [
        "Blood-Brain Barrier Disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "GO:0035633",
      "term_label": "maintenance of blood-brain barrier",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0035633",
      "best_source_term_label": "maintenance of blood-brain barrier",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035633"
      ],
      "supporting_source_term_labels": [
        "maintenance of blood-brain barrier"
      ],
      "supporting_source_node_names": [
        "Blood-Brain Barrier Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Alzheimer Disease",
      "disease_term_id": "MONDO:0004975",
      "source_file": "Alzheimer_Disease.yaml",
      "term_id": "GO:0035633",
      "term_label": "maintenance of blood-brain barrier",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:1905603",
      "best_source_term_label": "regulation of blood-brain barrier permeability",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:1905603"
      ],
      "supporting_source_term_labels": [
        "regulation of blood-brain barrier permeability"
      ],
      "supporting_source_node_names": [
        "Vascular Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035633" } }));
