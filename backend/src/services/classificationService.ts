import type { ClassificationRequest } from '~/interfaces/classification.interface.js';

export function classify(data: ClassificationRequest): string {
  let isTargetSuccess = '';

  const city = data.city;
  const role = data.role;
  const sex = data.sex;
  const salesTarget = data.salesTarget;
  const salesCompleted = data.salesCompleted;
  const grossMargin = data.grossMargin;
  const salesReturned = data.salesReturned;
  const totalDiscountTarget = data.totalDiscountTarget;
  const totalDiscountCompleted = data.budgetDiscountCompleted;
  const budgetDiscountTarget = data.budgetDiscountTarget;
  const budgetDiscountCompleted = data.budgetDiscountCompleted;
  const customersTarget = data.customersTarget;
  const customersServed = data.customersServed;
  const itemTarget = data.itemTarget;
  const itemsSold = data.itemsSold;
  const daysWorked = data.daysWorked;
  const month = data.month;
  const year = data.year;

  const discountTarget = 0;

  if (budgetDiscountTarget <= 5.65) {
    isTargetSuccess = 'Atingiu a Meta :)';
  } else {
    if (itemsSold <= 1136.5) {
      if (itemTarget <= 1250.5) {
        if (salesCompleted <= 9622.34) {
          if (budgetDiscountTarget <= 88.38) {
            if (grossMargin <= 407.44) {
              if (customersTarget <= 12.5) {
                if (salesCompleted <= 843.5) {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                } else {
                  isTargetSuccess = 'Atingiu a Meta :)';
                }
              } else {
                isTargetSuccess = 'Não Atingiu a Meta :(';
              }
            } else {
              if (salesCompleted <= 7302.36) {
                if (budgetDiscountTarget <= 64) {
                  if (salesCompleted <= 4965.62) {
                    if (budgetDiscountTarget <= 41.65) {
                      if (customersTarget <= 35.5) {
                        if (budgetDiscountTarget <= 34.61) {
                          if (salesCompleted <= 2149.39) {
                            if (budgetDiscountTarget <= 18.21) {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            } else {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            }
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      } else {
                        if (salesCompleted <= 3468.63) {
                          if (budgetDiscountCompleted <= 16.85) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            if (salesReturned <= 5.5) {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            } else {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            }
                          }
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      }
                    } else {
                      if (salesCompleted <= 4762.36) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        if (budgetDiscountTarget <= 48.48) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      }
                    }
                  } else {
                    if (salesReturned <= 325.41) {
                      if (budgetDiscountTarget <= 55.52) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        if (salesCompleted <= 5832.46) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      }
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  }
                } else {
                  if (totalDiscountCompleted <= 3534.77) {
                    if (salesCompleted <= 7019.03) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      if (budgetDiscountTarget <= 73.53) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    }
                  }
                }
              } else {
                if (budgetDiscountTarget <= 79.13) {
                  isTargetSuccess = 'Atingiu a Meta :)';
                } else {
                  if (salesCompleted <= 8002.74) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    if (salesCompleted <= 8505.8) {
                      if (budgetDiscountTarget <= 83.59) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  }
                }
              }
            }
          } else {
            if (budgetDiscountTarget <= 91.78) {
              if (salesCompleted <= 9004.74) {
                isTargetSuccess = 'Não Atingiu a Meta :(';
              } else {
                isTargetSuccess = 'Atingiu a Meta :)';
              }
            } else {
              isTargetSuccess = 'Não Atingiu a Meta :(';
            }
          }
        } else {
          if (budgetDiscountTarget <= 121.35) {
            if (budgetDiscountTarget <= 104.4) {
              isTargetSuccess = 'Atingiu a Meta :)';
            } else {
              if (salesCompleted <= 11.05) {
                if (budgetDiscountTarget <= 106.42) {
                  if (grossMargin <= 3180.42) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                } else {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                }
              } else {
                if (grossMargin <= 3078.57) {
                  if (totalDiscountTarget <= 3920.22) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                } else {
                  isTargetSuccess = 'Atingiu a Meta :)';
                }
              }
            }
          } else {
            if (salesCompleted <= 13656.23) {
              if (budgetDiscountTarget <= 130.22) {
                if (salesCompleted <= 12438.95) {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                } else {
                  isTargetSuccess = 'Atingiu a Meta :)';
                }
              } else {
                isTargetSuccess = 'Não Atingiu a Meta :(';
              }
            } else {
              if (budgetDiscountTarget <= 166.01) {
                if (salesCompleted <= 14.33) {
                  if (budgetDiscountTarget <= 140.41) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                } else {
                  if (budgetDiscountTarget <= 153) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    if (salesCompleted <= 15.6) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  }
                }
              } else {
                if (salesCompleted <= 20007.47) {
                  if (budgetDiscountTarget <= 180.84) {
                    if (salesCompleted <= 17110.54) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  } else {
                    if (discountTarget <= 192.84) {
                      if (salesCompleted <= 18.53) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  }
                } else {
                  if (budgetDiscountTarget <= 240) {
                    if (salesCompleted <= 21608.76) {
                      if (budgetDiscountTarget <= 209.99) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        if (itemTarget <= 771) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      }
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  } else {
                    if (salesCompleted <= 25089.11) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      if (budgetDiscountTarget <= 294.92) {
                        if (salesCompleted <= 27399.73) {
                          if (budgetDiscountTarget <= 262.5) {
                            if (customersTarget <= 406) {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            } else {
                              if (customersTarget <= 1124) {
                                isTargetSuccess = 'Não Atingiu a Meta :(';
                              } else {
                                isTargetSuccess = 'Atingiu a Meta :)';
                              }
                            }
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      } else {
                        if (salesCompleted <= 30021.97) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          if (budgetDiscountTarget <= 336.4) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            if (salesCompleted <= 33868) {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            } else {
                              if (itemsSold <= 577.5) {
                                if (itemTarget <= 579.5) {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                } else {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                }
                              } else {
                                if (customersTarget <= 610) {
                                  if (salesCompleted <= 35109.93) {
                                    if (budgetDiscountTarget <= 346.08) {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    } else {
                                      isTargetSuccess = 'Não Atingiu a Meta :(';
                                    }
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                } else {
                                  if (grossMargin <= 36924.34) {
                                    isTargetSuccess = 'Não Atingiu a Meta :(';
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (salesCompleted <= 36666.01) {
          if (totalDiscountTarget <= 10489.21) {
            if (totalDiscountCompleted <= 12209.63) {
              isTargetSuccess = 'Não Atingiu a Meta :(';
            } else {
              isTargetSuccess = 'Atingiu a Meta :)';
            }
          } else {
            if (grossMargin <= 21808.82) {
              if (itemsSold <= 1135.5) {
                if (totalDiscountCompleted <= 18645.44) {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                } else {
                  if (budgetDiscountCompleted <= 383.26) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                }
              } else {
                isTargetSuccess = 'Atingiu a Meta :)';
              }
            } else {
              if (budgetDiscountTarget <= 357.55) {
                isTargetSuccess = 'Atingiu a Meta :)';
              } else {
                isTargetSuccess = 'Não Atingiu a Meta :(';
              }
            }
          }
        } else {
          if (budgetDiscountTarget <= 474.29) {
            if (budgetDiscountTarget <= 395.34) {
              isTargetSuccess = 'Atingiu a Meta :)';
            } else {
              if (salesCompleted <= 41424.87) {
                isTargetSuccess = 'Não Atingiu a Meta :(';
              } else {
                if (budgetDiscountTarget <= 461.78) {
                  isTargetSuccess = 'Atingiu a Meta :)';
                } else {
                  if (itemTarget <= 1460.5) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                }
              }
            }
          } else {
            if (salesCompleted <= 48973.52) {
              isTargetSuccess = 'Não Atingiu a Meta :(';
            } else {
              if (itemTarget <= 1673) {
                isTargetSuccess = 'Atingiu a Meta :)';
              } else {
                isTargetSuccess = 'Não Atingiu a Meta :(';
              }
            }
          }
        }
      }
    } else {
      if (customersServed <= 889.5) {
        if (customersTarget <= 1003.5) {
          if (salesCompleted <= 50121.95) {
            if (budgetDiscountTarget <= 470) {
              if (salesCompleted <= 40888.03) {
                if (budgetDiscountTarget <= 380.91) {
                  if (salesCompleted <= 16012.12) {
                    if (budgetDiscountTarget <= 150.05) {
                      if (salesCompleted <= 12444.61) {
                        if (budgetDiscountTarget <= 117.74) {
                          if (itemTarget <= 491.5) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      } else {
                        if (budgetDiscountTarget <= 138.24) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          if (salesCompleted <= 14231.18) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            if (salesCompleted <= 14647.34) {
                              if (budgetDiscountTarget <= 145.6) {
                                isTargetSuccess = 'Atingiu a Meta :)';
                              } else {
                                isTargetSuccess = 'Não Atingiu a Meta :(';
                              }
                            } else {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            }
                          }
                        }
                      }
                    } else {
                      if (budgetDiscountTarget <= 158.18) {
                        if (salesCompleted <= 15.05) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    }
                  } else {
                    if (budgetDiscountTarget <= 177) {
                      if (salesCompleted <= 16188.92) {
                        if (budgetDiscountTarget <= 162.5) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    } else {
                      if (salesCompleted <= 18372.09) {
                        if (salesCompleted <= 17916.52) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          if (budgetDiscountTarget <= 182.1) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        }
                      } else {
                        if (salesCompleted <= 32715.04) {
                          if (budgetDiscountTarget <= 309.95) {
                            if (budgetDiscountTarget <= 210.42) {
                              if (salesCompleted <= 18803.45) {
                                if (budgetDiscountTarget <= 188.11) {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                } else {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                }
                              } else {
                                if (salesCompleted <= 20426.86) {
                                  if (budgetDiscountTarget <= 202.58) {
                                    if (customersTarget <= 210) {
                                      if (itemTarget <= 625) {
                                        isTargetSuccess = 'Atingiu a Meta :)';
                                      } else {
                                        isTargetSuccess =
                                          'Não Atingiu a Meta :(';
                                      }
                                    } else {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    }
                                  } else {
                                    isTargetSuccess = 'Não Atingiu a Meta :(';
                                  }
                                } else {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                }
                              }
                            } else {
                              if (salesCompleted <= 24814.16) {
                                if (budgetDiscountTarget <= 233.17) {
                                  if (salesCompleted <= 22195.17) {
                                    if (salesCompleted <= 21229.71) {
                                      isTargetSuccess = 'Não Atingiu a Meta :(';
                                    } else {
                                      if (budgetDiscountTarget <= 222.25) {
                                        isTargetSuccess = 'Atingiu a Meta :)';
                                      } else {
                                        isTargetSuccess =
                                          'Não Atingiu a Meta :(';
                                      }
                                    }
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                } else {
                                  if (salesCompleted <= 24535.59) {
                                    isTargetSuccess = 'Não Atingiu a Meta :(';
                                  } else {
                                    if (budgetDiscountTarget <= 252.69) {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    } else {
                                      isTargetSuccess = 'Não Atingiu a Meta :(';
                                    }
                                  }
                                }
                              } else {
                                if (budgetDiscountTarget <= 293.49) {
                                  if (salesCompleted <= 26047.56) {
                                    if (budgetDiscountTarget <= 255.15) {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    } else {
                                      isTargetSuccess = 'Não Atingiu a Meta :(';
                                    }
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                } else {
                                  if (salesCompleted <= 30153.92) {
                                    isTargetSuccess = 'Não Atingiu a Meta :(';
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                }
                              }
                            }
                          } else {
                            if (budgetDiscountTarget <= 321.71) {
                              if (salesCompleted <= 30935.41) {
                                isTargetSuccess = 'Não Atingiu a Meta :(';
                              } else {
                                isTargetSuccess = 'Atingiu a Meta :)';
                              }
                            } else {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            }
                          }
                        } else {
                          if (budgetDiscountTarget <= 342.62) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            if (salesCompleted <= 34741.31) {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            } else {
                              if (salesCompleted <= 36135.5) {
                                if (budgetDiscountTarget <= 354.71) {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                } else {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                }
                              } else {
                                isTargetSuccess = 'Atingiu a Meta :)';
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (salesCompleted <= 39671.6) {
                    if (budgetDiscountTarget <= 390.16) {
                      if (salesCompleted <= 39048.27) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  } else {
                    if (budgetDiscountTarget <= 408.09) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  }
                }
              } else {
                if (budgetDiscountTarget <= 444.86) {
                  if (salesCompleted <= 41967.89) {
                    if (budgetDiscountTarget <= 412.66) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                } else {
                  if (salesCompleted <= 44947.91) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    if (salesCompleted <= 46187.93) {
                      if (budgetDiscountTarget <= 451.92) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  }
                }
              }
            } else {
              if (budgetDiscountTarget <= 490.11) {
                if (salesCompleted <= 47553.36) {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                } else {
                  isTargetSuccess = 'Atingiu a Meta :)';
                }
              } else {
                isTargetSuccess = 'Não Atingiu a Meta :(';
              }
            }
          } else {
            if (budgetDiscountTarget <= 549.06) {
              if (budgetDiscountTarget <= 526.22) {
                if (budgetDiscountTarget <= 517.93) {
                  isTargetSuccess = 'Atingiu a Meta :)';
                } else {
                  if (salesCompleted <= 51856.76) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                }
              } else {
                if (salesCompleted <= 52972.94) {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                } else {
                  isTargetSuccess = 'Atingiu a Meta :)';
                }
              }
            } else {
              if (salesCompleted <= 57721.64) {
                if (budgetDiscountTarget <= 560) {
                  if (salesCompleted <= 54956.71) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                } else {
                  if (budgetDiscountTarget <= 570.42) {
                    if (salesCompleted <= 56519.57) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                }
              } else {
                if (budgetDiscountTarget <= 620) {
                  if (salesCompleted <= 59737.72) {
                    if (budgetDiscountTarget <= 594.77) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                } else {
                  if (salesCompleted <= 67280.71) {
                    if (budgetDiscountTarget <= 665.2) {
                      if (salesCompleted <= 63062.46) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        if (grossMargin <= 14049.27) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      }
                    } else {
                      if (salesCompleted <= 66834.07) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        if (budgetDiscountTarget <= 681.99) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      }
                    }
                  } else {
                    if (budgetDiscountTarget <= 726.5) {
                      if (salesCompleted <= 69930.91) {
                        if (budgetDiscountTarget <= 691.64) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    } else {
                      if (salesCompleted <= 75436.71) {
                        if (salesCompleted <= 74232.26) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          if (budgetDiscountTarget <= 751.36) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        }
                      } else {
                        if (budgetDiscountTarget <= 840.52) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          if (salesCompleted <= 87845.1) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (itemsSold <= 2411) {
            if (role <= 2.5) {
              if (itemTarget <= 3145.5) {
                isTargetSuccess = 'Atingiu a Meta :)';
              } else {
                isTargetSuccess = 'Não Atingiu a Meta :(';
              }
            } else {
              if (itemTarget <= 2600.5) {
                if (grossMargin <= 14688.64) {
                  if (budgetDiscountTarget <= 416.78) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                } else {
                  if (budgetDiscountCompleted <= 226.57) {
                    if (budgetDiscountTarget <= 636.06) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                }
              } else {
                if (salesCompleted <= 61896.42) {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                } else {
                  if (budgetDiscountTarget <= 764.01) {
                    if (budgetDiscountTarget <= 661.52) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      if (salesCompleted <= 71155.64) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                }
              }
            }
          } else {
            if (itemTarget <= 3293.5) {
              if (daysWorked <= 19.5) {
                if (budgetDiscountTarget <= 753.43) {
                  isTargetSuccess = 'Atingiu a Meta :)';
                } else {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                }
              } else {
                isTargetSuccess = 'Atingiu a Meta :)';
              }
            } else {
              if (itemsSold <= 2745) {
                if (customersServed <= 817.5) {
                  if (budgetDiscountTarget <= 809.99) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                } else {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                }
              } else {
                isTargetSuccess = 'Atingiu a Meta :)';
              }
            }
          }
        }
      } else {
        if (itemsSold <= 3397.5) {
          if (customersTarget <= 1166.5) {
            if (customersServed <= 1015.5) {
              if (budgetDiscountTarget <= 869.77) {
                if (grossMargin <= 19631.08) {
                  if (budgetDiscountTarget <= 730) {
                    if (itemTarget <= 2872.5) {
                      if (itemsSold <= 1789) {
                        if (budgetDiscountTarget <= 227.08) {
                          if (grossMargin <= 5616.25) {
                            if (budgetDiscountTarget <= 180.56) {
                              if (salesCompleted <= 15216.23) {
                                if (daysWorked <= 24.5) {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                } else {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                }
                              } else {
                                if (itemsSold <= 1296.5) {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                } else {
                                  if (budgetDiscountTarget <= 173.72) {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  } else {
                                    if (salesCompleted <= 17510.86) {
                                      isTargetSuccess = 'Não Atingiu a Meta :(';
                                    } else {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    }
                                  }
                                }
                              }
                            } else {
                              if (salesCompleted <= 19471.08) {
                                isTargetSuccess = 'Não Atingiu a Meta :(';
                              } else {
                                if (grossMargin <= 5503.81) {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                } else {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                }
                              }
                            }
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        } else {
                          if (salesCompleted <= 22906.55) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            if (budgetDiscountTarget <= 265.37) {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            } else {
                              if (grossMargin <= 8459.88) {
                                isTargetSuccess = 'Não Atingiu a Meta :(';
                              } else {
                                isTargetSuccess = 'Atingiu a Meta :)';
                              }
                            }
                          }
                        }
                      } else {
                        if (totalDiscountTarget <= 11804.75) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          if (salesCompleted <= 30729.24) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            if (totalDiscountCompleted <= 22369.41) {
                              if (totalDiscountTarget <= 20396.69) {
                                if (customersServed <= 901.5) {
                                  if (customersTarget <= 976.5) {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  } else {
                                    isTargetSuccess = 'Não Atingiu a Meta :(';
                                  }
                                } else {
                                  if (daysWorked <= 23.5) {
                                    if (daysWorked <= 22.5) {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    } else {
                                      isTargetSuccess = 'Não Atingiu a Meta :(';
                                    }
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                }
                              } else {
                                if (grossMargin <= 16750.13) {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                } else {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                }
                              }
                            } else {
                              if (budgetDiscountCompleted <= 165.23) {
                                if (customersTarget <= 975.5) {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                } else {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                }
                              } else {
                                if (grossMargin <= 13783.84) {
                                  if (daysWorked <= 26) {
                                    isTargetSuccess = 'Não Atingiu a Meta :(';
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                } else {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      if (salesCompleted <= 67888.12) {
                        if (budgetDiscountTarget <= 640.96) {
                          if (customersServed <= 938) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  } else {
                    if (salesCompleted <= 73838.88) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      if (budgetDiscountTarget <= 819.13) {
                        if (customersServed <= 995) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    }
                  }
                } else {
                  if (customersTarget <= 1062) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    if (salesCompleted <= 70884) {
                      if (budgetDiscountTarget <= 687.98) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    } else {
                      if (month <= 7.5) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        if (grossMargin <= 21106.26) {
                          if (budgetDiscountTarget <= 849.99) {
                            if (customersServed <= 960.5) {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            } else {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            }
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      }
                    }
                  }
                }
              } else {
                if (salesCompleted <= 88132.91) {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                } else {
                  if (budgetDiscountTarget <= 1010.1) {
                    if (customersTarget <= 1147.5) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      if (itemsSold <= 2823) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    }
                  } else {
                    if (salesCompleted <= 108.74) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  }
                }
              }
            } else {
              if (salesCompleted <= 17093.49) {
                if (itemTarget <= 623.5) {
                  isTargetSuccess = 'Atingiu a Meta :)';
                } else {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                }
              } else {
                if (itemTarget <= 1031) {
                  if (budgetDiscountTarget <= 230) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    if (salesCompleted <= 23013.85) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  }
                } else {
                  if (salesCompleted <= 31201.42) {
                    if (budgetDiscountTarget <= 302.42) {
                      if (totalDiscountCompleted <= 3791.41) {
                        if (daysWorked <= 15.5) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          if (customersServed <= 1152) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  } else {
                    if (itemTarget <= 3395.5) {
                      if (totalDiscountCompleted <= 4495.52) {
                        if (itemTarget <= 1409.5) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      } else {
                        if (grossMargin <= 22946.92) {
                          if (budgetDiscountTarget <= 831.63) {
                            if (totalDiscountTarget <= 24816.03) {
                              if (month <= 9.5) {
                                if (salesCompleted <= 33558.66) {
                                  if (budgetDiscountCompleted <= 159.31) {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  } else {
                                    isTargetSuccess = 'Não Atingiu a Meta :(';
                                  }
                                } else {
                                  if (itemsSold <= 2260) {
                                    if (budgetDiscountTarget <= 571.87) {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    } else {
                                      isTargetSuccess = 'Não Atingiu a Meta :(';
                                    }
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                }
                              } else {
                                if (budgetDiscountCompleted <= 827.83) {
                                  if (salesReturned <= 3.94) {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  } else {
                                    if (totalDiscountTarget <= 14573.28) {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    } else {
                                      if (grossMargin <= 11468.23) {
                                        isTargetSuccess =
                                          'Não Atingiu a Meta :(';
                                      } else {
                                        isTargetSuccess = 'Atingiu a Meta :)';
                                      }
                                    }
                                  }
                                } else {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                }
                              }
                            } else {
                              if (salesCompleted <= 74185.04) {
                                if (budgetDiscountTarget <= 722.27) {
                                  if (city <= 11.5) {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  } else {
                                    if (month <= 7.5) {
                                      isTargetSuccess = 'Atingiu a Meta :)';
                                    } else {
                                      isTargetSuccess = 'Não Atingiu a Meta :(';
                                    }
                                  }
                                } else {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                }
                              } else {
                                isTargetSuccess = 'Atingiu a Meta :)';
                              }
                            }
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        } else {
                          if (city <= 16.5) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            if (budgetDiscountCompleted <= 598.22) {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            } else {
                              if (salesCompleted <= 99181.64) {
                                isTargetSuccess = 'Não Atingiu a Meta :(';
                              } else {
                                isTargetSuccess = 'Atingiu a Meta :)';
                              }
                            }
                          }
                        }
                      }
                    } else {
                      if (itemTarget <= 3399) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        if (salesCompleted <= 84646.13) {
                          if (itemTarget <= 7280.5) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (budgetDiscountCompleted <= 408.52) {
              if (salesCompleted <= 83742.56) {
                if (budgetDiscountTarget <= 826.02) {
                  if (grossMargin <= 19394.95) {
                    if (totalDiscountTarget <= 20612.61) {
                      if (budgetDiscountCompleted <= 250.97) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  } else {
                    if (budgetDiscountTarget <= 787.49) {
                      if (budgetDiscountTarget <= 756) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        if (salesCompleted <= 77502.27) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      }
                    } else {
                      if (salesCompleted <= 79213.52) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  }
                } else {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                }
              } else {
                if (budgetDiscountTarget <= 1053) {
                  if (salesCompleted <= 89680.2) {
                    if (budgetDiscountTarget) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  } else {
                    if (totalDiscountTarget <= 46215.41) {
                      if (totalDiscountCompleted <= 43769.52) {
                        if (budgetDiscountTarget) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          if (budgetDiscountCompleted) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    } else {
                      if (customersServed <= 1216.5) {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  }
                } else {
                  if (salesCompleted <= 110127.41) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    if (itemTarget <= 3820.5) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      if (itemsSold <= 3108.5) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  }
                }
              }
            } else {
              if (itemTarget <= 4040) {
                if (itemsSold <= 2935) {
                  if (itemTarget <= 3422) {
                    if (salesCompleted <= 65970.64) {
                      if (budgetDiscountTarget <= 615.34) {
                        if (grossMargin <= 14817.12) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          if (customersServed <= 1195) {
                            if (itemsSold <= 2724.5) {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            } else {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            }
                          }
                        }
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    } else {
                      if (budgetDiscountCompleted <= 496.52) {
                        if (totalDiscountTarget <= 29366.1) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          if (daysWorked <= 20.5) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  } else {
                    if (salesCompleted <= 84358.13) {
                      if (budgetDiscountTarget <= 811.25) {
                        if (customersTarget <= 1407.5) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      }
                    } else {
                      if (budgetDiscountTarget <= 995.11) {
                        if (totalDiscountCompleted <= 49285.9) {
                          if (daysWorked <= 25.5) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            if (salesReturned <= 531.01) {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            } else {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            }
                          }
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      } else {
                        if (grossMargin <= 26499.88) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          if (budgetDiscountTarget <= 1143.96) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (budgetDiscountTarget <= 1219.58) {
                    if (salesCompleted <= 95761.75) {
                      if (budgetDiscountTarget <= 938.32) {
                        if (budgetDiscountTarget <= 898.19) {
                          if (grossMargin <= 19743.56) {
                            if (itemsSold <= 3023) {
                              isTargetSuccess = 'Atingiu a Meta :)';
                            } else {
                              isTargetSuccess = 'Não Atingiu a Meta :(';
                            }
                          } else {
                            if (customersServed <= 1022) {
                              if (budgetDiscountTarget <= 864.99) {
                                isTargetSuccess = 'Atingiu a Meta :)';
                              } else {
                                isTargetSuccess = 'Não Atingiu a Meta :(';
                              }
                            } else {
                              if (customersTarget <= 1590.5) {
                                if (budgetDiscountCompleted <= 437.35) {
                                  if (customersServed <= 1154) {
                                    isTargetSuccess = 'Não Atingiu a Meta :(';
                                  } else {
                                    isTargetSuccess = 'Atingiu a Meta :)';
                                  }
                                }
                              } else {
                                if (daysWorked <= 21.5) {
                                  isTargetSuccess = 'Não Atingiu a Meta :(';
                                } else {
                                  isTargetSuccess = 'Atingiu a Meta :)';
                                }
                              }
                            }
                          }
                        } else {
                          if (salesCompleted <= 91124.41) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        }
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    } else {
                      if (city <= 2) {
                        if (budgetDiscountTarget <= 1069.69) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          if (grossMargin <= 28228.78) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                }
              } else {
                if (totalDiscountCompleted <= 45488.97) {
                  if (budgetDiscountTarget <= 854.1) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  }
                } else {
                  if (totalDiscountTarget <= 40193.81) {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  } else {
                    if (budgetDiscountCompleted <= 1022.79) {
                      if (month <= 3) {
                        if (customersServed <= 1209) {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        } else {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        }
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  }
                }
              }
            }
          }
        } else {
          if (itemTarget <= 4313) {
            if (customersServed <= 1024) {
              isTargetSuccess = 'Atingiu a Meta :)';
            } else {
              if (grossMargin <= 13939.23) {
                isTargetSuccess = 'Atingiu a Meta :)';
              } else {
                if (itemsSold <= 3453.5) {
                  if (budgetDiscountTarget <= 1163.44) {
                    if (itemsSold <= 3451.5) {
                      if (budgetDiscountCompleted <= 1987.53) {
                        if (salesReturned <= 622.35) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          if (salesReturned <= 653.39) {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          } else {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          }
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  } else {
                    if (itemTarget <= 3862) {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    } else {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    }
                  }
                } else {
                  if (totalDiscountTarget <= 59161.44) {
                    if (grossMargin <= 26733.55) {
                      if (budgetDiscountTarget <= 1074.54) {
                        if (budgetDiscountTarget <= 993.89) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          if (daysWorked <= 25.5) {
                            isTargetSuccess = 'Atingiu a Meta :)';
                          } else {
                            isTargetSuccess = 'Não Atingiu a Meta :(';
                          }
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                }
              }
            }
          } else {
            if (itemsSold <= 4186) {
              if (itemTarget <= 4976) {
                if (salesCompleted <= 107238.88) {
                  if (salesReturned <= 568.36) {
                    if (customersServed <= 1569.5) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                } else {
                  if (city <= 16.5) {
                    if (daysWorked <= 18.5) {
                      if (budgetDiscountTarget <= 1185) {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      } else {
                        isTargetSuccess = 'Não Atingiu a Meta :(';
                      }
                    } else {
                      isTargetSuccess = 'Atingiu a Meta :)';
                    }
                  } else {
                    if (customersServed <= 1310.5) {
                      isTargetSuccess = 'Não Atingiu a Meta :(';
                    } else {
                      if (grossMargin <= 34524.69) {
                        if (budgetDiscountTarget <= 1250.2) {
                          isTargetSuccess = 'Atingiu a Meta :)';
                        } else {
                          isTargetSuccess = 'Não Atingiu a Meta :(';
                        }
                      } else {
                        isTargetSuccess = 'Atingiu a Meta :)';
                      }
                    }
                  }
                }
              } else {
                if (daysWorked <= 25.5) {
                  isTargetSuccess = 'Não Atingiu a Meta :(';
                } else {
                  if (totalDiscountCompleted <= 62660.14) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                }
              }
            } else {
              if (totalDiscountCompleted <= 49812.43) {
                isTargetSuccess = 'Atingiu a Meta :)';
              } else {
                if (itemTarget <= 5332.5) {
                  isTargetSuccess = 'Atingiu a Meta :)';
                } else {
                  if (grossMargin <= 32495.61) {
                    isTargetSuccess = 'Não Atingiu a Meta :(';
                  } else {
                    isTargetSuccess = 'Atingiu a Meta :)';
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return isTargetSuccess;
}
