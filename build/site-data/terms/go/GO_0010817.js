window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0010817"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0010817",
  "term_label": "regulation of hormone levels",
  "disease_count": 19,
  "direct_disease_count": 0,
  "top_score": 0.385037,
  "mean_score": 0.137021,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.385037,
      "direct_score": 0.0,
      "propagated_score": 0.725268,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0008209",
      "best_source_term_label": "androgen metabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006703",
        "GO:0008209",
        "GO:0032274"
      ],
      "supporting_source_term_labels": [
        "androgen metabolic process",
        "estrogen biosynthetic process",
        "gonadotropin secretion"
      ],
      "supporting_source_node_names": [
        "CYP19A1 Gene Mutation",
        "Estrogen Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Obesity",
      "disease_term_id": "MONDO:0011122",
      "source_file": "Obesity.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.260136,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0070163",
      "best_source_term_label": "regulation of adiponectin secretion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070163"
      ],
      "supporting_source_term_labels": [
        "regulation of adiponectin secretion"
      ],
      "supporting_source_node_names": [
        "Adipose Tissue Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Type 2 Diabetes Mellitus",
      "disease_term_id": "MONDO:0005148",
      "source_file": "Type_2_Diabetes_Mellitus.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.196654,
      "direct_score": 0.0,
      "propagated_score": 0.370423,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0030073",
      "best_source_term_label": "insulin secretion",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030073",
        "GO:0050796"
      ],
      "supporting_source_term_labels": [
        "insulin secretion",
        "regulation of insulin secretion"
      ],
      "supporting_source_node_names": [
        "Beta Cell Dysfunction",
        "Incretin Axis Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Delayed Sleep Phase Syndrome",
      "disease_term_id": "MONDO:0024377",
      "source_file": "Delayed_Sleep_Phase_Syndrome.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.182095,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0030187",
      "best_source_term_label": "melatonin biosynthetic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030187"
      ],
      "supporting_source_term_labels": [
        "melatonin biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Altered Melatonin Secretion Timing"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Hashimoto's Thyroiditis",
      "disease_term_id": "MONDO:0007699",
      "source_file": "Hashimotos_Thyroiditis.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.182095,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0006590",
      "best_source_term_label": "thyroid hormone generation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006590"
      ],
      "supporting_source_term_labels": [
        "thyroid hormone generation"
      ],
      "supporting_source_node_names": [
        "Thyroid Hormone Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.182095,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0006702",
      "best_source_term_label": "androgen biosynthetic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006702"
      ],
      "supporting_source_term_labels": [
        "androgen biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Hyperandrogenism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.173424,
      "direct_score": 0.0,
      "propagated_score": 0.326667,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0046879",
      "best_source_term_label": "hormone secretion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046879"
      ],
      "supporting_source_term_labels": [
        "hormone secretion"
      ],
      "supporting_source_node_names": [
        "Hypergonadotropic Hypogonadism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diabetes mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Diabetes_Mellitus.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.148821,
      "direct_score": 0.0,
      "propagated_score": 0.280323,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0030073",
      "best_source_term_label": "insulin secretion",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030073",
        "GO:0050796"
      ],
      "supporting_source_term_labels": [
        "insulin secretion",
        "regulation of insulin secretion"
      ],
      "supporting_source_node_names": [
        "Absolute insulin deficiency",
        "Incretin axis dysfunction",
        "Pancreatic beta-cell secretory dysfunction",
        "Pancreatogenic endocrine hormone loss (T5DM/fibro-inflammatory overlap)",
        "Relative insulin deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Graves' Disease",
      "disease_term_id": "MONDO:0005364",
      "source_file": "Graves_Disease.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.136571,
      "direct_score": 0.0,
      "propagated_score": 0.25725,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0006590",
      "best_source_term_label": "thyroid hormone generation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006590"
      ],
      "supporting_source_term_labels": [
        "thyroid hormone generation"
      ],
      "supporting_source_node_names": [
        "Thyroid Overactivity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Malnutrition-Related Diabetes Mellitus",
      "disease_term_id": "MONDO:0005015",
      "source_file": "Malnutrition-related_Diabetes_Mellitus.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.127467,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0030073",
      "best_source_term_label": "insulin secretion",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030073"
      ],
      "supporting_source_term_labels": [
        "insulin secretion"
      ],
      "supporting_source_node_names": [
        "Insulin deficiency from beta-cell impairment in undernutrition"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.127467,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0070459",
      "best_source_term_label": "prolactin secretion",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070459"
      ],
      "supporting_source_term_labels": [
        "prolactin secretion"
      ],
      "supporting_source_node_names": [
        "Hyperprolactinemia-associated endocrine dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.116541,
      "direct_score": 0.0,
      "propagated_score": 0.21952,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0006705",
      "best_source_term_label": "mineralocorticoid biosynthetic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006705"
      ],
      "supporting_source_term_labels": [
        "mineralocorticoid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Reduced Aldosterone Production"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Chronic Kidney Disease",
      "disease_term_id": "MONDO:0005300",
      "source_file": "Chronic_Kidney_Disease.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.062459,
      "direct_score": 0.0,
      "propagated_score": 0.117649,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0002018",
      "best_source_term_label": "renin-angiotensin regulation of aldosterone production",
      "best_source_path_score": 0.117649,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 6,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.062459,
      "direct_score": 0.0,
      "propagated_score": 0.117649,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0035933",
      "best_source_term_label": "glucocorticoid secretion",
      "best_source_path_score": 0.117649,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 6,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035933"
      ],
      "supporting_source_term_labels": [
        "glucocorticoid secretion"
      ],
      "supporting_source_node_names": [
        "Chronic Cortisol Excess"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Dilated Cardiomyopathy",
      "disease_term_id": "MONDO:0005021",
      "source_file": "Dilated_Cardiomyopathy.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.062459,
      "direct_score": 0.0,
      "propagated_score": 0.117649,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0002018",
      "best_source_term_label": "renin-angiotensin regulation of aldosterone production",
      "best_source_path_score": 0.117649,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 6,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "disorder_name": "Essential Hypertension",
      "disease_term_id": "MONDO:0001134",
      "source_file": "Essential_Hypertension.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.062459,
      "direct_score": 0.0,
      "propagated_score": 0.117649,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0002018",
      "best_source_term_label": "renin-angiotensin regulation of aldosterone production",
      "best_source_path_score": 0.117649,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 6,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002018"
      ],
      "supporting_source_term_labels": [
        "renin-angiotensin regulation of aldosterone production"
      ],
      "supporting_source_node_names": [
        "Renin-Angiotensin-Aldosterone System Dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Heart Failure",
      "disease_term_id": "MONDO:0005252",
      "source_file": "Heart_Failure.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.062459,
      "direct_score": 0.0,
      "propagated_score": 0.117649,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0002018",
      "best_source_term_label": "renin-angiotensin regulation of aldosterone production",
      "best_source_path_score": 0.117649,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 6,
      "best_path_is_a_hops": 6,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.042489,
      "direct_score": 0.0,
      "propagated_score": 0.080033,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0046676",
      "best_source_term_label": "negative regulation of insulin secretion",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046676"
      ],
      "supporting_source_term_labels": [
        "negative regulation of insulin secretion"
      ],
      "supporting_source_node_names": [
        "Pancreatic Iron Toxicity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CKD-Mineral Bone Disorder",
      "disease_term_id": "MONDO:0006946",
      "source_file": "CKD-Mineral_Bone_Disorder.yaml",
      "term_id": "GO:0010817",
      "term_label": "regulation of hormone levels",
      "score": 0.030214,
      "direct_score": 0.0,
      "propagated_score": 0.056913,
      "specificity": 0.53089,
      "is_direct": false,
      "best_source_term_id": "GO:0035898",
      "best_source_term_label": "parathyroid hormone secretion",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035898"
      ],
      "supporting_source_term_labels": [
        "parathyroid hormone secretion"
      ],
      "supporting_source_node_names": [
        "Secondary Hyperparathyroidism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0010817" } }));
