window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001560"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001560",
  "term_label": "Abnormality of the amniotic fluid",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.750721,
  "mean_score": 0.635226,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Twin to Twin Transfusion Syndrome",
      "disease_term_id": "MONDO:0019805",
      "source_file": "Twin_to_Twin_Transfusion_Syndrome.yaml",
      "term_id": "HP:0001560",
      "term_label": "Abnormality of the amniotic fluid",
      "score": 0.750721,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001562",
      "best_source_term_label": "Oligohydramnios",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001561",
        "HP:0001562"
      ],
      "supporting_source_term_labels": [
        "Oligohydramnios",
        "Polyhydramnios"
      ],
      "supporting_source_node_names": [
        "Oligohydramnios (donor)",
        "Polyhydramnios (recipient)"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cardiofaciocutaneous Syndrome",
      "disease_term_id": "MONDO:0015280",
      "source_file": "Cardiofaciocutaneous_Syndrome.yaml",
      "term_id": "HP:0001560",
      "term_label": "Abnormality of the amniotic fluid",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001561",
      "best_source_term_label": "Polyhydramnios",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001561"
      ],
      "supporting_source_term_labels": [
        "Polyhydramnios"
      ],
      "supporting_source_node_names": [
        "Polyhydramnios"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Short-Rib Polydactyly Syndrome",
      "disease_term_id": "MONDO:0015461",
      "source_file": "Short-Rib_Polydactyly_Syndrome.yaml",
      "term_id": "HP:0001560",
      "term_label": "Abnormality of the amniotic fluid",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0001561",
      "best_source_term_label": "Polyhydramnios",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001561"
      ],
      "supporting_source_term_labels": [
        "Polyhydramnios"
      ],
      "supporting_source_node_names": [
        "Polyhydramnios"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001560" } }));
