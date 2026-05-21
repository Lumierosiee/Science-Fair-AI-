<!-- Educational Data and Facts Reference -->

# 📚 Educational Reference Guide

This document contains all the scientific data, facts, and calculations used in the AI Training & Climate Impact interactive project.

## 🔬 Scientific Facts & Terminology

### Data Centers
- **Global electricity consumption**: Data centers account for ~1-2% of worldwide electricity usage
- **Growth rate**: Increasing ~5-10% annually
- **Cooling requirement**: Up to 40% of data center energy used for cooling
- **Average PUE** (Power Usage Effectiveness): 1.5-2.0 (Google: 1.1)

### AI Model Training
- **GPT-3 training energy**: ~1,287 MWh (1,287,000 kWh)
- **GPT-3 training emissions**: ~355 metric tons CO₂
- **BERT training energy**: ~1,507 kWh
- **BERT training emissions**: ~0.65 metric tons CO₂
- **Training time**: Days to months depending on model size

### Carbon Emissions by Energy Source
| Energy Source | Carbon Intensity |
|---|---|
| Solar | 0.05 kg CO₂/kWh |
| Wind | 0.07 kg CO₂/kWh |
| Hydro | 0.04 kg CO₂/kWh |
| Nuclear | 0.12 kg CO₂/kWh |
| Natural Gas | 0.4-0.5 kg CO₂/kWh |
| Oil | 0.6 kg CO₂/kWh |
| Coal | 0.8-1.0 kg CO₂/kWh |
| **Global Average** | **~0.4 kg CO₂/kWh** |

### Greenhouse Gases
- **CO₂**: Main greenhouse gas; 76% of greenhouse gas emissions
- **Atmospheric lifespan**: ~300-1000 years
- **Global warming potential**: Baseline standard (GWP = 1)
- **PPM increase**: ~2.5 ppm per year currently

### Global Carbon Footprint Context
| Source | Annual CO₂ |
|---|---|
| Average human | ~4 metric tons |
| Average American | ~16 metric tons |
| Car (annual) | ~4 metric tons |
| Flight (transatlantic) | ~0.8 metric tons |
| One GPT-3 training | ~355 metric tons |
| Average data center (annual) | ~24,000-60,000 metric tons |

### Temperature & Climate
- **Current warming**: ~1.1°C above pre-industrial levels
- **Paris Agreement target**: 1.5°C limit
- **Climate sensitivity**: 1.5-4.5°C warming per CO₂ doubling
- **Arctic warming**: ~3x global average (Arctic amplification)

### Ice Melting & Sea Level
- **Arctic ice loss**: ~13% per decade
- **Greenland ice sheet**: Losing ~280 billion tons/year
- **Sea level rise**: ~3.4 mm/year currently
- **Projected rise by 2100**: 0.5-2 meters

---

## 🧮 Simulation Calculations

### Base Energy Consumption
```
Energy Rate = 5 kWh per second (default)
Daily consumption = 5 × 86,400 = 432,000 kWh/day
Annual consumption = 157.68 million kWh/year
Equivalent to: Large data center operation
```

### Carbon Emission Calculation
```
CO₂ Emissions = Energy (kWh) × Carbon Intensity (kg CO₂/kWh) ÷ 1000
              = Energy (kWh) × 0.4 ÷ 1000

Example:
- 1,000 kWh × 0.4 ÷ 1000 = 0.4 metric tons CO₂
- 10,000 kWh × 0.4 ÷ 1000 = 4 metric tons CO₂
```

### Temperature Increase (Simplified Model)
```
Temperature Change = Emissions (metric tons) × 0.05°C
                   = 1 metric ton CO₂ = 0.05°C increase

Example:
- 10 metric tons = 0.5°C
- 100 metric tons = 5°C
```

### Water Level / Ice Melting (Simplified Model)
```
Water Level = Temperature (°C) × 2%
            = 1°C = 2% water level rise

Example:
- 1°C = 2% water level
- 5°C = 10% water level
- 50°C = 100% water level (maximum)
```

### Warning Level Thresholds
| Level | Threshold | Status |
|---|---|---|
| 0 | < 0.001 | No Activity |
| 1 | ≥ 0.001 | Low |
| 2 | ≥ 0.005 | Moderate |
| 3 | ≥ 0.01 | High |
| 4 | ≥ 0.02 | Critical |

**Metric**: Measured in metric tons of CO₂

---

## 📊 Real-World Comparisons

### Energy Consumption Comparisons
- **US household (annual)**: ~10,500 kWh
- **Default simulation (1 hour)**: 18,000 kWh
- **Large AI model training**: ~1,000,000+ kWh
- **Data center (annual)**: ~50-100 million kWh

### Emission Comparisons (at 0.4 kg CO₂/kWh)
- **1 kWh**: 0.0004 metric tons CO₂ (400 grams)
- **100 kWh**: 0.04 metric tons CO₂
- **1,000 kWh**: 0.4 metric tons CO₂
- **1 million kWh**: 400 metric tons CO₂

### Equivalence to Common Activities
- **1 metric ton CO₂** ≈
  - 5 transatlantic flights
  - 1/4 year for one human
  - 400 miles in a car
  - 2,500 kWh electricity

