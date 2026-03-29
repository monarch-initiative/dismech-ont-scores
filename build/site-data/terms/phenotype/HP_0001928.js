window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001928"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001928",
  "term_label": "Abnormality of coagulation",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.659045,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Tyrosinemia Type I",
      "disease_term_id": "MONDO:0010161",
      "source_file": "Tyrosinemia_Type_I.yaml",
      "term_id": "HP:0001928",
      "term_label": "Abnormality of coagulation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0001928",
      "best_source_term_label": "Abnormality of coagulation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001928"
      ],
      "supporting_source_term_labels": [
        "Abnormality of coagulation"
      ],
      "supporting_source_node_names": [
        "Coagulopathy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hemophilia A",
      "disease_term_id": "MONDO:0010602",
      "source_file": "Hemophilia_A.yaml",
      "term_id": "HP:0001928",
      "term_label": "Abnormality of coagulation",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003645",
      "best_source_term_label": "Prolonged partial thromboplastin time",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003645"
      ],
      "supporting_source_term_labels": [
        "Prolonged partial thromboplastin time"
      ],
      "supporting_source_node_names": [
        "Prolonged aPTT"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "HP:0001928",
      "term_label": "Abnormality of coagulation",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003256",
      "best_source_term_label": "Abnormality of the coagulation cascade",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003256"
      ],
      "supporting_source_term_labels": [
        "Abnormality of the coagulation cascade"
      ],
      "supporting_source_node_names": [
        "Coagulopathy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multisystem Inflammatory Syndrome in Children (MIS-C)",
      "disease_term_id": "MONDO:0100163",
      "source_file": "Multisystem_Inflammatory_Syndrome_in_Children_MIS-C.yaml",
      "term_id": "HP:0001928",
      "term_label": "Abnormality of coagulation",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003256",
      "best_source_term_label": "Abnormality of the coagulation cascade",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003256"
      ],
      "supporting_source_term_labels": [
        "Abnormality of the coagulation cascade"
      ],
      "supporting_source_node_names": [
        "Coagulopathy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001928" } }));
