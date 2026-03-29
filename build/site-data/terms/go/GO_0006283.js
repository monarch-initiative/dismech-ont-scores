window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006283"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006283",
  "term_label": "transcription-coupled nucleotide-excision repair",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.666667,
  "mean_score": 0.666667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "GO:0006283",
      "term_label": "transcription-coupled nucleotide-excision repair",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006283",
      "best_source_term_label": "transcription-coupled nucleotide-excision repair",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006283"
      ],
      "supporting_source_term_labels": [
        "transcription-coupled nucleotide-excision repair"
      ],
      "supporting_source_node_names": [
        "Defective Transcription-Coupled Nucleotide Excision Repair"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006283" } }));