### Real Model Training Data
- **Small model**: 10-100 metric tons CO₂
- **Medium model (like BERT)**: 0.65-600 metric tons CO₂
- **Large model (like GPT-3)**: 355+ metric tons CO₂
- **Very Large model (like GPT-3.5)**: 400-600+ metric tons CO₂

---

## 🌍 Environmental Impact Ladder

### Simulation Milestones
| Emissions | Temperature | Water Level | Stage | Impact |
|---|---|---|---|---|
| 0 | 0°C | 0% | Initial | No impact |
| 0.1 | 0.005°C | 0.01% | Starting | Minimal |
| 0.5 | 0.025°C | 0.05% | Early | Low |
| 1.0 | 0.05°C | 0.1% | Developing | Moderate |
| 5.0 | 0.25°C | 0.5% | Significant | High |
| 10.0 | 0.5°C | 1% | Major | Very High |
| 50.0+ | 2.5°C+ | 5%+ | Critical | Critical |

---

## 🎓 Educational Learning Goals

### Understanding Concepts
1. **Energy**: Power requirement for computing
2. **Emissions**: CO₂ from energy production
3. **Climate**: Global warming from greenhouse gases
4. **Sustainability**: Long-term environmental health
5. **Renewable**: Clean energy alternatives
6. **Carbon Footprint**: Total environmental cost
7. **Impact**: Visible consequences of actions

### Critical Thinking Questions
1. How does energy source affect carbon emissions?
2. Why do we need to train AI models?
3. What are solutions to reduce emissions?
4. How much is 100 metric tons of CO₂?
5. Why does Arctic ice matter to everyone?
6. How can technology help reduce emissions?
7. What's my personal carbon footprint?

---

## 🔍 Simulation Accuracy Notes

### Simplified vs. Reality

| Aspect | Simulation | Reality |
|---|---|---|
| Temperature model | Linear | Non-linear |
| CO₂ residence | Not modeled | 300-1000 years |
| Regional variation | Single value | Varies globally |
| Feedback loops | Not included | Complex (albedo, etc.) |
| Time scale | Seconds | Years to centuries |
| Source mix | Fixed | Variable |

### Why We Simplify
- **Comprehension**: Easier for students to understand
- **Visualization**: Visible changes in short time
- **Engagement**: Interactive and responsive
- **Educational**: Focus on concepts, not exact predictions

### Real-World Equivalency
- Simulation `1 second` ≈ Real world `days to weeks`
- Simulation `1 metric ton CO₂` ≈ Real `0.25 tons` at this scale
- Use for demonstration and concept learning, not predictions

---

## 🎯 Customization Data Points

### Preset Scenarios

#### Scenario 1: Green Data Center
```
Energy Rate: 5 kWh/sec
Carbon Intensity: 0.05 kg CO₂/kWh (renewable)
```

#### Scenario 2: Average Global Mix
```
Energy Rate: 5 kWh/sec
Carbon Intensity: 0.4 kg CO₂/kWh (mixed)
```

#### Scenario 3: Coal-Heavy Region
```
Energy Rate: 5 kWh/sec
Carbon Intensity: 0.9 kg CO₂/kWh (coal)
```

#### Scenario 4: Intensive Training
```
Energy Rate: 20 kWh/sec (4x normal)
Carbon Intensity: 0.4 kg CO₂/kWh
```

---

## 📈 Data for Discussion

### Energy Sector Statistics
- **World electricity production**: ~28,000 TWh/year
- **Data center percentage**: 1-2% (~280-560 TWh)
- **Growth rate**: 5-10% annually
- **Renewable percentage**: ~29% globally (2023)

### Emissions Sector Statistics
- **Global CO₂ emissions**: ~36 billion metric tons/year
- **Energy sector**: ~73% of emissions
- **Data center contribution**: 0.3-0.4% (~120-160 million tons/year)
- **Growth trajectory**: Increasing ~8-10% annually

### Renewable Energy Progress
- **Solar cost reduction**: -90% (2010-2020)
- **Wind cost reduction**: -70% (2010-2020)
- **Renewable capacity growth**: ~260 GW annually
- **Target by 2050**: 80-90% renewable energy

---

## 🌱 Sustainability Solutions Mentioned

1. **Green Data Centers**
   - Renewable energy procurement (100%)
   - Efficient cooling systems (AI optimized)
   - Waste heat recovery

2. **Algorithm Efficiency**
   - Model pruning (reducing size)
   - Knowledge distillation
   - Mixed precision training

3. **Energy Infrastructure**
   - Renewable energy expansion
   - Smart grid technology
   - Battery storage

4. **Carbon Offsetting**
   - Reforestation programs
   - Carbon capture technology
   - Renewable energy credits

---

## 🔗 Related Topics for Extension

- Climate science and atmospheric physics
- Renewable energy technologies
- Energy efficiency in computing
- Sustainable technology practices
- Environmental policy and carbon pricing
- Data center design and operations
- Machine learning model optimization
- Global energy systems

---

**Last Updated**: May 2026
**Educational Level**: Middle School (6-8) and High School (9-12)
**Accuracy Level**: Conceptual and Simplified for Educational Purposes

For up-to-date scientific data, refer to:
- IPCC Climate Reports
- International Energy Agency (IEA)
- Environmental Protection Agency (EPA)
- National Oceanic and Atmospheric Administration (NOAA)
- Google AI Environmental Report
