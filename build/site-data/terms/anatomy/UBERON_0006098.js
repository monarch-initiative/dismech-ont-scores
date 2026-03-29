window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0006098"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0006098",
  "term_label": "basal nuclear complex",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.418019,
  "mean_score": 0.232196,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Glutaryl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0009281",
      "source_file": "Glutaryl-CoA_Dehydrogenase_Deficiency.yaml",
      "term_id": "UBERON:0006098",
      "term_label": "basal nuclear complex",
      "score": 0.418019,
      "direct_score": 0.0,
      "propagated_score": 0.536517,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002435",
      "best_source_term_label": "striatum",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0006098",
      "term_label": "basal nuclear complex",
      "score": 0.389567,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002435",
      "best_source_term_label": "striatum",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0006098",
      "term_label": "basal nuclear complex",
      "score": 0.08657,
      "direct_score": 0.0,
      "propagated_score": 0.111111,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002435",
      "best_source_term_label": "striatum",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "UBERON:0006098",
      "term_label": "basal nuclear complex",
      "score": 0.034628,
      "direct_score": 0.0,
      "propagated_score": 0.044444,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001874",
      "best_source_term_label": "putamen",
      "best_source_path_score": 0.25,
      "best_source_path": "part_of > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0006098" } }));
