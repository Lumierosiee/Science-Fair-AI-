# 🌍 AI Training & Climate Impact

The environmental impact of training large AI models, including energy consumption, carbon emissions, and their effects on climate change.

## 📋 Project Overview

This science fair project demonstrates the relationship between:
- **Energy Consumption**: Measured in kilowatt-hours (kWh) from data centers running AI training
- **Carbon Emissions**: Measured in metric tons of CO₂ released into the atmosphere
- **Climate Impact**: Temperature rise, Arctic ice melting, and environmental warning levels

The application features real-time graphs, animated visualizations, and educational content designed for middle school students learning about sustainability and environmental science.

## 🎨 Features

### Interactive Controls
- **Start/Pause/Reset Buttons**: Control the simulation
- **Speed Adjustment**: Run the simulation at 0.5x to 3x speed
- **Keyboard Shortcuts**:
  - `Space`: Start simulation
  - `P`: Pause/Resume
  - `R`: Reset

### Real-Time Counters
- **Energy Consumption Counter**: Displays kWh in real-time
- **Carbon Emissions Counter**: Displays metric tons of CO₂
- **CO₂/kWh Ratio**: Shows carbon intensity of energy sources

### Live Graph
- Dual-axis chart showing energy consumption and emissions over time
- Color-coded for easy distinction (orange for energy, red for emissions)
- Updates in real-time as the simulation runs

### Visual Animations

#### Data Center Heat Waves
- Animated ripples emanating from a data center building
- Intensity increases with energy consumption
- Demonstrates heat generation from computational processes

#### Rising Smoke
- Five animated smoke particles rising from the visualization
- Represents CO₂ emissions entering the atmosphere
- Creates a continuous flow effect

#### Temperature Indicator
- Mercury thermometer that rises with increasing emissions
- Shows temperature increase in °C
- Visual representation of global warming effects

#### Arctic Ice Melting
- Three animated ice blocks melting into water
- Water level rises as temperature increases
- Demonstrates climate change impact on polar regions

#### Warning Level Indicator
- Four warning bars (Low, Moderate, High, Critical)
- Activates progressively as emissions increase
- Visual alert system for environmental impact

### Educational Content

Six fact boxes covering:
1. **Data Centers**: Global electricity consumption and infrastructure
2. **AI Model Training**: Computational requirements and energy demands
3. **Carbon Footprint**: Energy source comparison (renewable vs. fossil fuels)
4. **Sustainability**: Solutions and renewable energy adoption
5. **Greenhouse Gases**: Climate change mechanisms and CO₂ impact
6. **Comparison**: Real-world emissions equivalents and urgency

## 🚀 Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection (for Chart.js library)

### Installation
1. Open `index.html` in your web browser
2. The application loads automatically

### No Installation Needed!
All files are self-contained. Simply open the HTML file to run the simulation.

## 📊 Simulation Parameters

### Energy Consumption
- Base rate: 5 kWh per second
- Can be adjusted by changing `energyRate` in `script.js`

### Carbon Intensity
- Default: 0.4 kg CO₂ per kWh (global average)
- Can be modified to show different energy sources:
  - Renewable energy: 0.05 kg CO₂/kWh
  - Natural gas: 0.4 kg CO₂/kWh
  - Coal: 0.9 kg CO₂/kWh

### Temperature Model
- 1 metric ton CO₂ = 0.05°C temperature increase
- Simplified model for educational purposes

### Water Level
- 1°C temperature increase = 2% water level rise
- Represents Arctic ice melting

## 🎓 Educational Learning Outcomes

Students will learn:
1. **Energy consumption** of modern AI and data centers
2. **Carbon emissions** and their sources
3. **Climate change** mechanisms and global warming
4. **Renewable energy** as a sustainable solution
5. **Environmental impact** of technology
6. **Greenhouse gases** and their effects
7. **Sustainability** and carbon footprint reduction

## 🔧 Customization

### Modify Energy Rate
Edit `script.js`, line ~40:
```javascript
const energyRate = 5; // Change this value
```

