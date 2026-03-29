window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071806"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071806",
  "term_label": "protein transmembrane transport",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.314313,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Campylobacteriosis",
      "disease_term_id": "MONDO:0005688",
      "source_file": "Campylobacteriosis.yaml",
      "term_id": "GO:0071806",
      "term_label": "protein transmembrane transport",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030254",
      "best_source_term_label": "protein secretion by the type III secretion system",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030254"
      ],
      "supporting_source_term_labels": [
        "protein secretion by the type III secretion system"
      ],
      "supporting_source_node_names": [
        "Type III/VI secretion-dependent invasion signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "GO:0071806",
      "term_label": "protein transmembrane transport",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0016558",
      "best_source_term_label": "protein import into peroxisome matrix",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0016558"
      ],
      "supporting_source_term_labels": [
        "protein import into peroxisome matrix"
      ],
      "supporting_source_node_names": [
        "Impaired Peroxisome Biogenesis and Import"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0071806",
      "term_label": "protein transmembrane transport",
      "score": 0.082497,
      "direct_score": 0.0,
      "propagated_score": 0.1,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030254",
      "best_source_term_label": "protein secretion by the type III secretion system",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030254"
      ],
      "supporting_source_term_labels": [
        "protein secretion by the type III secretion system"
      ],
      "supporting_source_node_names": [
        "Type III secretion system-mediated invasion and vacuolar escape"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071806" } }));
