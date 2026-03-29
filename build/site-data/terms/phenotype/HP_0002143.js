window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002143"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002143",
  "term_label": "Abnormal spinal cord morphology",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.760896,
  "mean_score": 0.59927,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CLOVES Syndrome",
      "disease_term_id": "MONDO:0013038",
      "source_file": "CLOVES_Syndrome.yaml",
      "term_id": "HP:0002143",
      "term_label": "Abnormal spinal cord morphology",
      "score": 0.760896,
      "direct_score": 0.0,
      "propagated_score": 0.976591,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010301",
      "best_source_term_label": "Spinal dysraphism",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002144",
        "HP:0002390",
        "HP:0002414",
        "HP:0010301"
      ],
      "supporting_source_term_labels": [
        "Spina bifida",
        "Spinal arteriovenous malformation",
        "Spinal dysraphism",
        "Tethered cord"
      ],
      "supporting_source_node_names": [
        "Spina Bifida",
        "Spinal Anomalies",
        "Spinal Arteriovenous Malformation",
        "Tethered Cord"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Kummell Disease",
      "disease_term_id": "MONDO:0003940",
      "source_file": "Kummell_Disease.yaml",
      "term_id": "HP:0002143",
      "term_label": "Abnormal spinal cord morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002196",
      "best_source_term_label": "Myelopathy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002196"
      ],
      "supporting_source_term_labels": [
        "Myelopathy"
      ],
      "supporting_source_node_names": [
        "Neurological deficit"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Lyme Disease",
      "disease_term_id": "MONDO:0019632",
      "source_file": "Lyme_Disease.yaml",
      "term_id": "HP:0002143",
      "term_label": "Abnormal spinal cord morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0012486",
      "best_source_term_label": "Myelitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012486"
      ],
      "supporting_source_term_labels": [
        "Myelitis"
      ],
      "supporting_source_node_names": [
        "Myelitis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Neuromyelitis Optica Spectrum Disorder",
      "disease_term_id": "MONDO:0019100",
      "source_file": "Neuromyelitis_Optica_Spectrum_Disorder.yaml",
      "term_id": "HP:0002143",
      "term_label": "Abnormal spinal cord morphology",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0012486",
      "best_source_term_label": "Myelitis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012486"
      ],
      "supporting_source_term_labels": [
        "Myelitis"
      ],
      "supporting_source_node_names": [
        "Longitudinally Extensive Transverse Myelitis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002143" } }));