### Change Carbon Intensity
Edit `script.js`, line ~46:
```javascript
const carbonIntensity = 0.4; // kg CO2 per kWh
```

### Adjust Color Scheme
Edit `styles.css`, lines ~7-16 to modify CSS variables:
```css
--primary-color: #00d4ff;
--secondary-color: #ff6b6b;
--tertiary-color: #51cf66;
```

### Customize Animation Speed
Modify animation durations in `styles.css` (search for `animation-duration`)

## 📁 File Structure

```
Science-Fair-AI-/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Simulation logic and interactivity
└── README.md       # Documentation (this file)
```

## 🌐 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ❌ Not Supported |

## 📈 Data Representation

### Energy Consumption
- Measured in kilowatt-hours (kWh)
- 1 kWh = Energy to power a 100W bulb for 10 hours
- Training large AI models can consume thousands of kWh

### Carbon Emissions
- Measured in metric tons of CO₂
- 1 metric ton = 1000 kg
- Average person: ~4 metric tons CO₂ per year
- Large AI model training: 100-600 metric tons CO₂

### Comparison Context
- Training one large AI model ≈ Carbon footprint of several humans for one year
- Running a data center for one year ≈ Emissions from thousands of cars

## 🎯 Science Fair Presentation Tips

1. **Interactive Demo**: Let visitors start the simulation and observe real-time changes
2. **Discussion Points**: 
   - Why does energy consumption matter?
   - How can we reduce AI's environmental impact?
   - What role do renewable energies play?
3. **Real Data**: Reference actual AI training emissions (GPT-3: ~355 metric tons CO₂)
4. **Solutions**: Discuss green data centers, efficient algorithms, renewable energy
5. **Engagement**: Let visitors adjust the simulation speed and understand cause-and-effect

## 📚 References & Sources

- International Energy Agency (IEA) - Data Center Energy Use
- Google AI - Environmental Impact of AI
- IPCC - Climate Change Reports
- EPA - Greenhouse Gas Emissions
- Carbon Footprint Calculator Studies

## 🔬 Scientific Accuracy

This simulation uses simplified models for educational purposes:
- Temperature increase model is non-linear in reality
- CO₂ atmospheric residence time not modeled
- Carbon intensity varies by region and energy mix
- This is a conceptual demonstration, not a full climate model

## 💡 Extend the Project

Ideas for enhancements:
- Add renewable vs. fossil fuel energy source toggle
- Implement carbon offset calculations
- Create scenarios for different AI model sizes
- Add data center efficiency improvements
- Include international energy mix comparison
- Track annual emissions vs. one year of human activity

## 🤝 Contributing

This is an educational project. Feel free to modify and enhance it!

## 📝 License

This project is provided as-is for educational purposes.

## ✨ Features Showcase

- **Modern UI**: Gradient backgrounds, smooth animations, responsive design
- **Real-time Updates**: Live counters and chart updates
- **Educational**: Clear explanations of climate science concepts
- **Interactive**: Full simulation control with adjustable parameters
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Accessible**: Clear labels, readable fonts, color-coded information

## 🎨 Design Philosophy

The application uses:
- **Color Psychology**: 
  - Blue/Cyan: Energy and technology
  - Red/Orange: Danger and emissions
  - Green: Solutions and sustainability
- **Smooth Animations**: Ease-in-out functions for natural motion
- **Dark Theme**: Easy on eyes, modern appearance
- **Clear Hierarchy**: Important information emphasized
- **Educational Focus**: Science-focused language and concepts

## 📞 Support

For questions or suggestions:
1. Review the educational content in the info section
2. Experiment with different simulation speeds
3. Modify parameters to understand cause-and-effect
4. Research actual data centers and AI training emissions

---

**Created for**: Science Fair Project
**Subject**: Environmental Science, Technology, Climate Change
**Grade Level**: Middle School (6-8) and High School (9-12)
**Duration**: 5-15 minutes per interactive session

Enjoy learning about AI, energy, and environmental impact! 🌍