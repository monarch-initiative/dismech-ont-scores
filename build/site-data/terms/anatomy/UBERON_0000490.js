window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000490"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000490",
  "term_label": "unilaminar epithelium",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.267243,
  "mean_score": 0.134283,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Axenfeld-Rieger_syndrome",
      "disease_term_id": "MONDO:0019187",
      "source_file": "Axenfeld-Rieger_syndrome.yaml",
      "term_id": "UBERON:0000490",
      "term_label": "unilaminar epithelium",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001985",
      "best_source_term_label": "corneal endothelium",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001985"
      ],
      "supporting_source_term_labels": [
        "corneal endothelium"
      ],
      "supporting_source_node_names": [
        "Disrupted Neural Crest-Derived Periocular Mesenchyme Development"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "22q11.2 Deletion Syndrome",
      "disease_term_id": "MONDO:0018923",
      "source_file": "22q11.2_Deletion_Syndrome.yaml",
      "term_id": "UBERON:0000490",
      "term_label": "unilaminar epithelium",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0007124",
      "best_source_term_label": "pharyngeal pouch 3",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0007124"
      ],
      "supporting_source_term_labels": [
        "pharyngeal pouch 3"
      ],
      "supporting_source_node_names": [
        "TBX1 haploinsufficiency and pharyngeal arch development"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "UBERON:0000490",
      "term_label": "unilaminar epithelium",
      "score": 0.068308,
      "direct_score": 0.0,
      "propagated_score": 0.087672,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0004802",
      "best_source_term_label": "respiratory tract epithelium",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0004802",
        "UBERON:0005384"
      ],
      "supporting_source_term_labels": [
        "nasal cavity epithelium",
        "respiratory tract epithelium"
      ],
      "supporting_source_node_names": [
        "Ciliary Dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "UBERON:0000490",
      "term_label": "unilaminar epithelium",
      "score": 0.010694,
      "direct_score": 0.0,
      "propagated_score": 0.013726,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001281",
      "best_source_term_label": "hepatic sinusoid",
      "best_source_path_score": 0.082354,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 7,
      "best_path_is_a_hops": 7,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001281"
      ],
      "supporting_source_term_labels": [
        "hepatic sinusoid"
      ],
      "supporting_source_node_names": [
        "Portal Hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000490" } }));
