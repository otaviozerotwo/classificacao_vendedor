// Gerado de backend/model/modelo_final_120.pmml. Limites sem arredondamento.
export const model = {
  "id": "0",
  "score": "Nao_atingiu",
  "count": 1500.0,
  "distribution": {
    "Atingiu": 644.0,
    "Nao_atingiu": 856.0
  },
  "children": [
    {
      "id": "1",
      "score": "Nao_atingiu",
      "count": 883.0,
      "distribution": {
        "Atingiu": 238.0,
        "Nao_atingiu": 645.0
      },
      "children": [
        {
          "id": "2",
          "score": "Nao_atingiu",
          "count": 308.0,
          "distribution": {
            "Atingiu": 38.0,
            "Nao_atingiu": 270.0
          },
          "children": [
            {
              "id": "3",
              "score": "Nao_atingiu",
              "count": 184.0,
              "distribution": {
                "Atingiu": 13.0,
                "Nao_atingiu": 171.0
              },
              "children": [],
              "predicate": {
                "field": "vendas_por_dia",
                "operator": "lessOrEqual",
                "value": 2225.440594965675
              }
            },
            {
              "id": "4",
              "score": "Nao_atingiu",
              "count": 124.0,
              "distribution": {
                "Atingiu": 25.0,
                "Nao_atingiu": 99.0
              },
              "children": [],
              "predicate": {
                "field": "vendas_por_dia",
                "operator": "greaterThan",
                "value": 2225.440594965675
              }
            }
          ],
          "predicate": {
            "field": "media_atingimento_3m",
            "operator": "lessOrEqual",
            "value": 0.8638727036272665
          }
        },
        {
          "id": "5",
          "score": "Nao_atingiu",
          "count": 575.0,
          "distribution": {
            "Atingiu": 200.0,
            "Nao_atingiu": 375.0
          },
          "children": [
            {
              "id": "6",
              "score": "Nao_atingiu",
              "count": 344.0,
              "distribution": {
                "Atingiu": 98.0,
                "Nao_atingiu": 246.0
              },
              "children": [
                {
                  "id": "7",
                  "score": "Nao_atingiu",
                  "count": 180.0,
                  "distribution": {
                    "Atingiu": 43.0,
                    "Nao_atingiu": 137.0
                  },
                  "children": [],
                  "predicate": {
                    "field": "media_atingimento_3m",
                    "operator": "lessOrEqual",
                    "value": 0.940068768944747
                  }
                },
                {
                  "id": "8",
                  "score": "Nao_atingiu",
                  "count": 164.0,
                  "distribution": {
                    "Atingiu": 55.0,
                    "Nao_atingiu": 109.0
                  },
                  "children": [],
                  "predicate": {
                    "field": "media_atingimento_3m",
                    "operator": "greaterThan",
                    "value": 0.940068768944747
                  }
                }
              ],
              "predicate": {
                "field": "atendimentos_por_dia",
                "operator": "lessOrEqual",
                "value": 26.804761904761904
              }
            },
            {
              "id": "9",
              "score": "Nao_atingiu",
              "count": 231.0,
              "distribution": {
                "Atingiu": 102.0,
                "Nao_atingiu": 129.0
              },
              "children": [],
              "predicate": {
                "field": "atendimentos_por_dia",
                "operator": "greaterThan",
                "value": 26.804761904761904
              }
            }
          ],
          "predicate": {
            "field": "media_atingimento_3m",
            "operator": "greaterThan",
            "value": 0.8638727036272665
          }
        }
      ],
      "predicate": {
        "field": "media_atingimento_3m",
        "operator": "lessOrEqual",
        "value": 1.0130836897874627
      }
    },
    {
      "id": "10",
      "score": "Atingiu",
      "count": 617.0,
      "distribution": {
        "Atingiu": 406.0,
        "Nao_atingiu": 211.0
      },
      "children": [
        {
          "id": "11",
          "score": "Atingiu",
          "count": 421.0,
          "distribution": {
            "Atingiu": 252.0,
            "Nao_atingiu": 169.0
          },
          "children": [
            {
              "id": "12",
              "score": "Atingiu",
              "count": 182.0,
              "distribution": {
                "Atingiu": 93.0,
                "Nao_atingiu": 89.0
              },
              "children": [],
              "predicate": {
                "field": "media_atingimento_3m",
                "operator": "lessOrEqual",
                "value": 1.0672113707365831
              }
            },
            {
              "id": "13",
              "score": "Atingiu",
              "count": 239.0,
              "distribution": {
                "Atingiu": 159.0,
                "Nao_atingiu": 80.0
              },
              "children": [],
              "predicate": {
                "field": "media_atingimento_3m",
                "operator": "greaterThan",
                "value": 1.0672113707365831
              }
            }
          ],
          "predicate": {
            "field": "atingimento_meta",
            "operator": "lessOrEqual",
            "value": 1.1921030679674893
          }
        },
        {
          "id": "14",
          "score": "Atingiu",
          "count": 196.0,
          "distribution": {
            "Atingiu": 154.0,
            "Nao_atingiu": 42.0
          },
          "children": [],
          "predicate": {
            "field": "atingimento_meta",
            "operator": "greaterThan",
            "value": 1.1921030679674893
          }
        }
      ],
      "predicate": {
        "field": "media_atingimento_3m",
        "operator": "greaterThan",
        "value": 1.0130836897874627
      }
    }
  ]
} as const
