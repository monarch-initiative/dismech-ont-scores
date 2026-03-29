window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000637"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000637",
  "term_label": "chromophil cell of anterior pituitary gland",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.404234,
  "mean_score": 0.404234,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "CL:0000637",
      "term_label": "chromophil cell of anterior pituitary gland",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002309",
      "best_source_term_label": "corticotroph",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002309"
      ],
      "supporting_source_term_labels": [
        "corticotroph"
      ],
      "supporting_source_node_names": [
        "Hypothalamic-Pituitary-Adrenal Axis Dysregulation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Major Depressive Disorder",
      "disease_term_id": "MONDO:0002009",
      "source_file": "Major_Depressive_Disorder.yaml",
      "term_id": "CL:0000637",
      "term_label": "chromophil cell of anterior pituitary gland",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002309",
      "best_source_term_label": "corticotroph",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002309"
      ],
      "supporting_source_term_labels": [
        "corticotroph"
      ],
      "supporting_source_node_names": [
        "HPA Axis Dysregulation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "CL:0000637",
      "term_label": "chromophil cell of anterior pituitary gland",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "CL:0002311",
      "best_source_term_label": "mammotroph",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002311"
      ],
      "supporting_source_term_labels": [
        "mammotroph"
      ],
      "supporting_source_node_names": [
        "Hyperprolactinemia-associated endocrine dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000637" } }));
