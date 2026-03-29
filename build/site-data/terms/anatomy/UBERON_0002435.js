window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0002435"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0002435",
  "term_label": "striatum",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.57287,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Glutaryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0009281",
      "source_file": "Glutaryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "UBERON:0002435",
      "term_label": "striatum",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002435",
      "best_source_term_label": "striatum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0001873",
        "UBERON:0001874",
        "UBERON:0002435"
      ],
      "supporting_source_term_labels": [
        "caudate nucleus",
        "putamen",
        "striatum"
      ],
      "supporting_source_node_names": [
        "Brain exposure to toxic GA1 catabolites",
        "GCDH enzymatic deficiency and disrupted lysine catabolism",
        "Oxidative stress and neuroinflammation",
        "Striatal vulnerability and encephalopathic crises"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Huntington's Disease",
      "disease_term_id": "MONDO:0007739",
      "source_file": "Huntingtons_Disease.yaml",
      "term_id": "UBERON:0002435",
      "term_label": "striatum",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002435",
      "best_source_term_label": "striatum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002435"
      ],
      "supporting_source_term_labels": [
        "striatum"
      ],
      "supporting_source_node_names": [
        "CAG Repeat Expansion in the HTT Gene",
        "D2 Receptor Medium Spiny Neuron Selective Vulnerability",
        "Excitotoxicity",
        "Mitochondrial Dysfunction",
        "Mutant Huntingtin Protein Aggregation",
        "Neuroinflammation"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "3-Hydroxy-3-Methylglutaric Aciduria",
      "disease_term_id": "MONDO:0009520",
      "source_file": "3-Hydroxy-3-Methylglutaric_Aciduria.yaml",
      "term_id": "UBERON:0002435",
      "term_label": "striatum",
      "score": 0.222222,
      "direct_score": 0.222222,
      "propagated_score": 0.222222,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "UBERON:0002435",
      "best_source_term_label": "striatum",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0002435"
      ],
      "supporting_source_term_labels": [
        "striatum"
      ],
      "supporting_source_node_names": [
        "HMG-mediated neurotoxicity via mitochondrial dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Wilson Disease",
      "disease_term_id": "MONDO:0010200",
      "source_file": "Wilsons_Disease.yaml",
      "term_id": "UBERON:0002435",
      "term_label": "striatum",
      "score": 0.069256,
      "direct_score": 0.0,
      "propagated_score": 0.088889,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001874",
      "best_source_term_label": "putamen",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001874"
      ],
      "supporting_source_term_labels": [
        "putamen"
      ],
      "supporting_source_node_names": [
        "Neurodegeneration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0002435" } }));
