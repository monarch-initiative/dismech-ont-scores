window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002099"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002099",
  "term_label": "cardiac septum",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.809506,
  "mean_score": 0.46241,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Scimitar Syndrome",
      "disease_term_id": "MONDO:0015987",
      "source_file": "Scimitar_Syndrome.yaml",
      "term_id": "UBERON:0002099",
      "term_label": "cardiac septum",
      "score": 0.809506,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002094",
      "best_source_term_label": "interventricular septum",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002085",
        "UBERON:0002094"
      ],
      "supporting_source_term_labels": [
        "interatrial septum",
        "interventricular septum"
      ],
      "supporting_source_node_names": [
        "Associated atrial septal defect",
        "Associated ventricular septal defect"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Hypertrophic Cardiomyopathy",
      "disease_term_id": "MONDO:0005045",
      "source_file": "Hypertrophic_Cardiomyopathy.yaml",
      "term_id": "UBERON:0002099",
      "term_label": "cardiac septum",
      "score": 0.115314,
      "direct_score": 0.0,
      "propagated_score": 0.12963,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002094",
      "best_source_term_label": "interventricular septum",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002094"
      ],
      "supporting_source_term_labels": [
        "interventricular septum"
      ],
      "supporting_source_node_names": [
        "Left Ventricular Outflow Tract Obstruction",
        "Sarcomere Protein Mutations"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002099" } }));
