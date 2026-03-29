window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0055002"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0055002",
  "term_label": "striated muscle cell development",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.41583,
  "mean_score": 0.263513,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0055002",
      "term_label": "striated muscle cell development",
      "score": 0.41583,
      "direct_score": 0.0,
      "propagated_score": 0.467452,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0030239",
      "best_source_term_label": "myofibril assembly",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0030239",
        "GO:0030240",
        "GO:0045214"
      ],
      "supporting_source_term_labels": [
        "myofibril assembly",
        "sarcomere organization",
        "skeletal muscle thin filament assembly"
      ],
      "supporting_source_node_names": [
        "NRAP-Mediated Sarcomere Disorganization",
        "Nemaline Rod Formation",
        "Thin Filament Dysfunction",
        "Thin Filament Length Dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Camptodactyly",
      "disease_term_id": "MONDO:0007250",
      "source_file": "Camptodactyly.yaml",
      "term_id": "GO:0055002",
      "term_label": "striated muscle cell development",
      "score": 0.111196,
      "direct_score": 0.0,
      "propagated_score": 0.125,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0045214",
      "best_source_term_label": "sarcomere organization",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0045214"
      ],
      "supporting_source_term_labels": [
        "sarcomere organization"
      ],
      "supporting_source_node_names": [
        "Sarcomere Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0055002" } }));
