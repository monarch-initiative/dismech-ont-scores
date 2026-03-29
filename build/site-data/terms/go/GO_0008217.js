window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008217"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008217",
  "term_label": "regulation of blood pressure",
  "disease_count": 6,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.285883,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Essential Hypertension",
      "disease_term_id": "MONDO:0001134",
      "source_file": "Essential_Hypertension.yaml",
      "term_id": "GO:0008217",
      "term_label": "regulation of blood pressure",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.714535,
      "is_direct": true,
      "best_source_term_id": "GO:0008217",
      "best_source_term_label": "regulation of blood pressure",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002018",
        "GO:0008217"
      ],
      "supporting_source_term_labels": [
        "regulation of blood pressure",
        "renin-angiotensin regulation of aldosterone production"
      ],
      "supporting_source_node_names": [
        "Vascular Resistance"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Chronic Kidney Disease",
      "disease_term_id": "MONDO:0005300",
      "source_file": "Chronic_Kidney_Disease.yaml",
      "term_id": "GO:0008217",
      "term_label": "regulation of blood pressure",
      "score": 0.175061,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.714535,
      "is_direct": false,
      "best_source_term_id": "GO:0002018",
      "best_source_term_label": "renin-angiotensin regulation of aldosterone production",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0002018"
      ],
      "supporting_source_term_labels": [
        "renin-angiotensin regulation of aldosterone production"
      ],
      "supporting_source_node_names": [
        "RAAS Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dilated Cardiomyopathy",
      "disease_term_id": "MONDO:0005021",
      "source_file": "Dilated_Cardiomyopathy.yaml",
      "term_id": "GO:0008217",
      "term_label": "regulation of blood pressure",
      "score": 0.175061,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.714535,
      "is_direct": false,
      "best_source_term_id": "GO:0002018",
      "best_source_term_label": "renin-angiotensin regulation of aldosterone production",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0002018"
      ],
      "supporting_source_term_labels": [
        "renin-angiotensin regulation of aldosterone production"
      ],
      "supporting_source_node_names": [
        "Neurohormonal Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Heart Failure",
      "disease_term_id": "MONDO:0005252",
      "source_file": "Heart_Failure.yaml",
      "term_id": "GO:0008217",
      "term_label": "regulation of blood pressure",
      "score": 0.175061,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.714535,
      "is_direct": false,
      "best_source_term_id": "GO:0002018",
      "best_source_term_label": "renin-angiotensin regulation of aldosterone production",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0002018"
      ],
      "supporting_source_term_labels": [
        "renin-angiotensin regulation of aldosterone production"
      ],
      "supporting_source_node_names": [
        "Neurohormonal Activation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Twin to Twin Transfusion Syndrome",
      "disease_term_id": "MONDO:0019805",
      "source_file": "Twin_to_Twin_Transfusion_Syndrome.yaml",
      "term_id": "GO:0008217",
      "term_label": "regulation of blood pressure",
      "score": 0.120092,
      "direct_score": 0.0,
      "propagated_score": 0.16807,
      "specificity": 0.714535,
      "is_direct": false,
      "best_source_term_id": "GO:0002016",
      "best_source_term_label": "regulation of blood volume by renin-angiotensin",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002016"
      ],
      "supporting_source_term_labels": [
        "regulation of blood volume by renin-angiotensin"
      ],
      "supporting_source_node_names": [
        "Donor RAAS activation and hormonal transfer to recipient"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0008217",
      "term_label": "regulation of blood pressure",
      "score": 0.070024,
      "direct_score": 0.0,
      "propagated_score": 0.098,
      "specificity": 0.714535,
      "is_direct": false,
      "best_source_term_id": "GO:0003066",
      "best_source_term_label": "positive regulation of heart rate by norepinephrine",
      "best_source_path_score": 0.1225,
      "best_source_path": "part_of > part_of > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0003066"
      ],
      "supporting_source_term_labels": [
        "positive regulation of heart rate by norepinephrine"
      ],
      "supporting_source_node_names": [
        "Compensatory Reflex Tachycardia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008217" } }));
